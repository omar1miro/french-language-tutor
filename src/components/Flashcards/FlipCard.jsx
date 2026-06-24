import { Volume2 } from 'lucide-react';

export default function FlipCard({ card, isFlipped, onFlip, onSpeak }) {
  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
      <div className="card-face front">
        <span className="card-face-label french">French</span>
        <h2 className="card-word">{card.french}</h2>
        <p className="card-pron">/{card.pronunciation}/</p>
        <button
          className="card-speaker"
          onClick={(e) => { e.stopPropagation(); onSpeak(card.french); }}
          title="Hear pronunciation"
        >
          <Volume2 size={18} />
        </button>
      </div>

      <div className="card-face back">
        <span className="card-face-label english">English Translation</span>
        <h2 className="card-translation">{card.english}</h2>
        <div className="card-example-section">
          <p className="card-example">"{card.example}"</p>
          <p className="card-example-translation">{card.example_english}</p>
        </div>
        <button
          className="card-speaker"
          onClick={(e) => { e.stopPropagation(); onSpeak(card.example); }}
          title="Hear example sentence"
        >
          <Volume2 size={18} />
        </button>
      </div>
    </div>
  );
}
