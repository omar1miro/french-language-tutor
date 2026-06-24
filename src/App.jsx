import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Sidebar from './components/Layout/Sidebar';
import MobileNav from './components/Layout/MobileNav';
import TopBar from './components/Layout/TopBar';
import SettingsModal from './components/Settings/SettingsModal';
import ErrorBoundary from './components/ErrorBoundary';
import LandingPage from './components/Landing/LandingPage';
import LessonPath from './components/Lesson/LessonPath';
import LessonPlayer from './components/Lesson/LessonPlayer';
import { MOCK_CHAT_ROLES } from './data/scenarios';
import { SPEECH_RATE, MS_PER_DAY } from './constants';

const ChatTab = lazy(() => import('./components/Chat/ChatTab'));
const AlphabetTab = lazy(() => import('./components/Alphabet/AlphabetTab'));
const FlashcardTab = lazy(() => import('./components/Flashcards/FlashcardTab'));
const GrammarTab = lazy(() => import('./components/Grammar/GrammarTab'));
const QuizTab = lazy(() => import('./components/Quiz/QuizTab'));
const TranslatorTab = lazy(() => import('./components/Translator/TranslatorTab'));

function TabLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
      <div className="loader" style={{ width: 32, height: 32 }} />
    </div>
  );
}

function App() {
  // Landing page state
  const [showLanding, setShowLanding] = useState(() => {
    return localStorage.getItem('french_tutor_landing_done') !== 'true';
  });

  // Lesson flow state
  const [selectedLevel, setSelectedLevel] = useState(() =>
    localStorage.getItem('french_tutor_selected_level') || null
  );
  const [activeLesson, setActiveLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(() =>
    JSON.parse(localStorage.getItem('french_tutor_completed_lessons') || '[]')
  );

  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('french_tutor_tab') || 'chat');
  const [theme, setTheme] = useState(() => localStorage.getItem('french_tutor_theme') || 'dark');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('french_tutor_streak') || '0', 10));
  const [lastActiveDate, setLastActiveDate] = useState(() => localStorage.getItem('french_tutor_last_date') || '');
  const [learnedWords, setLearnedWords] = useState(() => JSON.parse(localStorage.getItem('french_tutor_learned_words') || '[]'));
  const [userLevel, setUserLevel] = useState(() => localStorage.getItem('french_tutor_level') || 'beginner');
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem('french_tutor_xp') || '0', 10));

  const [apiProvider, setApiProvider] = useState(() => localStorage.getItem('french_tutor_api_provider') || 'simulator');
  const [geminiKey, setGeminiKey] = useState(() => localStorage.getItem('french_tutor_gemini_key') || '');
  const [claudeKey, setClaudeKey] = useState(() => localStorage.getItem('french_tutor_claude_key') || '');

  const [activeScenario, setActiveScenario] = useState('cafe');
  const [chatSessions, setChatSessions] = useState(() => {
    const saved = localStorage.getItem('french_tutor_chat_sessions');
    const initial = {};
    Object.keys(MOCK_CHAT_ROLES).forEach(key => {
      initial[key] = [...MOCK_CHAT_ROLES[key].history];
    });
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.keys(initial).forEach(key => {
        if (parsed[key]) initial[key] = parsed[key];
      });
    }
    return initial;
  });

  const [activeDeckKey, setActiveDeckKey] = useState('greetings');
  const [customDecks, setCustomDecks] = useState(() =>
    JSON.parse(localStorage.getItem('french_tutor_custom_decks') || '{}')
  );

  // Speech
  const speakText = useCallback((text, isFrench = true) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = isFrench ? 'fr-FR' : 'en-US';
    utterance.rate = SPEECH_RATE;
    const voices = window.speechSynthesis.getVoices();
    if (isFrench) {
      const frenchVoice = voices.find(v => v.lang.startsWith('fr') && v.name.includes('Google')) ||
                          voices.find(v => v.lang.startsWith('fr')) || voices[0];
      if (frenchVoice) utterance.voice = frenchVoice;
    }
    window.speechSynthesis.speak(utterance);
  }, []);

  // Lesson flow handlers
  const handleStartLevel = useCallback((level) => {
    setSelectedLevel(level);
    setShowLanding(false);
    setActiveTab('lessons');
  }, []);

  const handleStartLesson = useCallback((lesson) => {
    setActiveLesson(lesson);
  }, []);

  const handleCompleteLesson = useCallback((xpEarned) => {
    if (activeLesson) {
      setCompletedLessons((prev) =>
        prev.includes(activeLesson.id) ? prev : [...prev, activeLesson.id]
      );
      setXp((prev) => prev + xpEarned);
    }
    setActiveLesson(null);
  }, [activeLesson]);

  const handleBackToPath = useCallback(() => {
    setActiveLesson(null);
  }, []);

  const handleBackToLanding = useCallback(() => {
    setShowLanding(true);
    setSelectedLevel(null);
    setActiveLesson(null);
    setActiveTab(null);
  }, []);

  // XP handler
  const handleXPEarned = useCallback((amount) => {
    setXp(prev => prev + amount);
  }, []);

  // Persistence
  useEffect(() => {
    localStorage.setItem('french_tutor_tab', activeTab);
    localStorage.setItem('french_tutor_theme', theme);
    localStorage.setItem('french_tutor_streak', streak.toString());
    localStorage.setItem('french_tutor_last_date', lastActiveDate);
    localStorage.setItem('french_tutor_learned_words', JSON.stringify(learnedWords));
    localStorage.setItem('french_tutor_level', userLevel);
    localStorage.setItem('french_tutor_xp', xp.toString());
    localStorage.setItem('french_tutor_api_provider', apiProvider);
    localStorage.setItem('french_tutor_gemini_key', geminiKey);
    localStorage.setItem('french_tutor_claude_key', claudeKey);
    localStorage.setItem('french_tutor_chat_sessions', JSON.stringify(chatSessions));
    localStorage.setItem('french_tutor_custom_decks', JSON.stringify(customDecks));
    localStorage.setItem('french_tutor_landing_done', (!showLanding).toString());
    localStorage.setItem('french_tutor_selected_level', selectedLevel || '');
    localStorage.setItem('french_tutor_completed_lessons', JSON.stringify(completedLessons));
    document.documentElement.setAttribute('data-theme', theme);
  }, [activeTab, theme, streak, lastActiveDate, learnedWords, userLevel, xp, apiProvider, geminiKey, claudeKey, chatSessions, customDecks, showLanding, selectedLevel, completedLessons]);

  // Daily streak
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (lastActiveDate !== today) {
      if (lastActiveDate) {
        const lastDate = new Date(lastActiveDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.ceil(diffTime / MS_PER_DAY);
        if (diffDays === 1) {
          setStreak(prev => prev + 1);
        } else if (diffDays > 1) {
          setStreak(1);
        }
      } else {
        setStreak(1);
      }
      setLastActiveDate(today);
    }
  }, []);

  // Warm up speech voices
  useEffect(() => {
    if (window.speechSynthesis) window.speechSynthesis.getVoices();
  }, []);

  const handleResetProgress = () => {
    if (confirm("Are you sure you want to clear all your progress?")) {
      localStorage.clear();
      setStreak(0);
      setLastActiveDate('');
      setLearnedWords([]);
      setUserLevel('beginner');
      setXp(0);
      setApiProvider('simulator');
      setGeminiKey('');
      setClaudeKey('');
      setCustomDecks({});
      setShowLanding(true);
      setSelectedLevel(null);
      setCompletedLessons([]);
      setActiveLesson(null);
      const initial = {};
      Object.keys(MOCK_CHAT_ROLES).forEach(key => {
        initial[key] = [...MOCK_CHAT_ROLES[key].history];
      });
      setChatSessions(initial);
      setIsSettingsOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      {showLanding && (
        <LandingPage onStart={handleStartLevel} />
      )}

      {/* Main App */}
      {!showLanding && (
        <>
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            userLevel={userLevel}
            onSettingsOpen={() => setIsSettingsOpen(true)}
          />

          <MobileNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onSettingsOpen={() => setIsSettingsOpen(true)}
          />

          <div className="main-wrapper">
            <TopBar
              streak={streak}
              learnedWords={learnedWords}
              userLevel={userLevel}
              theme={theme}
              xp={xp}
              onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />

            <main className="content-area">
              <ErrorBoundary key={activeTab}>
                <Suspense fallback={<TabLoader />}>
                  {activeTab === 'lessons' && (
                    activeLesson ? (
                      <LessonPlayer
                        lesson={activeLesson}
                        onComplete={handleCompleteLesson}
                        onExit={handleBackToPath}
                      />
                    ) : selectedLevel ? (
                      <LessonPath
                        level={selectedLevel}
                        completedLessons={completedLessons}
                        totalXP={xp}
                        onStartLesson={handleStartLesson}
                        onBack={handleBackToLanding}
                      />
                    ) : (
                      <LessonPath
                        level="A1"
                        completedLessons={completedLessons}
                        totalXP={xp}
                        onStartLesson={handleStartLesson}
                        onBack={handleBackToLanding}
                      />
                    )
                  )}

                  {activeTab === 'chat' && (
                    <ChatTab
                      activeScenario={activeScenario}
                      setActiveScenario={setActiveScenario}
                      chatSessions={chatSessions}
                      setChatSessions={setChatSessions}
                      speakText={speakText}
                    />
                  )}

                  {activeTab === 'alphabet' && (
                    <AlphabetTab speakText={speakText} />
                  )}

                  {activeTab === 'vocab' && (
                    <FlashcardTab
                      activeDeckKey={activeDeckKey}
                      setActiveDeckKey={setActiveDeckKey}
                      customDecks={customDecks}
                      setCustomDecks={setCustomDecks}
                      learnedWords={learnedWords}
                      setLearnedWords={setLearnedWords}
                      userLevel={userLevel}
                      speakText={speakText}
                    />
                  )}

                  {activeTab === 'grammar' && (
                    <GrammarTab speakText={speakText} onXPEarned={handleXPEarned} />
                  )}

                  {activeTab === 'quiz' && (
                    <QuizTab speakText={speakText} onXPEarned={handleXPEarned} userXP={xp} />
                  )}

                  {activeTab === 'translate' && (
                    <TranslatorTab speakText={speakText} />
                  )}
                </Suspense>
              </ErrorBoundary>
            </main>
          </div>

          <SettingsModal
            isOpen={isSettingsOpen}
            onClose={() => setIsSettingsOpen(false)}
            userLevel={userLevel}
            setUserLevel={setUserLevel}
            apiProvider={apiProvider}
            setApiProvider={setApiProvider}
            geminiKey={geminiKey}
            setGeminiKey={setGeminiKey}
            claudeKey={claudeKey}
            setClaudeKey={setClaudeKey}
            onResetProgress={handleResetProgress}
          />
        </>
      )}
    </div>
  );
}

export default App;
