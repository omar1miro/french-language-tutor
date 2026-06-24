import { describe, it, expect } from 'vitest';
import {
  createQuizSession,
  submitAnswer,
  isSessionComplete,
  getSessionResults
} from '../utils/session-manager';

const mockQuestions = [
  { id: 1, correctAnswer: 'bonjour' },
  { id: 2, correctAnswer: 'merci' },
  { id: 3, correctAnswer: 'au revoir' }
];

describe('createQuizSession', () => {
  it('creates a session with initial state', () => {
    const session = createQuizSession(mockQuestions);
    expect(session.questions).toEqual(mockQuestions);
    expect(session.currentIndex).toBe(0);
    expect(session.answers).toEqual([]);
    expect(session.hearts).toBe(3);
    expect(session.complete).toBe(false);
  });
});

describe('submitAnswer', () => {
  it('records a correct answer', () => {
    const session = createQuizSession(mockQuestions);
    const updated = submitAnswer(session, 0, 'bonjour');
    expect(updated.answers).toHaveLength(1);
    expect(updated.answers[0].correct).toBe(true);
    expect(updated.hearts).toBe(3);
  });

  it('deducts heart for wrong answer', () => {
    const session = createQuizSession(mockQuestions);
    const updated = submitAnswer(session, 0, 'wrong');
    expect(updated.answers[0].correct).toBe(false);
    expect(updated.hearts).toBe(2);
  });

  it('marks complete when hearts reach 0', () => {
    let session = createQuizSession(mockQuestions);
    session = submitAnswer(session, 0, 'wrong');
    session = submitAnswer(session, 1, 'wrong');
    session = submitAnswer(session, 2, 'wrong');
    expect(session.complete).toBe(true);
    expect(session.hearts).toBe(0);
  });

  it('marks complete when all questions answered', () => {
    let session = createQuizSession(mockQuestions);
    session = submitAnswer(session, 0, 'bonjour');
    session = submitAnswer(session, 1, 'merci');
    session = submitAnswer(session, 2, 'au revoir');
    expect(session.complete).toBe(true);
  });

  it('returns original session for invalid question index', () => {
    const session = createQuizSession(mockQuestions);
    const updated = submitAnswer(session, 99, 'bonjour');
    expect(updated).toEqual(session);
  });
});

describe('isSessionComplete', () => {
  it('returns false for fresh session', () => {
    const session = createQuizSession(mockQuestions);
    expect(isSessionComplete(session)).toBe(false);
  });

  it('returns true when hearts depleted', () => {
    const session = { ...createQuizSession(mockQuestions), hearts: 0 };
    expect(isSessionComplete(session)).toBe(true);
  });

  it('returns true when all answers submitted', () => {
    const session = {
      ...createQuizSession(mockQuestions),
      answers: mockQuestions.map((q) => ({ questionId: q.id, answer: 'x', correct: true }))
    };
    expect(isSessionComplete(session)).toBe(true);
  });
});

describe('getSessionResults', () => {
  it('calculates results correctly', () => {
    let session = createQuizSession(mockQuestions);
    session = submitAnswer(session, 0, 'bonjour');
    session = submitAnswer(session, 1, 'wrong');
    session = submitAnswer(session, 2, 'au revoir');

    const results = getSessionResults(session);
    expect(results.correct).toBe(2);
    expect(results.total).toBe(3);
    expect(results.percentage).toBe(67);
    expect(results.grade).toBe('Good effort!');
  });

  it('returns Excellent for perfect score', () => {
    let session = createQuizSession(mockQuestions);
    session = submitAnswer(session, 0, 'bonjour');
    session = submitAnswer(session, 1, 'merci');
    session = submitAnswer(session, 2, 'au revoir');

    const results = getSessionResults(session);
    expect(results.grade).toBe('Excellent!');
  });
});
