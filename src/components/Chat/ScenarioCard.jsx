import { Coffee, TreePine, Plane, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import { SCENARIO_ICONS } from '../../constants';

const ICON_MAP = {
  Coffee, TreePine, Plane, UtensilsCrossed, ShoppingBag,
};

export default function ScenarioCard({ scenario, isActive, onClick }) {
  const Icon = ICON_MAP[SCENARIO_ICONS[scenario.icon]];
  return (
    <div
      className={`scenario-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="scenario-icon">
        {Icon && <Icon size={22} />}
      </div>
      <div className="scenario-title">{scenario.title}</div>
      <div className="scenario-desc">{scenario.desc}</div>
    </div>
  );
}
