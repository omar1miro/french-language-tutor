import { MS_PER_DAY } from '../constants';

const STORAGE_KEYS = {
  xp: 'french_tutor_xp',
  streak: 'french_tutor_streak',
  lastActiveDate: 'french_tutor_last_date',
  learnedWords: 'french_tutor_learned_words'
};

export function loadProgress() {
  try {
    const xp = parseInt(localStorage.getItem(STORAGE_KEYS.xp) || '0', 10);
    const streak = parseInt(localStorage.getItem(STORAGE_KEYS.streak) || '0', 10);
    const lastActiveDate = localStorage.getItem(STORAGE_KEYS.lastActiveDate) || '';
    const learnedWordsRaw = localStorage.getItem(STORAGE_KEYS.learnedWords) || '[]';
    const learnedWordsArray = JSON.parse(learnedWordsRaw);

    return {
      xp,
      streak,
      lastActiveDate,
      learnedWords: new Set(Array.isArray(learnedWordsArray) ? learnedWordsArray : [])
    };
  } catch {
    return { xp: 0, streak: 0, lastActiveDate: '', learnedWords: new Set() };
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEYS.xp, progress.xp.toString());
    localStorage.setItem(STORAGE_KEYS.streak, progress.streak.toString());
    localStorage.setItem(STORAGE_KEYS.lastActiveDate, progress.lastActiveDate);
    localStorage.setItem(STORAGE_KEYS.learnedWords, JSON.stringify([...progress.learnedWords]));
    return true;
  } catch {
    return false;
  }
}

export function updateStreak(lastActiveDate) {
  const today = new Date().toISOString().split('T')[0];

  if (!lastActiveDate) {
    return { newStreak: 1, newLastActiveDate: today };
  }

  if (lastActiveDate === today) {
    return { newStreak: undefined, newLastActiveDate: undefined };
  }

  const lastDate = new Date(lastActiveDate);
  const currentDate = new Date(today);
  const diffDays = Math.ceil(Math.abs(currentDate - lastDate) / MS_PER_DAY);

  if (diffDays === 1) {
    const currentStreak = parseInt(localStorage.getItem(STORAGE_KEYS.streak) || '0', 10);
    return { newStreak: currentStreak + 1, newLastActiveDate: today };
  }

  return { newStreak: 1, newLastActiveDate: today };
}

export function addLearnedWord(wordsSet, newWord) {
  const updated = new Set(wordsSet);
  updated.add(newWord);
  return updated;
}

export function resetProgress() {
  try {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  } catch {
    // silent fail
  }
  return { xp: 0, streak: 0, lastActiveDate: '', learnedWords: new Set() };
}
