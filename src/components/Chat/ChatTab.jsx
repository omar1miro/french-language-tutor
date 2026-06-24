import { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCcw, Mic, MicOff, Send, Coffee, TreePine, Plane, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import ScenarioCard from './ScenarioCard';
import ChatBubble from './ChatBubble';
import { MOCK_CHAT_ROLES } from '../../data/scenarios';
import { TUTOR_RESPONSE_DELAY_MS, SCENARIO_ICONS } from '../../constants';

const ICON_MAP = {
  Coffee, TreePine, Plane, UtensilsCrossed, ShoppingBag,
};

export default function ChatTab({ activeScenario, setActiveScenario, chatSessions, setChatSessions, speakText }) {
  const [userInputText, setUserInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const chatEndRef = useRef(null);
  const recognizingRef = useRef(false);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatSessions, activeScenario]);

  const toggleRecording = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported in this browser. Please try Chrome or Edge.');
      return;
    }

    if (recognizingRef.current) {
      recognizingRef.current = false;
      setIsRecording(false);
      return;
    }

    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.lang = 'fr-FR';
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onstart = () => {
      recognizingRef.current = true;
      setIsRecording(true);
    };

    rec.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setUserInputText(text);
      recognizingRef.current = false;
      setIsRecording(false);
    };

    rec.onerror = (e) => {
      console.error('Speech recognition error:', e.error);
      recognizingRef.current = false;
      setIsRecording(false);

      if (e.error === 'not-allowed') {
        if (window.location.protocol === 'file:') {
          alert("Speech recognition is blocked on local files.\n\nRun a local server:\n1. Open terminal in this folder\n2. Run: npx serve\n3. Open http://localhost:3000\n\nOr type your French responses instead!");
        } else {
          alert("Microphone permission denied. Please allow mic access in your browser settings.");
        }
      } else if (e.error === 'network') {
        alert("Network error during speech recognition.\n\nThe Web Speech API requires internet — it processes audio on Google/Microsoft servers.\n\nMake sure:\n- You have internet\n- No VPN/proxy is blocking Google or Microsoft services\n- No ad-blocker is interfering\n\nYou can still type your French messages!");
      } else if (e.error !== 'no-speech') {
        alert("Speech error: " + e.error);
      }
    };

    rec.onend = () => {
      recognizingRef.current = false;
      setIsRecording(false);
    };

    try {
      rec.start();
    } catch (e) {
      console.error(e);
      recognizingRef.current = false;
      setIsRecording(false);
    }
  }, []);

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!userInputText.trim() || isSending) return;

    const currentInput = userInputText.trim();
    setUserInputText('');
    setIsSending(true);

    const userMsg = {
      role: "user",
      tutor_french: currentInput,
      english_translation: "",
      pronunciation: "",
      user_correction: null
    };

    const currentScenarioHistory = [...chatSessions[activeScenario], userMsg];
    setChatSessions(prev => ({
      ...prev,
      [activeScenario]: currentScenarioHistory
    }));

    try {
      await new Promise(resolve => setTimeout(resolve, TUTOR_RESPONSE_DELAY_MS));
      const tutorReply = MOCK_CHAT_ROLES[activeScenario].getResponse(currentInput, currentScenarioHistory.length);

      const updatedHistory = [
        ...currentScenarioHistory,
        { role: "tutor", ...tutorReply }
      ];

      setChatSessions(prev => ({
        ...prev,
        [activeScenario]: updatedHistory
      }));

      speakText(tutorReply.tutor_french);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleResetChat = () => {
    if (confirm("Reset current conversation?")) {
      setChatSessions(prev => ({
        ...prev,
        [activeScenario]: [...MOCK_CHAT_ROLES[activeScenario].history]
      }));
    }
  };

  return (
    <div className="chat-layout animate-fade-in-up">
      <div className="scenarios-panel">
        {Object.keys(MOCK_CHAT_ROLES).map(key => (
          <ScenarioCard
            key={key}
            scenario={MOCK_CHAT_ROLES[key]}
            isActive={activeScenario === key}
            onClick={() => setActiveScenario(key)}
          />
        ))}
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <div className="chat-tutor-info">
            <div className="tutor-avatar">
              {(() => { const I = ICON_MAP[SCENARIO_ICONS[MOCK_CHAT_ROLES[activeScenario].icon]]; return I ? <I size={20} /> : null; })()}
            </div>
            <div>
              <div className="tutor-name">French Tutor</div>
              <div className="tutor-role">Roleplay: {MOCK_CHAT_ROLES[activeScenario].system}</div>
            </div>
          </div>
          <button className="icon-button" onClick={handleResetChat} title="Reset Chat">
            <RotateCcw size={16} />
          </button>
        </div>

        <div className="chat-messages">
          {chatSessions[activeScenario].map((msg, index) => (
            <ChatBubble
              key={index}
              message={msg}
              onSpeak={speakText}
            />
          ))}
          <div ref={chatEndRef} />
        </div>

        <form className="chat-input-bar" onSubmit={handleSendMessage}>
          <button
            type="button"
            className={`mic-button ${isRecording ? 'recording' : ''}`}
            onClick={toggleRecording}
            title={isRecording ? "Listening... click to stop" : "Speak French"}
          >
            {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
          </button>

          <input
            type="text"
            className="chat-text-input"
            placeholder={isRecording ? "Speak now..." : "Type your message in French..."}
            value={userInputText}
            onChange={(e) => setUserInputText(e.target.value)}
            disabled={isSending}
          />

          <button type="submit" className="send-button" disabled={!userInputText.trim() || isSending}>
            {isSending ? <div className="loader" /> : <Send size={16} />}
          </button>
        </form>
      </div>
    </div>
  );
}
