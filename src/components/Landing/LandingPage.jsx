import { useState } from 'react';
import { LESSON_LEVELS } from '../../data/lessons';

const levelOrder = ['A1', 'A2', 'B1', 'B2'];

export default function LandingPage({ onStart }) {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleStart = () => {
    if (selectedLevel) {
      onStart(selectedLevel);
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="landing-logo">
          <span style={{ fontSize: '32px' }}>🇫🇷</span>
        </div>
        <h1 className="landing-title">French Tutor</h1>
        <p className="landing-subtitle">
          Master French with bite-sized lessons, real pronunciation, and
          gamified progress tracking.
        </p>
      </div>

      <div className="level-selection">
        <h2 className="level-selection-title">What&apos;s your level?</h2>
        <p className="level-selection-subtitle">
          Choose where you&apos;re starting — you can always move up later.
        </p>

        <div className="level-cards">
          {levelOrder.map((id) => {
            const level = LESSON_LEVELS[id];
            return (
              <button
                key={id}
                className={`level-card ${selectedLevel === id ? 'selected' : ''}`}
                onClick={() => setSelectedLevel(id)}
                type="button"
              >
                <div className={`level-card-icon ${level.name.toLowerCase()}`}>
                  {level.icon}
                </div>
                <div className="level-card-title">{level.name}</div>
                <div className="level-card-cefr">CEFR {level.id}</div>
                <div className="level-card-desc">{level.description}</div>
              </button>
            );
          })}
        </div>

        <button
          className="landing-start-btn"
          onClick={handleStart}
          disabled={!selectedLevel}
          type="button"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
}
