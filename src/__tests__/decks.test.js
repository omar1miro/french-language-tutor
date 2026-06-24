import { describe, it, expect } from 'vitest';
import { PRESET_DECKS } from '../data/decks';

describe('PRESET_DECKS', () => {
  it('is a non-empty object', () => {
    expect(typeof PRESET_DECKS).toBe('object');
    expect(Object.keys(PRESET_DECKS).length).toBeGreaterThan(0);
  });

  it('has multiple decks', () => {
    const deckKeys = Object.keys(PRESET_DECKS);
    expect(deckKeys.length).toBeGreaterThanOrEqual(5);
  });

  it('no deck is empty', () => {
    for (const [key, deck] of Object.entries(PRESET_DECKS)) {
      expect(deck.cards.length).toBeGreaterThan(0);
    }
  });

  it('each deck has required fields (title, icon, difficulty, cards)', () => {
    for (const [key, deck] of Object.entries(PRESET_DECKS)) {
      expect(deck).toHaveProperty('title');
      expect(deck).toHaveProperty('icon');
      expect(deck).toHaveProperty('difficulty');
      expect(deck).toHaveProperty('cards');
    }
  });

  it('each card has required fields (french, english, pronunciation)', () => {
    for (const [key, deck] of Object.entries(PRESET_DECKS)) {
      for (const card of deck.cards) {
        expect(card).toHaveProperty('french');
        expect(card).toHaveProperty('english');
        expect(card).toHaveProperty('pronunciation');
      }
    }
  });

  it('each card has example and example_english', () => {
    for (const [key, deck] of Object.entries(PRESET_DECKS)) {
      for (const card of deck.cards) {
        expect(card).toHaveProperty('example');
        expect(card).toHaveProperty('example_english');
      }
    }
  });

  it('all deck difficulties are valid', () => {
    const validDifficulties = ['beginner', 'intermediate', 'advanced'];
    for (const [key, deck] of Object.entries(PRESET_DECKS)) {
      expect(validDifficulties).toContain(deck.difficulty);
    }
  });

  it('has expected deck keys', () => {
    const expectedKeys = ['greetings', 'food', 'travel', 'numbers', 'animals', 'body', 'weather'];
    for (const key of expectedKeys) {
      expect(PRESET_DECKS).toHaveProperty(key);
    }
  });

  it('has decks at multiple difficulty levels', () => {
    const difficulties = new Set(
      Object.values(PRESET_DECKS).map(d => d.difficulty)
    );
    expect(difficulties.size).toBeGreaterThanOrEqual(2);
  });
});
