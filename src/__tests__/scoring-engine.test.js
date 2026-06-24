import { describe, it, expect } from 'vitest';
import {
  getCurrentLevel,
  calculateXP,
  calculateQuizScore,
  calculateGrammarScore,
  STREAK_BONUS_THRESHOLD,
  STREAK_MULTIPLIER
} from '../utils/scoring-engine';

describe('getCurrentLevel', () => {
  it('returns beginner for 0 XP', () => {
    const level = getCurrentLevel(0);
    expect(level.name).toBe('beginner');
    expect(level.xpToNext).toBe(500);
  });

  it('returns beginner for 499 XP', () => {
    const level = getCurrentLevel(499);
    expect(level.name).toBe('beginner');
  });

  it('returns intermediate for 500 XP', () => {
    const level = getCurrentLevel(500);
    expect(level.name).toBe('intermediate');
    expect(level.xpToNext).toBe(1000);
  });

  it('returns advanced for 1500 XP', () => {
    const level = getCurrentLevel(1500);
    expect(level.name).toBe('advanced');
    expect(level.xpToNext).toBe(2500);
  });

  it('returns expert for 4000 XP', () => {
    const level = getCurrentLevel(4000);
    expect(level.name).toBe('expert');
    expect(level.xpToNext).toBe(0);
    expect(level.progress).toBe(100);
  });

  it('calculates progress correctly within a level', () => {
    const level = getCurrentLevel(750);
    expect(level.name).toBe('intermediate');
    expect(level.progress).toBe(25);
  });
});

describe('calculateXP', () => {
  it('returns base XP with no modifiers', () => {
    expect(calculateXP(10)).toBe(10);
  });

  it('applies streak multiplier when threshold met', () => {
    const result = calculateXP(10, { streakDays: STREAK_BONUS_THRESHOLD });
    expect(result).toBe(Math.round(10 * STREAK_MULTIPLIER));
  });

  it('does not apply streak multiplier below threshold', () => {
    expect(calculateXP(10, { streakDays: 2 })).toBe(10);
  });

  it('applies difficulty multiplier', () => {
    expect(calculateXP(10, { difficulty: 'intermediate' })).toBe(15);
    expect(calculateXP(10, { difficulty: 'advanced' })).toBe(20);
  });

  it('applies combo bonus', () => {
    const result = calculateXP(10, { combo: 3 });
    expect(result).toBeGreaterThan(10);
  });

  it('caps combo bonus at 50%', () => {
    const result = calculateXP(10, { combo: 10 });
    expect(result).toBe(15);
  });
});

describe('calculateQuizScore', () => {
  const answers = [
    { correct: true },
    { correct: true },
    { correct: false },
    { correct: true },
    { correct: true }
  ];

  it('calculates correct count and percentage', () => {
    const result = calculateQuizScore(answers);
    expect(result.correct).toBe(4);
    expect(result.total).toBe(5);
    expect(result.percentage).toBe(80);
  });

  it('returns Excellent for 90%+', () => {
    const highAnswers = Array(10).fill({ correct: true });
    const result = calculateQuizScore(highAnswers);
    expect(result.grade).toBe('Excellent!');
  });

  it('returns Keep practicing for <50%', () => {
    const lowAnswers = [{ correct: false }, { correct: false }, { correct: true }];
    const result = calculateQuizScore(lowAnswers);
    expect(result.grade).toBe('Keep practicing!');
  });

  it('handles empty answers', () => {
    const result = calculateQuizScore([]);
    expect(result.percentage).toBe(0);
    expect(result.totalXP).toBe(0);
  });
});

describe('calculateGrammarScore', () => {
  const results = [
    { correct: true },
    { correct: false },
    { correct: true }
  ];

  it('calculates grammar score correctly', () => {
    const score = calculateGrammarScore(results);
    expect(score.correct).toBe(2);
    expect(score.total).toBe(3);
    expect(score.percentage).toBe(67);
  });

  it('applies streak bonus to grammar XP', () => {
    const withoutStreak = calculateGrammarScore(results, 0);
    const withStreak = calculateGrammarScore(results, STREAK_BONUS_THRESHOLD);
    expect(withStreak.totalXP).toBeGreaterThan(withoutStreak.totalXP);
  });
});
