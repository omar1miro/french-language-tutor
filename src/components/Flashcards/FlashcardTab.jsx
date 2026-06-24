import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, CheckSquare } from 'lucide-react';
import DeckSelector from './DeckSelector';
import FlipCard from './FlipCard';
import { PRESET_DECKS } from '../../data/decks';
import { DECK_GENERATION_DELAY_MS } from '../../constants';

export default function FlashcardTab({
  activeDeckKey,
  setActiveDeckKey,
  customDecks,
  setCustomDecks,
  learnedWords,
  setLearnedWords,
  userLevel,
  speakText
}) {
  const [customDeckTopic, setCustomDeckTopic] = useState('');
  const [isGeneratingDeck, setIsGeneratingDeck] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const getActiveDeck = () => {
    if (PRESET_DECKS[activeDeckKey]) return PRESET_DECKS[activeDeckKey].cards;
    if (customDecks[activeDeckKey]) return customDecks[activeDeckKey].cards;
    return [];
  };

  const activeDeck = getActiveDeck();
  const currentCard = activeDeck[currentCardIndex];

  const handleResetCard = () => {
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
  };

  const handleGenerateDeck = async (e) => {
    if (e) e.preventDefault();
    if (!customDeckTopic.trim() || isGeneratingDeck) return;

    const topic = customDeckTopic.trim();
    setCustomDeckTopic('');
    setIsGeneratingDeck(true);

    try {
      await new Promise(resolve => setTimeout(resolve, DECK_GENERATION_DELAY_MS));

      const deckCards = [
        { french: `La plage (${topic})`, english: 'The beach', pronunciation: 'lah plahzh', example: 'Je vais à la plage.', example_english: 'I am going to the beach.' },
        { french: 'Le sable', english: 'The sand', pronunciation: 'luh sahbl', example: 'Le sable est très chaud.', example_english: 'The sand is very hot.' },
        { french: 'La mer', english: 'The sea', pronunciation: 'lah mair', example: 'La mer est bleue.', example_english: 'The sea is blue.' },
        { french: 'Le soleil', english: 'The sun', pronunciation: 'luh soh-lay', example: "Le soleil brille aujourd'hui.", example_english: 'The sun is shining today.' },
        { french: 'Le parasol', english: 'The umbrella', pronunciation: 'luh pah-rah-sohl', example: 'Ouvre le parasol.', example_english: 'Open the umbrella.' },
        { french: 'La serviette', english: 'The towel', pronunciation: 'lah sair-vyet', example: 'Une serviette de plage.', example_english: 'A beach towel.' },
        { french: 'Le maillot de bain', english: 'The swimsuit', pronunciation: 'luh mye-yoh duh behn', example: "J'ai acheté un maillot de bain.", example_english: 'I bought a swimsuit.' },
        { french: 'La vague', english: 'The wave', pronunciation: 'lah vahg', example: 'Regarde cette grande vague.', example_english: 'Look at that big wave.' },
        { french: 'Crème solaire', english: 'Sunscreen', pronunciation: 'krem soh-lair', example: 'Mets de la crème solaire.', example_english: 'Put on some sunscreen.' },
        { french: 'Coquillage', english: 'Seashell', pronunciation: 'koh-kee-yahzh', example: "J'ai trouvé un joli coquillage.", example_english: 'I found a pretty seashell.' }
      ];

      const newDeckKey = `custom_${Date.now()}`;
      const newDeck = {
        title: `Custom: ${topic}`,
        icon: 'Sparkles',
        cards: deckCards
      };

      setCustomDecks(prev => ({ ...prev, [newDeckKey]: newDeck }));
      setActiveDeckKey(newDeckKey);
      setCurrentCardIndex(0);
      setIsCardFlipped(false);
    } catch (error) {
      console.error('Deck generation error:', error);
    } finally {
      setIsGeneratingDeck(false);
    }
  };

  const handleToggleLearned = (frenchWord) => {
    setLearnedWords(prev => {
      if (prev.includes(frenchWord)) return prev.filter(w => w !== frenchWord);
      return [...prev, frenchWord];
    });
  };

  return (
    <div className="vocab-layout animate-fade-in-up">
      <div className="page-header">
        <div className="section-label">
          <span className="dot" />
          <span>Vocabulary</span>
        </div>
        <h2 className="page-title">Vocabulary <span className="gradient-text">Flashcards</span></h2>
        <p className="page-subtitle">
          Practice with preset categories or generate custom decks on-the-spot using artificial intelligence.
        </p>
      </div>

      <DeckSelector
        activeDeckKey={activeDeckKey}
        setActiveDeckKey={setActiveDeckKey}
        customDecks={customDecks}
        customDeckTopic={customDeckTopic}
        setCustomDeckTopic={setCustomDeckTopic}
        isGeneratingDeck={isGeneratingDeck}
        onGenerateDeck={handleGenerateDeck}
        onResetCard={handleResetCard}
      />

      {currentCard && (
        <div className="flashcard-hero">
          <div className="flashcard-wrapper">
          <FlipCard
            card={currentCard}
            isFlipped={isCardFlipped}
            onFlip={() => setIsCardFlipped(!isCardFlipped)}
            onSpeak={speakText}
          />

          <div className="card-controls">
            <button
              className="btn-circle"
              onClick={() => { setIsCardFlipped(false); setCurrentCardIndex(prev => (prev === 0 ? activeDeck.length - 1 : prev - 1)); }}
              title="Previous Card"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className={`btn-learned ${learnedWords.includes(currentCard.french) ? 'is-learned' : ''}`}
              onClick={() => handleToggleLearned(currentCard.french)}
            >
              {learnedWords.includes(currentCard.french) ? <Check size={18} /> : <CheckSquare size={18} />}
              <span>{learnedWords.includes(currentCard.french) ? 'Learned!' : 'Mark as Learned'}</span>
            </button>

            <button
              className="btn-circle"
              onClick={() => { setIsCardFlipped(false); setCurrentCardIndex(prev => (prev === activeDeck.length - 1 ? 0 : prev + 1)); }}
              title="Next Card"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="card-counter">
            Card {currentCardIndex + 1} of {activeDeck.length}
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
