import { LEVELS, XP_PER_QUIZ_CORRECT, XP_PER_GRAMMAR_CORRECT, GRADE_EXCELLENT_THRESHOLD, GRADE_GREAT_THRESHOLD, GRADE_GOOD_THRESHOLD } from '../constants';

export { XP_PER_QUIZ_CORRECT, XP_PER_GRAMMAR_CORRECT };

export const STREAK_BONUS_THRESHOLD = 3;
export const STREAK_MULTIPLIER = 1.5;

export function getCurrentLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) {
      const level = LEVELS[i];
      const progress = level.maxXP === Infinity
        ? 100
        : Math.round(((xp - level.minXP) / (level.maxXP - level.minXP)) * 100);
      return {
        name: level.name,
        minXP: level.minXP,
        maxXP: level.maxXP,
        progress: Math.min(progress, 100),
        xpToNext: level.maxXP === Infinity ? 0 : level.maxXP - xp
      };
    }
  }
  return { name: 'beginner', minXP: 0, maxXP: 500, progress: 0, xpToNext: 500 };
}

export function calculateXP(baseXP, { streakDays = 0, difficulty = 'beginner', combo = 0 } = {}) {
  let xp = baseXP;

  if (streakDays >= STREAK_BONUS_THRESHOLD) {
    xp = Math.round(xp * STREAK_MULTIPLIER);
  }

  const difficultyMultipliers = { beginner: 1, intermediate: 1.5, advanced: 2 };
  xp = Math.round(xp * (difficultyMultipliers[difficulty] || 1));

  if (combo > 0) {
    xp += Math.round(baseXP * Math.min(combo * 0.1, 0.5));
  }

  return xp;
}

export function calculateQuizScore(answers, streakDays = 0) {
  const correct = answers.filter(a => a.correct).length;
  const total = answers.length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const baseXP = correct * XP_PER_QUIZ_CORRECT;
  const streakBonus = streakDays >= STREAK_BONUS_THRESHOLD;
  const totalXP = calculateXP(baseXP, { streakDays });

  let grade = 'Keep practicing!';
  if (percentage >= GRADE_EXCELLENT_THRESHOLD) grade = 'Excellent!';
  else if (percentage >= GRADE_GREAT_THRESHOLD) grade = 'Great job!';
  else if (percentage >= GRADE_GOOD_THRESHOLD) grade = 'Good effort!';

  return { correct, total, percentage, baseXP, streakBonus, totalXP, grade };
}

export function calculateGrammarScore(exerciseResults, streakDays = 0) {
  const correct = exerciseResults.filter(r => r.correct).length;
  const total = exerciseResults.length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const baseXP = correct * XP_PER_GRAMMAR_CORRECT;
  const streakBonus = streakDays >= STREAK_BONUS_THRESHOLD;
  const totalXP = calculateXP(baseXP, { streakDays });

  return { correct, total, percentage, baseXP, streakBonus, totalXP };
}
