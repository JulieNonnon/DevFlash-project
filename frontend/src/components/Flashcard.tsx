// flashcard component

import { useState } from 'react';

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
    <div>
      <div>
        {isFlipped ? (
          <pre>
            <code>{methodName}</code>
          </pre>
        ) : (
          <p>{definition}</p>
        )}

        <button type="button" onClick={handleFlip}>
          {isFlipped ? 'Voir la définition' : 'Retourner la carte'}
        </button>
      </div>

      {isFlipped && (
        <a href={mdnUrl} target="_blank" rel="noopener noreferrer">
          Consulter la documentation MDN
        </a>
      )}
    </div>
  );
}

export default Flashcard;
