import { AlertTriangle } from 'lucide-react';

export default function CorrectionCard({ correction }) {
  if (!correction) return null;

  return (
    <div className="correction-box">
      <div className="correction-header">
        <AlertTriangle size={14} />
        <span>Grammar Tip</span>
      </div>
      <p>{correction}</p>
    </div>
  );
}
