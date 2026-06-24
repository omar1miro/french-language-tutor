import { Flame, CheckCircle2, GraduationCap, Sun, Moon, Zap } from 'lucide-react';

export default function TopBar({ streak, learnedWords, userLevel, theme, onThemeToggle, xp }) {
  return (
    <header className="top-bar">
      <div className="stats-container">
        <div className="stat-badge streak" title="Daily Streak">
          <Flame size={14} />
          <span>{streak} Day{streak !== 1 ? 's' : ''}</span>
        </div>
        <div className="stat-badge words" title="Total learned vocabulary words">
          <CheckCircle2 size={14} />
          <span>{learnedWords.length} Learned</span>
        </div>
        {xp > 0 && (
          <div className="stat-badge" title="Experience Points" style={{ color: 'var(--accent)', borderColor: 'rgba(0, 82, 255, 0.2)', background: 'var(--accent-glow)' }}>
            <Zap size={14} />
            <span>{xp} XP</span>
          </div>
        )}
      </div>

      <div className="controls-container">
        <button
          className="icon-button"
          onClick={onThemeToggle}
          title="Toggle Light/Dark Theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <div className="level-badge">
          <GraduationCap size={14} />
          <span>{userLevel}</span>
        </div>
      </div>
    </header>
  );
}
