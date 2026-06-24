import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProgressTracker, { getLevelInfo } from '../components/Progress/ProgressTracker';

describe('getLevelInfo', () => {
  it('returns beginner at 0 XP', () => {
    const info = getLevelInfo(0);
    expect(info.name).toBe('beginner');
    expect(info.nextLevel).toBe('intermediate');
    expect(info.xpToNext).toBe(500);
  });

  it('returns intermediate at 500 XP', () => {
    const info = getLevelInfo(500);
    expect(info.name).toBe('intermediate');
    expect(info.nextLevel).toBe('advanced');
  });

  it('returns expert at 4000 XP', () => {
    const info = getLevelInfo(4000);
    expect(info.name).toBe('expert');
    expect(info.nextLevel).toBeNull();
    expect(info.xpToNext).toBe(0);
  });
});

describe('ProgressTracker', () => {
  it('renders XP amount', () => {
    render(<ProgressTracker xp={250} learnedWords={10} streak={3} />);
    expect(screen.getByText('250 XP')).toBeInTheDocument();
  });

  it('renders learned words count', () => {
    render(<ProgressTracker xp={0} learnedWords={42} streak={0} />);
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders streak count', () => {
    render(<ProgressTracker xp={0} learnedWords={0} streak={7} />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('shows level name', () => {
    render(<ProgressTracker xp={600} learnedWords={0} streak={0} />);
    expect(screen.getByText('intermediate')).toBeInTheDocument();
  });
});
