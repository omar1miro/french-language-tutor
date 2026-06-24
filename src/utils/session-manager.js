import { MAX_HEARTS, XP_PER_QUIZ_CORRECT, GRADE_EXCELLENT_THRESHOLD, GRADE_GREAT_THRESHOLD, GRADE_GOOD_THRESHOLD } from '../constants';

export function createQuizSession(cards, userXP = 0) {
  return {
    questions: cards,
    currentIndex: 0,
    answers: [],
    hearts: MAX_HEARTS,
    startTime: Date.now(),
    complete: false
  };
}

export function submitAnswer(session, questionIndex, selectedAnswer) {
  const question = session.questions[questionIndex];
  if (!question) return session;

  const correct = selectedAnswer === question.correctAnswer;
  const xpEarned = correct ? XP_PER_QUIZ_CORRECT : 0;

  const newAnswers = [
    ...session.answers,
    { questionId: question.id, answer: selectedAnswer, correct }
  ];

  const newHearts = correct ? session.hearts : session.hearts - 1;
  const complete = newHearts <= 0 || newAnswers.length >= session.questions.length;

  return {
    ...session,
    answers: newAnswers,
    hearts: newHearts,
    complete
  };
}

export function isSessionComplete(session) {
  return session.complete || session.hearts <= 0 || session.answers.length >= session.questions.length;
}

export function getSessionResults(session) {
  const correct = session.answers.filter(a => a.correct).length;
  const total = session.questions.length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const totalXP = session.answers.filter(a => a.correct).length * XP_PER_QUIZ_CORRECT;
  const timeElapsed = Math.round((Date.now() - session.startTime) / 1000);

  let grade = 'Keep practicing!';
  if (percentage >= GRADE_EXCELLENT_THRESHOLD) grade = 'Excellent!';
  else if (percentage >= GRADE_GREAT_THRESHOLD) grade = 'Great job!';
  else if (percentage >= GRADE_GOOD_THRESHOLD) grade = 'Good effort!';

  return { correct, total, percentage, totalXP, grade, timeElapsed };
}
