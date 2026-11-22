// study page of the app, where the user can study flashcards based on the selected category and number of cards

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Flashcard from '../components/Flashcard';
import { flashcards, type FlashcardData } from '../data/flashcards';
import { shuffle } from '../utils/shuffle';

interface StudyState {
  category: string;
  cardCount: number;
}

function Study() {
  // Use the useLocation hook to access the state passed from the Home page
  const location = useLocation();
  const navigate = useNavigate();

  // Type assertion to ensure that the state passed from the Home page is of type StudyState, or null if no state was passed
  const state = location.state as StudyState | null;

  // State to keep track of the current card index and the shuffled study cards
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [studyCards] = useState<FlashcardData[]>(() => {
    if (!state) {
      return [];
    }
    // filter needs to be after the state check, because if state is null, it will throw an error
    const categoryFlashcards = flashcards.filter(
      (flashcard) => flashcard.category === state.category,
    );
    // shuffle the filtered flashcards to randomize the order of the cards
    const shuffledCards = shuffle(categoryFlashcards);
    // return only the number of cards specified by the user, or all cards if the user requested more than available
    return shuffledCards.slice(0, state.cardCount);
  });

  if (!state) {
    return (
      <main>
        <h1>Parcours introuvable</h1>

        <p>Aucun parcours n'a été configuré.</p>
      </main>
    );
  }

  if (studyCards.length === 0) {
    return (
      <main>
        <h1>Parcours</h1>
        <p>Aucune flashcard disponible pour cette catégorie.</p>
      </main>
    );
  }

  const currentCard = studyCards[currentCardIndex];
  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === studyCards.length - 1;

  const handlePreviousCard = () => {
    if (isFirstCard) {
      return;
    }

    setCurrentCardIndex((previousIndex) => previousIndex - 1);
  };

  const handleNextCard = () => {
    if (isLastCard) {
      navigate('/completion', {
        state: {
          cardCount: studyCards.length,
        },
      });
      return;
    }

    setCurrentCardIndex((previousIndex) => previousIndex + 1);
  };

  return (
    <main>
      <h1>Parcours</h1>

      <p> Bienvenue dans votre parcours de flashcards.</p>
      <p> Catégorie : {state.category} </p>
      <p>
        {' '}
        Nombre de cartes : Carte {currentCardIndex + 1} / {studyCards.length}{' '}
      </p>

      <Flashcard
        key={currentCard.id}
        definition={currentCard.definition}
        methodName={currentCard.methodName}
        mdnUrl={currentCard.mdnUrl}
      />

      <div>
        {!isFirstCard && (
          <button type="button" onClick={handlePreviousCard}>
            Carte précédente
          </button>
        )}

        <button type="button" onClick={handleNextCard}>
          {isLastCard ? 'Terminer le parcours' : 'Carte suivante'}
        </button>
      </div>
    </main>
  );
}

export default Study;
