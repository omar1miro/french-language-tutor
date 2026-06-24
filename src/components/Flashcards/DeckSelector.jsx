import { MessageSquare, UtensilsCrossed, Map, Clock, PawPrint, Heart, CloudSun, Sparkles } from 'lucide-react';
import { PRESET_DECKS } from '../../data/decks';

const DECK_ICONS = {
  greetings: MessageSquare,
  food: UtensilsCrossed,
  travel: Map,
  numbers: Clock,
  animals: PawPrint,
  body: Heart,
  weather: CloudSun,
};

export default function DeckSelector({
  activeDeckKey,
  setActiveDeckKey,
  customDecks,
  customDeckTopic,
  setCustomDeckTopic,
  isGeneratingDeck,
  onGenerateDeck,
  onResetCard
}) {
  return (
    <div className="deck-selector-section">
      <div className="preset-decks">
        {Object.keys(PRESET_DECKS).map(key => {
          const DeckIcon = DECK_ICONS[key];
          return (
          <div
            key={key}
            className={`deck-card ${activeDeckKey === key ? 'active' : ''}`}
            onClick={() => { setActiveDeckKey(key); onResetCard(); }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && (() => { setActiveDeckKey(key); onResetCard(); })()}
          >
            <div className="deck-card-icon">{DeckIcon && <DeckIcon size={28} />}</div>
            <div className="deck-title">{PRESET_DECKS[key].title}</div>
            <div className="deck-count">{PRESET_DECKS[key].cards.length} Cards</div>
          </div>
          );
        })}

        {Object.keys(customDecks).map(key => (
          <div
            key={key}
            className={`deck-card ${activeDeckKey === key ? 'active' : ''}`}
            onClick={() => { setActiveDeckKey(key); onResetCard(); }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && (() => { setActiveDeckKey(key); onResetCard(); })()}
          >
            <div className="deck-card-icon"><Sparkles size={28} /></div>
            <div className="deck-title" style={{ color: 'var(--accent)' }}>{customDecks[key].title}</div>
            <div className="deck-count">{customDecks[key].cards.length} Cards</div>
          </div>
        ))}
      </div>

      <form className="vocab-generator-form" onSubmit={onGenerateDeck}>
        <input
          type="text"
          className="vocab-gen-input"
          placeholder="Create AI deck (e.g. 'At the Beach', 'Feelings', 'Animals')..."
          value={customDeckTopic}
          onChange={(e) => setCustomDeckTopic(e.target.value)}
          disabled={isGeneratingDeck}
        />
        <button type="submit" className="vocab-gen-btn" disabled={!customDeckTopic.trim() || isGeneratingDeck}>
          {isGeneratingDeck ? <div className="loader loader-sm" /> : <Sparkles size={16} strokeWidth={2} />}
          <span>{isGeneratingDeck ? 'Generating...' : 'Generate'}</span>
        </button>
      </form>
    </div>
  );
}
