import { useState, useCallback, useEffect, useRef } from 'react';

const XP_PER_EXERCISE = 5;

export default function LessonPlayer({ lesson, onComplete, onExit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackCorrect, setFeedbackCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [bankWords, setBankWords] = useState([]);
  const [answerWords, setAnswerWords] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  const exercises = lesson.exercises;
  const exercise = exercises[currentStep];
  const progress = ((currentStep) / exercises.length) * 100;
  const isComplete = currentStep >= exercises.length;

  useEffect(() => {
    if (exercise?.type === 'word-bank') {
      const shuffled = [...exercise.bank].sort(
        () => Math.random() - 0.5
      );
      setBankWords(shuffled);
      setAnswerWords([]);
    }
    setSelectedOption(null);
    setTranscript('');
    setShowFeedback(false);
  }, [currentStep, exercise]);

  const handleAnswer = useCallback(
    (isCorrect) => {
      setFeedbackCorrect(isCorrect);
      setShowFeedback(true);
      if (isCorrect) setScore((s) => s + XP_PER_EXERCISE);
    },
    []
  );

  const handleContinue = useCallback(() => {
    if (currentStep + 1 >= exercises.length) {
      const finalScore = score + (feedbackCorrect ? XP_PER_EXERCISE : 0);
      onComplete(finalScore);
    } else {
      setCurrentStep((s) => s + 1);
    }
  }, [currentStep, exercises.length, onComplete, score, feedbackCorrect]);

  const handleMultipleChoice = (index) => {
    if (showFeedback) return;
    setSelectedOption(index);
    handleAnswer(index === exercise.correct);
  };

  const handleWordBankClick = (word) => {
    if (showFeedback) return;
    setAnswerWords((prev) => [...prev, word]);
    setBankWords((prev) => prev.filter((w) => w !== word));
  };

  const handleRemoveWord = (word, index) => {
    if (showFeedback) return;
    setAnswerWords((prev) => prev.filter((_, i) => i !== index));
    setBankWords((prev) => [...prev, word]);
  };

  const checkWordBank = () => {
    const correct =
      answerWords.length === exercise.answer.length &&
      answerWords.every((w, i) => w === exercise.answer[i]);
    handleAnswer(correct);
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      handleAnswer(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript.toLowerCase().trim();
      setTranscript(text);
      setIsListening(false);
      const cleanExpected = exercise.expected.replace(/[^a-zàâäéèêëïîôùûüÿçœæ]/gi, '');
      const cleanTranscript = text.replace(/[^a-zàâäéèêëïîôùûüÿçœæ]/gi, '');
      handleAnswer(cleanTranscript === cleanExpected);
    };

    recognition.onerror = () => {
      setIsListening(false);
      handleAnswer(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
    recognition.start();
  };

  if (isComplete) {
    return (
      <div className="lesson-complete">
        <div className="lesson-complete-icon">🎉</div>
        <h2 className="lesson-complete-title">Lesson Complete!</h2>
        <div className="lesson-complete-stats">
          <div className="lesson-stat">
            <div className="lesson-stat-value">{score}</div>
            <div className="lesson-stat-label">XP Earned</div>
          </div>
          <div className="lesson-stat">
            <div className="lesson-stat-value">
              {Math.round((score / (exercises.length * XP_PER_EXERCISE)) * 100)}%
            </div>
            <div className="lesson-stat-label">Accuracy</div>
          </div>
        </div>
        <button
          className="lesson-continue-btn"
          onClick={onExit}
          type="button"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="lesson-player">
      <button className="lesson-back-btn" onClick={onExit} type="button">
        ✕ Exit Lesson
      </button>

      <div className="lesson-progress-bar">
        <div
          className="lesson-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="lesson-question">
        <div className="lesson-question-prompt">
          {exercise.type === 'multiple-choice'
            ? 'Choose the correct answer'
            : exercise.type === 'word-bank'
            ? 'Build the translation'
            : 'Speak the sentence'}
        </div>
        <div className="lesson-question-text">{exercise.prompt}</div>
      </div>

      {exercise.type === 'multiple-choice' && (
        <div className="lesson-options">
          {exercise.options.map((option, index) => (
            <button
              key={`${currentStep}-${index}`}
              className={`lesson-option ${
                showFeedback && index === exercise.correct ? 'correct' : ''
              } ${
                showFeedback && selectedOption === index && index !== exercise.correct
                  ? 'incorrect'
                  : ''
              } ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => handleMultipleChoice(index)}
              disabled={showFeedback}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {exercise.type === 'word-bank' && (
        <>
          <div
            className="lesson-option word-bank-answer"
            style={{
              minHeight: '48px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
              justifyContent: 'center',
              cursor: 'default',
            }}
          >
            {answerWords.length === 0 && (
              <span style={{ color: 'var(--muted-foreground)', opacity: 0.5 }}>
                Tap words to build your answer
              </span>
            )}
            {answerWords.map((word, i) => (
              <button
                key={`answer-${i}`}
                className="lesson-option selected"
                style={{
                  padding: 'var(--space-2) var(--space-3)',
                  fontSize: 'var(--text-sm)',
                  width: 'auto',
                }}
                onClick={() => handleRemoveWord(word, i)}
                disabled={showFeedback}
                type="button"
              >
                {word}
              </button>
            ))}
          </div>

          <div
            className="lesson-options"
            style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {bankWords.map((word, i) => (
              <button
                key={`bank-${i}`}
                className="lesson-option"
                style={{
                  padding: 'var(--space-2) var(--space-3)',
                  fontSize: 'var(--text-sm)',
                  width: 'auto',
                }}
                onClick={() => handleWordBankClick(word)}
                disabled={showFeedback}
                type="button"
              >
                {word}
              </button>
            ))}
          </div>

          {!showFeedback && answerWords.length > 0 && (
            <button
              className="lesson-continue-btn"
              onClick={checkWordBank}
              type="button"
              style={{ marginTop: 'var(--space-4)' }}
            >
              Check
            </button>
          )}
        </>
      )}

      {exercise.type === 'speaking' && (
        <div style={{ textAlign: 'center', margin: 'var(--space-8) 0' }}>
          <button
            className={`lesson-option ${
              showFeedback ? (feedbackCorrect ? 'correct' : 'incorrect') : ''
            }`}
            onClick={startListening}
            disabled={isListening || showFeedback}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              fontSize: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              border: '3px solid var(--border)',
              background: isListening ? 'var(--danger-bg)' : 'var(--card)',
              cursor: isListening ? 'not-allowed' : 'pointer',
            }}
            type="button"
          >
            {isListening ? '🔴' : '🎤'}
          </button>
          <p style={{ marginTop: 'var(--space-3)', color: 'var(--muted-foreground)' }}>
            {isListening
              ? 'Listening...'
              : transcript
              ? `"${transcript}"`
              : 'Tap the microphone to speak'}
          </p>
        </div>
      )}

      {showFeedback && (
        <div
          className={`lesson-feedback ${feedbackCorrect ? 'correct' : 'incorrect'}`}
        >
          {feedbackCorrect ? '✓ Correct!' : '✗ Not quite right'}
        </div>
      )}

      {showFeedback && (
        <button
          className="lesson-continue-btn"
          onClick={handleContinue}
          type="button"
        >
          {currentStep + 1 >= exercises.length ? 'Finish Lesson' : 'Continue'}
        </button>
      )}
    </div>
  );
}
