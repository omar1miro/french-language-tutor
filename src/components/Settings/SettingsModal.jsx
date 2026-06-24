import { X, Settings } from 'lucide-react';

export default function SettingsModal({
  isOpen,
  onClose,
  userLevel,
  setUserLevel,
  apiProvider,
  setApiProvider,
  geminiKey,
  setGeminiKey,
  claudeKey,
  setClaudeKey,
  onResetProgress
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <h3 className="modal-title">
          <Settings size={20} />
          <span>Tutor Settings</span>
        </h3>

        <div className="form-group">
          <label className="form-label">Tutor Difficulty Level</label>
          <div className="level-select-grid">
            {['beginner', 'intermediate', 'advanced'].map(level => (
              <button
                key={level}
                className={`level-btn ${userLevel === level ? 'active' : ''}`}
                onClick={() => setUserLevel(level)}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">AI Engine Provider</label>
          <select
            className="form-select"
            value={apiProvider}
            onChange={(e) => setApiProvider(e.target.value)}
          >
            <option value="simulator">Local Simulator (No key required)</option>
            <option value="gemini">Gemini API (Recommended)</option>
            <option value="claude">Anthropic Claude API</option>
          </select>
        </div>

        {apiProvider === 'simulator' && (
          <div className="alert-banner">
            Local Simulator is Active: You can test all features offline without API keys.
          </div>
        )}

        {apiProvider === 'gemini' && (
          <div className="form-group animate-fade-in-up">
            <label className="form-label">Gemini API Key</label>
            <input
              type="password"
              className="form-input"
              placeholder="AIzaSy..."
              value={geminiKey}
              onChange={(e) => setGeminiKey(e.target.value)}
            />
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', marginTop: 'var(--space-1)', display: 'block' }}>
              API keys are stored in your browser's local storage and never sent to any server.
            </span>
          </div>
        )}

        {apiProvider === 'claude' && (
          <div className="form-group animate-fade-in-up">
            <label className="form-label">Claude API Key</label>
            <input
              type="password"
              className="form-input"
              placeholder="sk-ant-..."
              value={claudeKey}
              onChange={(e) => setClaudeKey(e.target.value)}
            />
            <div className="alert-banner alert-banner-warn" style={{ marginTop: 'var(--space-2)' }}>
              CORS Note: Direct Anthropic API calls may be blocked in browser. You may need a local proxy or use Gemini instead.
            </div>
          </div>
        )}

        <div className="settings-actions">
          <button className="btn-primary" onClick={onClose} style={{ width: '100%' }}>
            Save & Close
          </button>
          <button className="btn-danger" onClick={onResetProgress}>
            Reset Application Progress
          </button>
        </div>
      </div>
    </div>
  );
}
