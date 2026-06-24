import { useState } from 'react';
import { Globe, Volume2 } from 'lucide-react';
import GrammarBreakdown from './GrammarBreakdown';
import { MOCK_TRANSLATIONS } from '../../data/translations';
import { TRANSLATION_DELAY_MS } from '../../constants';

export default function TranslatorTab({ speakText }) {
  const [translateInput, setTranslateInput] = useState('');
  const [translateOutput, setTranslateOutput] = useState('');
  const [translatePron, setTranslatePron] = useState('');
  const [translateBreakdown, setTranslateBreakdown] = useState([]);
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async (e) => {
    if (e) e.preventDefault();
    if (!translateInput.trim() || isTranslating) return;

    const text = translateInput.trim();
    setIsTranslating(true);

    try {
      await new Promise(resolve => setTimeout(resolve, TRANSLATION_DELAY_MS));

      const normalizedText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");

      if (MOCK_TRANSLATIONS[normalizedText]) {
        const result = MOCK_TRANSLATIONS[normalizedText];
        setTranslateOutput(result.translation);
        setTranslatePron(result.pronunciation);
        setTranslateBreakdown(result.breakdown || []);
      } else {
        setTranslateOutput(`[Simulation Mode] Traduction de: "${text}"`);
        setTranslatePron("trah-dook-syohn duh");
        setTranslateBreakdown(
          text.split(' ').slice(0, 5).map(word => ({
            word,
            meaning: "Word",
            grammar: "Enter Gemini API key in settings for real grammatical breakdowns!"
          }))
        );
      }
    } catch (error) {
      console.error('Translation error:', error);
      setTranslateOutput('Translation failed. Please try again.');
      setTranslatePron('');
      setTranslateBreakdown([]);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="translate-container animate-fade-in-up">
      <div className="page-header">
        <div className="section-label">
          <span className="dot" />
          <span>Translator</span>
        </div>
        <h2 className="page-title">Bi-Directional <span className="gradient-text">Translator</span></h2>
        <p className="page-subtitle">
          Translate text between English and French. View phonetics and a grammar breakdown of each sentence.
        </p>
      </div>

      <div className="translate-inputs">
        <div className="translate-panel">
          <div className="translate-label">
            <span>Source Language</span>
            <span className="translate-label-hint">Auto-Detect</span>
          </div>
          <textarea
            className="translate-textarea"
            placeholder="Type text in English or French..."
            value={translateInput}
            onChange={(e) => setTranslateInput(e.target.value)}
            disabled={isTranslating}
          />
          <div className="translate-btn-bar">
            <button
              className="btn-primary"
              onClick={handleTranslate}
              disabled={!translateInput.trim() || isTranslating}
            >
              {isTranslating ? <div className="loader loader-sm" /> : <Globe size={16} />}
              <span>{isTranslating ? 'Translating...' : 'Translate'}</span>
            </button>
          </div>
        </div>

        <div className="translate-panel">
          <div className="translate-label">
            <span>Translation</span>
            {translateOutput && (
              <button className="listen-btn" onClick={() => speakText(translateOutput)}>
                <Volume2 size={14} />
                <span>Listen</span>
              </button>
            )}
          </div>
          <div className="translate-textarea" style={{ overflowY: 'auto' }}>
            {translateOutput || <span style={{ color: 'var(--muted-foreground)' }}>Translation will appear here...</span>}
          </div>
          {translatePron && (
            <div className="translate-pronunciation">
              Pronunciation: {translatePron}
            </div>
          )}
        </div>
      </div>

      <GrammarBreakdown breakdown={translateBreakdown} />
    </div>
  );
}
