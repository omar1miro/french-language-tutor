import { describe, it, expect } from 'vitest';
import { GRAMMAR_EXERCISES } from '../data/grammar';
import { XP_PER_GRAMMAR_CORRECT } from '../constants';

describe('GRAMMAR_EXERCISES', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(GRAMMAR_EXERCISES)).toBe(true);
    expect(GRAMMAR_EXERCISES.length).toBeGreaterThan(0);
  });

  it('each exercise has required fields', () => {
    for (const ex of GRAMMAR_EXERCISES) {
      expect(ex).toHaveProperty('id');
      expect(ex).toHaveProperty('difficulty');
      expect(ex).toHaveProperty('type');
      expect(ex).toHaveProperty('instruction');
      expect(ex).toHaveProperty('answer');
      expect(ex).toHaveProperty('options');
      expect(ex).toHaveProperty('explanation');
    }
  });

  it('each exercise has exactly 4 options', () => {
    for (const ex of GRAMMAR_EXERCISES) {
      expect(ex.options.length).toBe(4);
    }
  });

  it('each exercise answer is among its options', () => {
    for (const ex of GRAMMAR_EXERCISES) {
      expect(ex.options).toContain(ex.answer);
    }
  });

  it('no duplicate options within any exercise', () => {
    for (const ex of GRAMMAR_EXERCISES) {
      const uniqueOptions = new Set(ex.options);
      expect(uniqueOptions.size).toBe(ex.options.length);
    }
  });

  it('each exercise has a unique id', () => {
    const ids = GRAMMAR_EXERCISES.map(ex => ex.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('all exercises have valid difficulty levels', () => {
    const validDifficulties = ['beginner', 'intermediate', 'advanced'];
    for (const ex of GRAMMAR_EXERCISES) {
      expect(validDifficulties).toContain(ex.difficulty);
    }
  });

  it('all exercises have valid types', () => {
    const validTypes = ['fill-blank', 'conjugation'];
    for (const ex of GRAMMAR_EXERCISES) {
      expect(validTypes).toContain(ex.type);
    }
  });

  it('has exercises at all difficulty levels', () => {
    const difficulties = new Set(GRAMMAR_EXERCISES.map(ex => ex.difficulty));
    expect(difficulties.has('beginner')).toBe(true);
    expect(difficulties.has('intermediate')).toBe(true);
    expect(difficulties.has('advanced')).toBe(true);
  });
});

describe('Grammar XP rewards', () => {
  it('XP_PER_GRAMMAR_CORRECT is 10', () => {
    expect(XP_PER_GRAMMAR_CORRECT).toBe(10);
  });

  it('XP_PER_GRAMMAR_CORRECT is less than XP_PER_QUIZ_CORRECT', () => {
    const { XP_PER_QUIZ_CORRECT } = require('../constants');
    expect(XP_PER_GRAMMAR_CORRECT).toBeLessThan(XP_PER_QUIZ_CORRECT);
  });
});
