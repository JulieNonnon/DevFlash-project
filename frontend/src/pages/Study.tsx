// study page of the app, where the user can study flashcards based on the selected category and number of cards

import { useLocation } from 'react-router-dom';

interface StudyState {
  category: string;
  cardCount: number;
}

function Study() {
  // Use the useLocation hook to access the state passed from the Home page
  const location = useLocation();
  // Type assertion to ensure that the state passed from the Home page is of type StudyState, or null if no state was passed
  const state = location.state as StudyState | null;

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

      <p>Catégorie : {state.category}</p>

      <p>Nombre de cartes : {state.cardCount}</p>
    </main>
  );
}

export default Study;
