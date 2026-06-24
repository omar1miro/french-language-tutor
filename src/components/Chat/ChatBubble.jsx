import { Volume2 } from 'lucide-react';
import CorrectionCard from './CorrectionCard';

export default function ChatBubble({ message, onSpeak }) {
  const isTutor = message.role === 'tutor';

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className={`message ${message.role}`}>
        <div className="bubble">
          {message.tutor_french}

          {isTutor && (
            <button
              className="message-audio-btn"
              onClick={() => onSpeak(message.tutor_french)}
              title="Listen to pronunciation"
            >
              <Volume2 size={14} />
            </button>
          )}

          {isTutor && message.pronunciation && (
            <div className="pronunciation-subtext">
              /{message.pronunciation}/
            </div>
          )}

          {message.english_translation && (
            <div className="translation-subtext">
              {message.english_translation}
            </div>
          )}
        </div>
      </div>

      {isTutor && message.user_correction && (
        <CorrectionCard correction={message.user_correction} />
      )}
    </div>
  );
}
