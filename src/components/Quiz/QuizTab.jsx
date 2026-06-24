import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Trophy, RotateCcw, Zap, Heart } from 'lucide-react';
import { generateQuizQuestions, calculateScore } from '../../data/quiz';
import { PRESET_DECKS } from '../../data/decks';
import { XP_PER_QUIZ_CORRECT, MAX_HEARTS } from '../../constants';

export default function QuizTab({ speakText, onXPEarned, userXP = 0 }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showXP, setShowXP] = useState(false);
  const [hearts, setHearts] = useState(MAX_HEARTS);

  useEffect(() => {
    setQuestions(generateQuizQuestions(PRESET_DECKS, userXP));
  }, [userXP]);

  const question = questions[currentIndex];
  const result = quizComplete ? calculateScore(answers) : null;

  const handleAnswer = (answer) => {
    if (showResult || quizComplete) return;
    setSelectedAnswer(answer);
    setShowResult(true);

    const correct = answer === question.correctAnswer;
    const newAnswers = [...answers, { questionId: question.id, answer, correct }];
    setAnswers(newAnswers);

    if (correct) {
      setShowXP(true);
      setTimeout(() => setShowXP(false), 1500);
      if (onXPEarned) onXPEarned(XP_PER_QUIZ_CORRECT);
    } else {
      const newHearts = hearts - 1;
      setHearts(newHearts);
      if (newHearts <= 0) {
        setQuizComplete(true);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setQuestions(generateQuizQuestions(PRESET_DECKS, userXP));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setQuizComplete(false);
    setHearts(MAX_HEARTS);
  };

  if (quizComplete && result) {
    const gameOver = hearts <= 0;
    return (
      <div className="animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-10) 0' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <span className="dot" />
          <span>{gameOver ? 'Game Over' : 'Quiz Complete'}</span>
        </div>

        <div className="card" style={{ maxWidth: 480, margin: '0 auto', padding: 'var(--space-10)' }}>
          {gameOver ? (
            <Heart size={48} style={{ color: 'var(--danger)', marginBottom: 'var(--space-4)' }} fill="var(--danger)" />
          ) : (
            <Trophy size={48} style={{ color: 'var(--accent)', marginBottom: 'var(--space-4)' }} />
          )}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            {gameOver ? 'Out of Hearts!' : result.grade}
          </h2>
          <div style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-display)', color: gameOver ? 'var(--danger)' : 'var(--accent)', marginBottom: 'var(--space-2)' }}>
            {result.percentage}%
          </div>
          <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
            {result.correct} of {result.total} correct
          </p>
          <p style={{ color: gameOver ? 'var(--danger)' : 'var(--accent)', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-6)' }}>
            {gameOver ? 'Try again to earn XP!' : `+${result.xpEarned} XP earned!`}
          </p>
          <button className="btn-primary" onClick={handleRestart} style={{ width: '100%' }}>
            <RotateCcw size={16} />
            {gameOver ? 'Try Again' : 'Take Quiz Again'}
          </button>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
        <div className="loader" style={{ margin: '0 auto' }} />
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      {/* XP Celebration Overlay */}
      {showXP && (
        <div className="xp-celebration">
          <div className="xp-celebration-inner">
            <Zap size={20} />
            +{XP_PER_QUIZ_CORRECT} XP
          </div>
        </div>
      )}

      {/* Confetti on correct answer */}
      {showXP && (
        <>
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
        </>
      )}

      <div className="page-header">
        <div className="section-label">
          <span className="dot" />
          <span>Quiz</span>
        </div>
        <h2 className="page-title">Vocabulary <span className="gradient-text">Quiz</span></h2>
        <p className="page-subtitle">
          Test your French vocabulary with multiple choice questions.
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ maxWidth: 600, margin: '0 auto var(--space-6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <div className="hearts-bar">
            {[...Array(MAX_HEARTS)].map((_, i) => (
              <Heart
                key={i}
                size={16}
                className={i < hearts ? 'heart' : 'heart lost'}
                style={{ color: i < hearts ? 'var(--danger)' : 'var(--muted-foreground)' }}
                fill={i < hearts ? 'var(--danger)' : 'none'}
              />
            ))}
          </div>
        </div>
        <div style={{ height: 4, background: 'var(--muted)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            background: 'var(--accent-gradient-horizontal)',
            borderRadius: 'var(--radius-full)',
            transition: 'width 0.4s var(--ease-out)',
            width: `${((currentIndex + 1) / questions.length) * 100}%`
          }} />
        </div>
      </div>

      <div className="card" style={{ maxWidth: 600, margin: '0 auto' }}>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          What does this mean in English?
        </p>

        <div style={{
          background: 'var(--muted)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-6)',
          marginBottom: 'var(--space-6)',
          textAlign: 'center',
          cursor: 'pointer'
        }} onClick={() => speakText(question.french)}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--foreground)', marginBottom: 'var(--space-2)' }}>
            {question.french}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--warning)' }}>
            /{question.pronunciation}/
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isAnswer = option === question.correctAnswer;
            const animClass = showResult && isSelected ? (isAnswer ? 'answer-correct' : 'answer-wrong') : '';

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={showResult}
                className={animClass}
                style={{
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${
                    showResult && isAnswer ? 'var(--accent)' :
                    showResult && isSelected && !isAnswer ? 'var(--danger)' :
                    'var(--border)'
                  }`,
                  background: showResult && isAnswer ? 'var(--accent-glow)' :
                             showResult && isSelected && !isAnswer ? 'var(--danger-bg)' :
                             'var(--card)',
                  color: showResult && isAnswer ? 'var(--accent)' :
                        showResult && isSelected && !isAnswer ? 'var(--danger)' :
                        'var(--foreground)',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  cursor: showResult ? 'default' : 'pointer',
                  transition: 'all 150ms ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  minHeight: 48
                }}
              >
                {showResult && isAnswer && <CheckCircle size={16} />}
                {showResult && isSelected && !isAnswer && <XCircle size={16} />}
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div style={{
            background: selectedAnswer === question.correctAnswer ? 'var(--success-bg)' : 'var(--danger-bg)',
            border: `1px solid ${selectedAnswer === question.correctAnswer ? 'var(--success-border)' : 'var(--danger-border)'}`,
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-3) var(--space-4)',
            marginBottom: 'var(--space-4)',
            fontSize: 'var(--text-xs)',
            color: selectedAnswer === question.correctAnswer ? 'var(--success)' : 'var(--danger)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            animation: 'fadeInUp 0.3s var(--ease-out)'
          }}>
            {selectedAnswer === question.correctAnswer ? <CheckCircle size={14} /> : <XCircle size={14} />}
            {selectedAnswer === question.correctAnswer ? 'Correct!' : `The answer is: ${question.correctAnswer}`}
          </div>
        )}

        {showResult && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', marginBottom: 'var(--space-4)' }}>
            <span style={{ fontStyle: 'italic' }}>"{question.example}"</span>
            <span>— {question.example_english}</span>
          </div>
        )}

        {showResult && (
          <button className="btn-primary" onClick={handleNext} style={{ width: '100%' }}>
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
}
