import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import QuizTab from '../components/Quiz/QuizTab';

// Mock the quiz data module
vi.mock('../data/quiz', () => ({
  generateQuizQuestions: vi.fn(() => [
    {
      id: 1,
      french: 'bonjour',
      english: 'hello',
      pronunciation: 'bɔ̃ʒuʁ',
      correctAnswer: 'hello',
      options: ['hello', 'goodbye', 'thanks', 'please'],
      example: 'Bonjour!',
      example_english: 'Hello!'
    },
    {
      id: 2,
      french: 'merci',
      english: 'thank you',
      pronunciation: 'mɛʁsi',
      correctAnswer: 'thank you',
      options: ['hello', 'thank you', 'please', 'sorry'],
      example: 'Merci beaucoup!',
      example_english: 'Thank you very much!'
    }
  ]),
  calculateScore: vi.fn((answers) => {
    const correct = answers.filter(a => a.correct).length;
    const total = answers.length;
    return {
      correct,
      total,
      percentage: Math.round((correct / total) * 100),
      xpEarned: correct * 15,
      grade: correct === total ? 'Excellent!' : 'Good effort!'
    };
  })
}));

describe('QuizTab', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the quiz header', () => {
    render(<QuizTab />);
    expect(screen.getByText('Vocabulary')).toBeInTheDocument();
    expect(screen.getAllByText('Quiz').length).toBeGreaterThan(0);
  });

  it('shows question counter', async () => {
    render(<QuizTab />);
    await waitFor(() => {
      expect(screen.getByText(/Question 1 of/)).toBeInTheDocument();
    });
  });

  it('displays answer options', async () => {
    render(<QuizTab />);
    await waitFor(() => {
      expect(screen.getByText('hello')).toBeInTheDocument();
      expect(screen.getByText('goodbye')).toBeInTheDocument();
      expect(screen.getByText('thanks')).toBeInTheDocument();
      expect(screen.getByText('please')).toBeInTheDocument();
    });
  });

  it('shows hearts', async () => {
    render(<QuizTab />);
    await waitFor(() => {
      const hearts = document.querySelectorAll('.heart');
        expect(hearts.length).toBe(3);
    });
  });
});
