// study page of the app, where the user can study flashcards based on the selected category and number of cards

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Flashcard from '../components/Flashcard';

interface StudyState {
  category: string;
  cardCount: number;
}

interface FlashcardData {
  definition: string;
  methodName: string;
  mdnUrl: string;
}

const flashcards: FlashcardData[] = [
  {
    definition:
      "Une méthode qui ajoute un ou plusieurs éléments à la fin d'un tableau et retourne sa nouvelle longueur.",
    methodName: 'push()',
    mdnUrl:
      'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  },
  {
    definition: "Une méthode qui supprime le dernier élément d'un tableau et retourne cet élément.",
    methodName: 'pop()',
    mdnUrl:
      'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
  },
  {
    definition:
      'Une méthode qui vérifie si un tableau contient une certaine valeur et retourne true ou false.',
    methodName: 'includes()',
    mdnUrl:
      'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
  },
];

function Study() {
  // Use the useLocation hook to access the state passed from the Home page
  const location = useLocation();
  // Type assertion to ensure that the state passed from the Home page is of type StudyState, or null if no state was passed
  const state = location.state as StudyState | null;

  const navigate = useNavigate();

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = flashcards[currentCardIndex];

  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === flashcards.length - 1;

  const handlePreviousCard = () => {
    if (isFirstCard) {
      return;
    }

    setCurrentCardIndex((previousIndex) => previousIndex - 1);
  };

  const handleNextCard = () => {
    if (isLastCard) {
      navigate('/completion');
      return;
    }

    setCurrentCardIndex((previousIndex) => previousIndex + 1);
  };

  if (!state) {
    return (
      <main>
        <h1>Parcours introuvable</h1>

        <p>Aucun parcours n'a été configuré.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Parcours</h1>

      <Flashcard
        key={currentCardIndex}
        definition={currentCard.definition}
        methodName={currentCard.methodName}
        mdnUrl={currentCard.mdnUrl}
      />

      <button type="button" onClick={handleNextCard}>
        {isLastCard ? 'Terminer le parcours' : 'Carte suivante'}
      </button>

      {!isFirstCard && (
        <button type="button" onClick={handlePreviousCard}>
          Carte précédente
        </button>
      )}
    </main>
  );
}

export default Study;
