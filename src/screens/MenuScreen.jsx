import { useState } from 'react';
import { credits, aiDisclosure } from '../data/credits';

export default function MenuScreen({ onStart }) {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className="screen">
      <h1>Vinewood Ink</h1>
      <p>You're the newest artist at the shop. Make it count.</p>
      <button onClick={onStart}>Start Shift</button>

      <button className="credits-toggle" onClick={() => setShowCredits((s) => !s)}>
        Credits
      </button>

      {showCredits && (
        <div className="credits-box">
          {credits.map((c, i) => (
            <p key={i}>
              {c.type}: "{c.title}" by {c.author} —{' '}
              <a href={c.source} target="_blank" rel="noreferrer">source</a> ({c.license})
            </p>
          ))}
          <p className="ai-note">{aiDisclosure}</p>
        </div>
      )}
    </div>
  );
}