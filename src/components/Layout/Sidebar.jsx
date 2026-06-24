import { MessageSquare, Languages, BookOpen, Globe, GraduationCap, Settings, PenTool, Trophy, Map } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'lessons', label: 'Lessons', icon: Map },
  { id: 'chat', label: 'Chat Tutor', icon: MessageSquare },
  { id: 'alphabet', label: 'Alphabet', icon: Languages },
  { id: 'vocab', label: 'Flashcards', icon: BookOpen },
  { id: 'grammar', label: 'Grammar', icon: PenTool },
  { id: 'quiz', label: 'Quiz', icon: Trophy },
  { id: 'translate', label: 'Translator', icon: Globe },
];

export default function Sidebar({ activeTab, setActiveTab, userLevel, onSettingsOpen }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo" />
        <h1 className="brand-name">LingoFrench</h1>
      </div>

      <nav className="nav-links">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            className={`nav-item ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActiveTab(id)}
            aria-label={label}
            aria-current={activeTab === id ? 'page' : undefined}
          >
            <Icon size={18} strokeWidth={2} />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="level-badge">
          <GraduationCap size={14} />
          <span>{userLevel}</span>
        </div>
        <div
          className="nav-item"
          onClick={onSettingsOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSettingsOpen()}
          aria-label="Settings"
        >
          <Settings size={18} strokeWidth={2} />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}
