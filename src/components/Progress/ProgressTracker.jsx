import { Star, Zap } from 'lucide-react';
import { getCurrentLevel } from '../../utils/scoring-engine';

export function getLevelInfo(xp) {
  const level = getCurrentLevel(xp);
  const levelIndex = ['beginner', 'intermediate', 'advanced', 'expert'].indexOf(level.name);
  return {
    name: level.name,
    progress: level.progress,
    xp,
    nextLevel: levelIndex >= 0 && levelIndex < 3 ? ['beginner', 'intermediate', 'advanced', 'expert'][levelIndex + 1] : null,
    xpToNext: level.xpToNext
  };
}

export default function ProgressTracker({ xp, learnedWords, streak }) {
  const levelInfo = getLevelInfo(xp);

  return (
    <div className="card" style={{ padding: 'var(--space-5)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Star size={16} style={{ color: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)' }}>
            Progress
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--accent)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
          <Zap size={14} />
          {xp} XP
        </div>
      </div>

      {/* Level progress */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--foreground)', textTransform: 'capitalize' }}>
            {levelInfo.name}
          </span>
          {levelInfo.xpToNext > 0 && (
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>
              {levelInfo.xpToNext} XP to {levelInfo.nextLevel}
            </span>
          )}
        </div>
        <div style={{ height: 6, background: 'var(--muted)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            background: 'var(--accent-gradient-horizontal)',
            borderRadius: 'var(--radius-full)',
            transition: 'width 0.5s var(--ease-out)',
            width: `${levelInfo.progress}%`
          }} />
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-3)' }}>
        <div style={{ textAlign: 'center', padding: 'var(--space-3)', background: 'var(--muted)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
            {learnedWords}
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>Words</div>
        </div>
        <div style={{ textAlign: 'center', padding: 'var(--space-3)', background: 'var(--muted)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--warning)', fontFamily: 'var(--font-display)' }}>
            {streak}
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>Streak</div>
        </div>
        <div style={{ textAlign: 'center', padding: 'var(--space-3)', background: 'var(--muted)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--success)', fontFamily: 'var(--font-display)' }}>
            {levelInfo.progress}%
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>Level</div>
        </div>
      </div>
    </div>
  );
}
