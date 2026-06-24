import { describe, it, expect } from 'vitest';
import {
  XP_PER_QUIZ_CORRECT,
  XP_PER_GRAMMAR_CORRECT,
  MAX_QUIZ_QUESTIONS,
  WRONG_ANSWER_COUNT,
  MAX_HEARTS,
  LEVELS,
  GRADE_EXCELLENT_THRESHOLD,
  GRADE_GREAT_THRESHOLD,
  GRADE_GOOD_THRESHOLD,
} from '../constants';

describe('Level thresholds', () => {
  it('has 4 levels defined', () => {
    expect(LEVELS.length).toBe(4);
  });

  it('first level is beginner at 0 XP', () => {
    expect(LEVELS[0].name).toBe('beginner');
    expect(LEVELS[0].minXP).toBe(0);
  });

  it('second level is intermediate at 500 XP', () => {
    expect(LEVELS[1].name).toBe('intermediate');
    expect(LEVELS[1].minXP).toBe(500);
  });

  it('third level is advanced at 1500 XP', () => {
    expect(LEVELS[2].name).toBe('advanced');
    expect(LEVELS[2].minXP).toBe(1500);
  });

  it('fourth level is expert at 4000 XP', () => {
    expect(LEVELS[3].name).toBe('expert');
    expect(LEVELS[3].minXP).toBe(4000);
  });

  it('expert has Infinity maxXP', () => {
    expect(LEVELS[3].maxXP).toBe(Infinity);
  });

  it('beginner range is 0-500', () => {
    expect(LEVELS[0].minXP).toBe(0);
    expect(LEVELS[0].maxXP).toBe(500);
  });

  it('intermediate range is 500-1500', () => {
    expect(LEVELS[1].minXP).toBe(500);
    expect(LEVELS[1].maxXP).toBe(1500);
  });

  it('advanced range is 1500-4000', () => {
    expect(LEVELS[2].minXP).toBe(1500);
    expect(LEVELS[2].maxXP).toBe(4000);
  });
});

describe('Hearts system', () => {
  it('MAX_HEARTS is 3', () => {
    expect(MAX_HEARTS).toBe(3);
  });
});

describe('XP values', () => {
  it('XP_PER_QUIZ_CORRECT * 10 = max quiz XP per round (150)', () => {
    expect(XP_PER_QUIZ_CORRECT * 10).toBe(150);
  });

  it('XP_PER_QUIZ_CORRECT is 15', () => {
    expect(XP_PER_QUIZ_CORRECT).toBe(15);
  });

  it('XP_PER_GRAMMAR_CORRECT is 10', () => {
    expect(XP_PER_GRAMMAR_CORRECT).toBe(10);
  });

  it('MAX_QUIZ_QUESTIONS is 10', () => {
    expect(MAX_QUIZ_QUESTIONS).toBe(10);
  });

  it('WRONG_ANSWER_COUNT is 3 (plus correct = 4 total options)', () => {
    expect(WRONG_ANSWER_COUNT).toBe(3);
  });

  it('WRONG_ANSWER_COUNT + 1 = 4 (total options per question)', () => {
    expect(WRONG_ANSWER_COUNT + 1).toBe(4);
  });
});

describe('Grade thresholds', () => {
  it('EXCELLENT is 90', () => {
    expect(GRADE_EXCELLENT_THRESHOLD).toBe(90);
  });

  it('GREAT is 70', () => {
    expect(GRADE_GREAT_THRESHOLD).toBe(70);
  });

  it('GOOD is 50', () => {
    expect(GRADE_GOOD_THRESHOLD).toBe(50);
  });

  it('thresholds are in descending order', () => {
    expect(GRADE_EXCELLENT_THRESHOLD).toBeGreaterThan(GRADE_GREAT_THRESHOLD);
    expect(GRADE_GREAT_THRESHOLD).toBeGreaterThan(GRADE_GOOD_THRESHOLD);
  });
});
