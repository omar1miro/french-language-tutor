import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FlipCard from '../components/Flashcards/FlipCard';

const mockCard = {
  french: 'bonjour',
  english: 'hello',
  pronunciation: 'bɔ̃ʒuʁ',
  example: 'Bonjour, comment allez-vous?',
  example_english: 'Hello, how are you?'
};

describe('FlipCard', () => {
  it('renders French word on front', () => {
    render(<FlipCard card={mockCard} isFlipped={false} onFlip={() => {}} onSpeak={() => {}} />);
    expect(screen.getByText('bonjour')).toBeInTheDocument();
  });

  it('renders pronunciation', () => {
    render(<FlipCard card={mockCard} isFlipped={false} onFlip={() => {}} onSpeak={() => {}} />);
    expect(screen.getByText('/bɔ̃ʒuʁ/')).toBeInTheDocument();
  });

  it('renders English translation on back', () => {
    render(<FlipCard card={mockCard} isFlipped={true} onFlip={() => {}} onSpeak={() => {}} />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('calls onFlip when card is clicked', () => {
    const onFlip = vi.fn();
    render(<FlipCard card={mockCard} isFlipped={false} onFlip={onFlip} onSpeak={() => {}} />);
    fireEvent.click(screen.getByText('bonjour'));
    expect(onFlip).toHaveBeenCalledTimes(1);
  });

  it('calls onSpeak when speaker button is clicked', () => {
    const onSpeak = vi.fn();
    render(<FlipCard card={mockCard} isFlipped={false} onFlip={() => {}} onSpeak={onSpeak} />);
    fireEvent.click(screen.getByTitle('Hear pronunciation'));
    expect(onSpeak).toHaveBeenCalledWith('bonjour');
  });

  it('does not call onFlip when speaker button is clicked', () => {
    const onFlip = vi.fn();
    render(<FlipCard card={mockCard} isFlipped={false} onFlip={onFlip} onSpeak={() => {}} />);
    fireEvent.click(screen.getByTitle('Hear pronunciation'));
    expect(onFlip).not.toHaveBeenCalled();
  });
});
