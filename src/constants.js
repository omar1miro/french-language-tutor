// XP & Grading
export const XP_PER_QUIZ_CORRECT = 15;
export const XP_PER_GRAMMAR_CORRECT = 10;
export const MAX_QUIZ_QUESTIONS = 10;
export const WRONG_ANSWER_COUNT = 3;
export const MAX_HEARTS = 3;
export const GRADE_EXCELLENT_THRESHOLD = 90;
export const GRADE_GREAT_THRESHOLD = 70;
export const GRADE_GOOD_THRESHOLD = 50;

// Level XP Thresholds
export const LEVELS = [
  { name: 'beginner', minXP: 0, maxXP: 500 },
  { name: 'intermediate', minXP: 500, maxXP: 1500 },
  { name: 'advanced', minXP: 1500, maxXP: 4000 },
  { name: 'expert', minXP: 4000, maxXP: Infinity }
];

// Speech
export const SPEECH_RATE = 0.95;

// Delays (ms)
export const TUTOR_RESPONSE_DELAY_MS = 800;
export const TRANSLATION_DELAY_MS = 800;
export const DECK_GENERATION_DELAY_MS = 1500;
export const LETTER_SPEAK_DELAY_MS = 700;

// Icons (shared between ChatTab and ScenarioCard)
export const SCENARIO_ICONS = {
  cafe: 'Coffee',
  friend: 'TreePine',
  airport: 'Plane',
  restaurant: 'UtensilsCrossed',
  shopping: 'ShoppingBag',
};

// Animation
export const ALPHABET_ANIMATION_STAGGER_S = 0.03;

// Time
export const MS_PER_DAY = 1000 * 60 * 60 * 24;
