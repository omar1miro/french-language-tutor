import { MessageSquare, Languages, BookOpen, Globe, Settings, PenTool, Trophy, Map } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'lessons', label: 'Lessons', icon: Map },
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'alphabet', label: 'ABC', icon: Languages },
  { id: 'vocab', label: 'Vocab', icon: BookOpen },
  { id: 'grammar', label: 'Grammar', icon: PenTool },
  { id: 'quiz', label: 'Quiz', icon: Trophy },
  { id: 'translate', label: 'Trans', icon: Globe },
];

export default function MobileNav({ activeTab, setActiveTab, onSettingsOpen }) {
  return (
    <nav className="mobile-nav">
      {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
        <div
          key={id}
          className={`mobile-nav-item ${activeTab === id ? 'active' : ''}`}
          onClick={() => setActiveTab(id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setActiveTab(id)}
          aria-label={label}
          aria-current={activeTab === id ? 'page' : undefined}
        >
          <Icon size={20} strokeWidth={2} />
          <span>{label}</span>
        </div>
      ))}
      <div
        className="mobile-nav-item"
        onClick={onSettingsOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onSettingsOpen()}
        aria-label="Settings"
      >
        <Settings size={20} strokeWidth={2} />
        <span>Settings</span>
      </div>
    </nav>
  );
}
