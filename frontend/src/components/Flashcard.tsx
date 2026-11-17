// flashcard component

import { useState } from 'react';

interface FlashcardProps {
  definition: string;
  methodName: string;
  mdnUrl: string;
}

function Flashcard({ definition, methodName, mdnUrl }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <button type="button" onClick={handleFlip}>
        {isFlipped ? (
          <>
            <p>{methodName}</p>

            <a
              href={mdnUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              Consulter la documentation MDN
            </a>
          </>
        ) : (
          <p>{definition}</p>
        )}
      </button>
    </div>
  );
}

export default Flashcard;
