// flashcard component

import { useState } from 'react';
import './Flashcard.css';

interface FlashcardProps {
  definition: string;
  methodName: string;
  mdnUrl: string;
}

function Flashcard({ definition, methodName, mdnUrl }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // false -> recto
  // true -> verso

  const handleFlip = () => {
    setIsFlipped((previousValue) => !previousValue);
  };

  return (
    <div className="flashcard">
      <div className="flashcard__content">
        {isFlipped ? (
          <pre className="flashcard__method">
            <code>{methodName}</code>
          </pre>
        ) : (
          <p className="flashcard__definition">{definition}</p>
        )}

        <button className="flashcard__flip-button" type="button" onClick={handleFlip}>
          {isFlipped ? 'Voir la définition' : 'Retourner la carte'}
        </button>
      </div>

      {isFlipped && (
        <a className="flashcard__mdn-link" href={mdnUrl} target="_blank" rel="noopener noreferrer">
          Consulter la documentation MDN
        </a>
      )}
    </div>
  );
}

export default Flashcard;
