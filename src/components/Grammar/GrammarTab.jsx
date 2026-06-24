import { useState } from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { GRAMMAR_EXERCISES } from '../../data/grammar';
import { XP_PER_GRAMMAR_CORRECT } from '../../constants';

export default function GrammarTab({ speakText, onXPEarned }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [completed, setCompleted] = useState(false);

  const exercise = GRAMMAR_EXERCISES[currentIndex];
  const isCorrect = selectedAnswer === exercise?.answer;

  const handleAnswer = (answer) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);

    const correct = answer === exercise.answer;
    setScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));

    if (correct && onXPEarned) onXPEarned(XP_PER_GRAMMAR_CORRECT);
  };

  const handleNext = () => {
    if (currentIndex < GRAMMAR_EXERCISES.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setCompleted(false);
  };

  if (completed) {
    const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <span className="dot" />
          <span>Complete</span>
        </div>
        <h2 className="page-title" style={{ marginBottom: 'var(--space-4)' }}>
          Grammar <span className="gradient-text">Results</span>
        </h2>
        <div className="card" style={{ maxWidth: 400, margin: '0 auto', padding: 'var(--space-10)' }}>
          <div style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-display)', color: 'var(--accent)', marginBottom: 'var(--space-2)' }}>
            {pct}%
          </div>
          <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>
            {score.correct} of {score.total} correct
          </p>
          <button className="btn-primary" onClick={handleRestart} style={{ width: '100%' }}>
            Practice Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      <div className="page-header">
        <div className="section-label">
          <span className="dot" />
          <span>Grammar</span>
        </div>
        <h2 className="page-title">Grammar <span className="gradient-text">Exercises</span></h2>
        <p className="page-subtitle">
          Practice French grammar with fill-in-the-blank and conjugation drills.
        </p>
      </div>

      <div className="card" style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {exercise.type === 'conjugation' ? 'Conjugation' : 'Fill in the Blank'}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent)' }}>
            {currentIndex + 1} / {GRAMMAR_EXERCISES.length}
          </span>
        </div>

        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', marginBottom: 'var(--space-4)' }}>
          {exercise.instruction}
        </p>

        <div style={{
          background: 'var(--muted)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-5)',
          marginBottom: 'var(--space-6)',
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-xl)',
          color: 'var(--foreground)',
          textAlign: 'center',
          lineHeight: 1.6
        }}>
          {exercise.sentence}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
          {exercise.options.map((option, idx) => {
            let btnStyle = 'btn-secondary';
            if (showResult && option === exercise.answer) btnStyle = 'btn-primary';
            else if (showResult && option === selectedAnswer && !isCorrect) btnStyle = '';
            
            const isSelected = selectedAnswer === option;
            const isAnswer = option === exercise.answer;

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={showResult}
                style={{
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${
                    showResult && isAnswer ? 'var(--accent)' :
                    showResult && isSelected && !isCorrect ? 'var(--danger)' :
                    'var(--border)'
                  }`,
                  background: showResult && isAnswer ? 'var(--accent-glow)' :
                             showResult && isSelected && !isCorrect ? 'var(--danger-bg)' :
                             'var(--card)',
                  color: showResult && isAnswer ? 'var(--accent)' :
                        showResult && isSelected && !isCorrect ? 'var(--danger)' :
                        'var(--foreground)',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  cursor: showResult ? 'default' : 'pointer',
                  transition: 'all 150ms ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  minHeight: 44
                }}
              >
                {showResult && isAnswer && <CheckCircle size={16} />}
                {showResult && isSelected && !isCorrect && <XCircle size={16} />}
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div style={{
            background: isCorrect ? 'var(--success-bg)' : 'var(--danger-bg)',
            border: `1px solid ${isCorrect ? 'var(--success-border)' : 'var(--danger-border)'}`,
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-4)',
            marginBottom: 'var(--space-4)',
            animation: 'fadeInUp 0.3s var(--ease-out)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', fontWeight: 600, fontSize: 'var(--text-sm)', color: isCorrect ? 'var(--success)' : 'var(--danger)' }}>
              {isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
              {exercise.explanation}
            </p>
          </div>
        )}

        {showResult && (
          <button className="btn-primary" onClick={handleNext} style={{ width: '100%' }}>
            {currentIndex < GRAMMAR_EXERCISES.length - 1 ? 'Next Exercise' : 'See Results'}
            <ArrowRight size={16} />
          </button>
        )}

        {!showResult && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>
            <Lightbulb size={14} />
            <span>Hint: {exercise.hint}</span>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: 'var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>
        Score: {score.correct}/{score.total}
      </div>
    </div>
  );
}
