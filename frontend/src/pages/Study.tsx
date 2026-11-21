// study page of the app, where the user can study flashcards based on the selected category and number of cards

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Flashcard from '../components/Flashcard';
import { flashcards } from '../data/flashcards';

interface StudyState {
  category: string;
  cardCount: number;
}

function Study() {
  // Use the useLocation hook to access the state passed from the Home page
  const location = useLocation();
  // Type assertion to ensure that the state passed from the Home page is of type StudyState, or null if no state was passed
  const state = location.state as StudyState | null;

  const navigate = useNavigate();

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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

  // filter needs to be after the state check, because if state is null, it will throw an error
  const categoryFlashcards = flashcards.filter(
    (flashcard) => flashcard.category === state.category,
  );

  const currentCard = categoryFlashcards[currentCardIndex];
  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === categoryFlashcards.length - 1;

  return (
    <main>
      <h1>Parcours</h1>

      <Flashcard
        key={currentCard.id}
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
