import { ArrowRight } from 'lucide-react';

export default function GrammarBreakdown({ breakdown }) {
  if (!breakdown || breakdown.length === 0) return null;

  return (
    <div className="card grammar-section animate-fade-in-up">
      <h3 className="grammar-title">
        <span className="gradient-text">Word-by-Word Grammar Breakdown</span>
      </h3>
      <div className="breakdown-list">
        {breakdown.map((item, index) => (
          <div key={index} className="breakdown-item">
            <div className="breakdown-word-group">
              <span className="breakdown-fr">{item.word}</span>
              <ArrowRight size={12} style={{ color: 'var(--muted-foreground)' }} />
              <span className="breakdown-en">{item.meaning}</span>
            </div>
            <span className="breakdown-note">{item.grammar}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
