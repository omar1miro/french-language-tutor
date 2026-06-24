import { LESSONS, LESSON_LEVELS } from '../../data/lessons';

const XP_PER_LEVEL = 500;

function getLevelProgress(level, completedLessons) {
  const levelLessons = LESSONS.filter((l) => l.level === level);
  const completed = levelLessons.filter((l) =>
    completedLessons.includes(l.id)
  ).length;
  return {
    total: levelLessons.length,
    completed,
    percentage:
      levelLessons.length > 0
        ? Math.round((completed / levelLessons.length) * 100)
        : 0,
  };
}

function getNextUnlockedLevel(completedLessons, totalXP) {
  for (const level of ['A1', 'A2', 'B1', 'B2']) {
    const progress = getLevelProgress(level, completedLessons);
    if (progress.completed < progress.total) {
      return level;
    }
  }
  return null;
}

export default function LessonPath({
  level,
  completedLessons,
  totalXP,
  onStartLesson,
  onBack,
}) {
  const levelInfo = LESSON_LEVELS[level];
  const levelLessons = LESSONS.filter((l) => l.level === level);
  const progress = getLevelProgress(level, completedLessons);
  const nextLevel = getNextUnlockedLevel(completedLessons, totalXP);

  return (
    <div className="lesson-path-container">
      <button className="lesson-back-btn" onClick={onBack} type="button">
        ← Back
      </button>

      <div className="lesson-path-header">
        <h1 className="lesson-path-title">
          {levelInfo.icon} {levelInfo.name}
        </h1>
        <p className="lesson-path-subtitle">
          {progress.completed}/{progress.total} lessons completed •{' '}
          {progress.percentage}% complete
        </p>
      </div>

      <div className="lesson-path">
        {levelLessons.map((lesson, index) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const prevCompleted =
            index === 0 || completedLessons.includes(levelLessons[index - 1].id);
          const isCurrent = !isCompleted && prevCompleted;
          const isLocked = !isCompleted && !isCurrent;

          return (
            <div className="lesson-node" key={lesson.id}>
              <div
                className={`lesson-node-circle ${
                  isCompleted
                    ? 'completed'
                    : isCurrent
                    ? 'current'
                    : 'locked'
                }`}
                onClick={() =>
                  !isLocked && onStartLesson(lesson)
                }
                role="button"
                tabIndex={isLocked ? -1 : 0}
              >
                {isCompleted ? '✓' : index + 1}
              </div>
              <div
                className={`lesson-node-info ${isLocked ? 'locked' : ''}`}
                onClick={() =>
                  !isLocked && onStartLesson(lesson)
                }
                role="button"
                tabIndex={isLocked ? -1 : 0}
              >
                <div className="lesson-node-title">{lesson.title}</div>
                <div className="lesson-node-meta">
                  {lesson.description} • {lesson.exercises.length} exercises
                </div>
                <div className="lesson-node-xp">{lesson.xp} XP</div>
              </div>
            </div>
          );
        })}
      </div>

      {nextLevel && nextLevel !== level && (
        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
            Next up: {LESSON_LEVELS[nextLevel].icon}{' '}
            {LESSON_LEVELS[nextLevel].name}
          </p>
        </div>
      )}
    </div>
  );
}
