import {
  MAX_QUIZ_QUESTIONS,
  WRONG_ANSWER_COUNT,
  XP_PER_QUIZ_CORRECT,
  GRADE_EXCELLENT_THRESHOLD,
  GRADE_GREAT_THRESHOLD,
  GRADE_GOOD_THRESHOLD
} from '../constants';
import { getCurrentLevel } from '../utils/scoring-engine';

function getLevelName(xp) {
  return getCurrentLevel(xp).name;
}

function getDifficultyForLevel(level) {
  if (level === 'beginner') return 'beginner';
  if (level === 'intermediate') return 'intermediate';
  return 'advanced';
}

export function generateQuizQuestions(decks, userXP = 0) {
  const level = getLevelName(userXP);
  const difficulty = getDifficultyForLevel(level);

  const allCards = Object.values(decks)
    .filter(deck => {
      if (level === 'expert') return true;
      return deck.difficulty === difficulty || deck.difficulty === 'beginner';
    })
    .flatMap(deck => deck.cards);

  if (allCards.length === 0) {
    const fallbackCards = Object.values(decks).flatMap(deck => deck.cards).slice(0, MAX_QUIZ_QUESTIONS);
    return fallbackCards.map((card, i) => {
      const otherCards = Object.values(decks).flatMap(deck => deck.cards).filter(c => c.french !== card.french);
      const wrongCards = shuffleArray(otherCards).slice(0, WRONG_ANSWER_COUNT);
      const options = shuffleArray([card, ...wrongCards]).map(c => c.english);
      return {
        id: i + 1,
        french: card.french,
        correctAnswer: card.english,
        pronunciation: card.pronunciation,
        options,
        example: card.example,
        example_english: card.example_english
      };
    });
  }

  const shuffledCards = shuffleArray(allCards);
  const selectedCards = shuffledCards.slice(0, Math.min(MAX_QUIZ_QUESTIONS, allCards.length));
  const questions = [];

  for (let i = 0; i < selectedCards.length; i++) {
    const correctCard = selectedCards[i];
    const wrongCards = allCards
      .filter(c => c.french !== correctCard.french)
      .sort(() => Math.random() - 0.5)
      .slice(0, WRONG_ANSWER_COUNT);

    const usedEnglish = new Set([correctCard.english]);
    const uniqueWrong = [];
    for (const wc of wrongCards) {
      if (!usedEnglish.has(wc.english) && uniqueWrong.length < WRONG_ANSWER_COUNT) {
        usedEnglish.add(wc.english);
        uniqueWrong.push(wc);
      }
    }

    const options = shuffleArray([correctCard, ...uniqueWrong]).map(c => c.english);

    questions.push({
      id: i + 1,
      french: correctCard.french,
      correctAnswer: correctCard.english,
      pronunciation: correctCard.pronunciation,
      options,
      example: correctCard.example,
      example_english: correctCard.example_english
    });
  }

  return questions;
}

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function calculateScore(answers) {
  const correct = answers.filter(a => a.correct).length;
  const total = answers.length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const xpEarned = correct * XP_PER_QUIZ_CORRECT;

  let grade = 'Keep practicing!';
  if (percentage >= GRADE_EXCELLENT_THRESHOLD) grade = 'Excellent!';
  else if (percentage >= GRADE_GREAT_THRESHOLD) grade = 'Great job!';
  else if (percentage >= GRADE_GOOD_THRESHOLD) grade = 'Good effort!';

  return { correct, total, percentage, xpEarned, grade };
}
