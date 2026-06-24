import { useState } from 'react';
import { ALPHABET_DATA, FRENCH_VOWELS, FRENCH_NASAL_VOWELS, FRENCH_CONSONANT_COMBOS } from '../../data/alphabet';
import { LETTER_SPEAK_DELAY_MS, ALPHABET_ANIMATION_STAGGER_S } from '../../constants';

const SECTIONS = [
  { id: 'alphabet', label: 'Alphabet' },
  { id: 'vowels', label: 'Vowels' },
  { id: 'nasals', label: 'Nasals' },
  { id: 'combos', label: 'Combos' },
];

export default function AlphabetTab({ speakText }) {
  const [activeSection, setActiveSection] = useState('alphabet');

  const handleLetterClick = (item) => {
    speakText(item.char.toLowerCase());
    setTimeout(() => speakText(item.example), LETTER_SPEAK_DELAY_MS);
  };

  const handleVowelClick = (item) => {
    speakText(item.example);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="page-header">
        <div className="section-label">
          <span className="dot" />
          <span>Alphabet</span>
        </div>
        <h2 className="page-title">L'Alphabet <span className="gradient-text">Français</span></h2>
        <p className="page-subtitle">
          Tap any card to hear the sound. IPA shows the precise pronunciation.
        </p>
      </div>

      <div className="section-tabs">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            className={`section-tab ${activeSection === s.id ? 'active' : ''}`}
            onClick={() => setActiveSection(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === 'alphabet' && (
        <div className="alphabet-grid">
          {ALPHABET_DATA.map((item, idx) => (
            <div
              key={idx}
              className="letter-card"
              onClick={() => handleLetterClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleLetterClick(item)}
              style={{ animationDelay: `${idx * ALPHABET_ANIMATION_STAGGER_S}s` }}
            >
              <span className="letter-char">{item.char}</span>
              <span className="letter-ipa">{item.ipa}</span>
              <span className="letter-sound">{item.name}</span>
              <span className="letter-example">{item.example}</span>
              <span className="letter-meaning">{item.meaning}</span>
              <span className="letter-tip">{item.tip}</span>
            </div>
          ))}
        </div>
      )}

      {activeSection === 'vowels' && (
        <div className="alphabet-grid">
          {FRENCH_VOWELS.map((item, idx) => (
            <div
              key={idx}
              className="letter-card vowel-card"
              onClick={() => handleVowelClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleVowelClick(item)}
              style={{ animationDelay: `${idx * ALPHABET_ANIMATION_STAGGER_S}s` }}
            >
              <span className="letter-char">{item.symbol}</span>
              <span className="letter-ipa">{item.ipa}</span>
              <span className="letter-example">{item.example}</span>
              <span className="letter-meaning">{item.meaning}</span>
              <span className="letter-tip">{item.english}</span>
            </div>
          ))}
        </div>
      )}

      {activeSection === 'nasals' && (
        <div className="alphabet-grid">
          {FRENCH_NASAL_VOWELS.map((item, idx) => (
            <div
              key={idx}
              className="letter-card nasal-card"
              onClick={() => handleVowelClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleVowelClick(item)}
              style={{ animationDelay: `${idx * ALPHABET_ANIMATION_STAGGER_S}s` }}
            >
              <span className="letter-char">{item.symbol}</span>
              <span className="letter-ipa">{item.ipa}</span>
              <span className="letter-example">{item.example}</span>
              <span className="letter-meaning">{item.meaning}</span>
              <span className="letter-tip">{item.english}</span>
            </div>
          ))}
        </div>
      )}

      {activeSection === 'combos' && (
        <div className="alphabet-grid">
          {FRENCH_CONSONANT_COMBOS.map((item, idx) => (
            <div
              key={idx}
              className="letter-card combo-card"
              onClick={() => handleVowelClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleVowelClick(item)}
              style={{ animationDelay: `${idx * ALPHABET_ANIMATION_STAGGER_S}s` }}
            >
              <span className="letter-char">{item.combo}</span>
              <span className="letter-ipa">{item.ipa}</span>
              <span className="letter-example">{item.example}</span>
              <span className="letter-meaning">{item.meaning}</span>
              <span className="letter-tip">{item.english}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
