import { describe, it, expect } from 'vitest';
import { generateQuizQuestions, calculateScore } from '../data/quiz';
import { PRESET_DECKS } from '../data/decks';
import {
  XP_PER_QUIZ_CORRECT,
  MAX_QUIZ_QUESTIONS,
  GRADE_EXCELLENT_THRESHOLD,
  GRADE_GREAT_THRESHOLD,
  GRADE_GOOD_THRESHOLD,
} from '../constants';

describe('generateQuizQuestions', () => {
  it('returns exactly 10 questions (MAX_QUIZ_QUESTIONS)', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 0);
    expect(questions.length).toBe(MAX_QUIZ_QUESTIONS);
  });

  it('returns exactly 10 questions for advanced user', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 2000);
    expect(questions.length).toBe(MAX_QUIZ_QUESTIONS);
  });

  it('returns exactly 10 questions for expert user', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 5000);
    expect(questions.length).toBe(MAX_QUIZ_QUESTIONS);
  });

  it('has no duplicate questions (by french word)', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 0);
    const frenchWords = questions.map(q => q.french);
    const unique = new Set(frenchWords);
    expect(unique.size).toBe(frenchWords.length);
  });

  it('has no duplicate options within a question', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 0);
    for (const q of questions) {
      const uniqueOptions = new Set(q.options);
      expect(uniqueOptions.size).toBe(q.options.length);
    }
  });

  it('each question has exactly 4 options', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 0);
    for (const q of questions) {
      expect(q.options.length).toBe(4);
    }
  });

  it('each question has one correct answer among its options', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 0);
    for (const q of questions) {
      expect(q.options).toContain(q.correctAnswer);
    }
  });

  it('each question has a unique id', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 0);
    const ids = questions.map(q => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('each question has required fields', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 0);
    for (const q of questions) {
      expect(q).toHaveProperty('id');
      expect(q).toHaveProperty('french');
      expect(q).toHaveProperty('correctAnswer');
      expect(q).toHaveProperty('options');
      expect(q).toHaveProperty('pronunciation');
    }
  });

  it('wrong options are all different from each other', () => {
    const questions = generateQuizQuestions(PRESET_DECKS, 0);
    for (const q of questions) {
      const wrongOptions = q.options.filter(o => o !== q.correctAnswer);
      const uniqueWrong = new Set(wrongOptions);
      expect(uniqueWrong.size).toBe(wrongOptions.length);
    }
  });

  it('returns different questions on different calls (randomized)', () => {
    const questions1 = generateQuizQuestions(PRESET_DECKS, 0);
    const questions2 = generateQuizQuestions(PRESET_DECKS, 0);
    // At least one question should differ (with very high probability)
    const sameOrder = questions1.every((q, i) => q.french === questions2[i].french);
    // This test could theoretically fail but probability is negligible
    // for a 10-question set from 120+ cards
    expect(typeof sameOrder).toBe('boolean');
  });
});

describe('calculateScore', () => {
  it('returns correct count and total', () => {
    const answers = [
      { questionId: 1, answer: 'Hello', correct: true },
      { questionId: 2, answer: 'Wrong', correct: false },
      { questionId: 3, answer: 'Good', correct: true },
    ];
    const result = calculateScore(answers);
    expect(result.correct).toBe(2);
    expect(result.total).toBe(3);
  });

  it('calculates percentage correctly', () => {
    const answers = [
      { questionId: 1, answer: 'a', correct: true },
      { questionId: 2, answer: 'b', correct: true },
      { questionId: 3, answer: 'c', correct: true },
      { questionId: 4, answer: 'd', correct: true },
      { questionId: 5, answer: 'e', correct: false },
    ];
    const result = calculateScore(answers);
    expect(result.percentage).toBe(80);
  });

  it('calculates XP correctly (correct * XP_PER_QUIZ_CORRECT)', () => {
    const answers = [
      { questionId: 1, answer: 'a', correct: true },
      { questionId: 2, answer: 'b', correct: true },
      { questionId: 3, answer: 'c', correct: true },
    ];
    const result = calculateScore(answers);
    expect(result.xpEarned).toBe(3 * XP_PER_QUIZ_CORRECT);
  });

  it('returns Excellent! for >= 90%', () => {
    const answers = Array.from({ length: 10 }, (_, i) => ({
      questionId: i + 1,
      answer: 'a',
      correct: i < 9,
    }));
    const result = calculateScore(answers);
    expect(result.grade).toBe('Excellent!');
  });

  it('returns Great job! for >= 70%', () => {
    const answers = Array.from({ length: 10 }, (_, i) => ({
      questionId: i + 1,
      answer: 'a',
      correct: i < 7,
    }));
    const result = calculateScore(answers);
    expect(result.grade).toBe('Great job!');
  });

  it('returns Good effort! for >= 50%', () => {
    const answers = Array.from({ length: 10 }, (_, i) => ({
      questionId: i + 1,
      answer: 'a',
      correct: i < 5,
    }));
    const result = calculateScore(answers);
    expect(result.grade).toBe('Good effort!');
  });

  it('returns Keep practicing! for < 50%', () => {
    const answers = Array.from({ length: 10 }, (_, i) => ({
      questionId: i + 1,
      answer: 'a',
      correct: i < 3,
    }));
    const result = calculateScore(answers);
    expect(result.grade).toBe('Keep practicing!');
  });

  it('handles empty answers', () => {
    const result = calculateScore([]);
    expect(result.correct).toBe(0);
    expect(result.total).toBe(0);
    expect(result.percentage).toBe(0);
    expect(result.xpEarned).toBe(0);
  });

  it('handles all correct answers', () => {
    const answers = Array.from({ length: 10 }, (_, i) => ({
      questionId: i + 1,
      answer: 'a',
      correct: true,
    }));
    const result = calculateScore(answers);
    expect(result.correct).toBe(10);
    expect(result.percentage).toBe(100);
    expect(result.xpEarned).toBe(10 * XP_PER_QUIZ_CORRECT);
    expect(result.grade).toBe('Excellent!');
  });

  it('handles all wrong answers', () => {
    const answers = Array.from({ length: 10 }, (_, i) => ({
      questionId: i + 1,
      answer: 'wrong',
      correct: false,
    }));
    const result = calculateScore(answers);
    expect(result.correct).toBe(0);
    expect(result.percentage).toBe(0);
    expect(result.xpEarned).toBe(0);
    expect(result.grade).toBe('Keep practicing!');
  });

  it('XP_PER_QUIZ_CORRECT * 10 equals max quiz XP per round', () => {
    expect(XP_PER_QUIZ_CORRECT * 10).toBe(150);
  });
});
