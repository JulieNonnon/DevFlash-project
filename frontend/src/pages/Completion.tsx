// completion page of the app, allowing the user to end the study session, view their results and come back to the home page

import { useLocation, useNavigate } from 'react-router-dom';

interface CompletionState {
  cardCount: number;
}

function Completion() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as CompletionState | null;

  const handleReturnHome = () => {
    navigate('/');
  };

  if (!state) {
    return (
      <main>
        <h1>Parcours terminé</h1>

        <p>Le nombre de flashcards parcourues est introuvable.</p>

        <button type="button" onClick={handleReturnHome}>
          Retour à l'accueil
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Bien joué ! 🎉</h1>

      <p>
        Vous avez parcouru l'ensemble des <strong>{state.cardCount}</strong> flashcards.
      </p>

      <button type="button" onClick={handleReturnHome}>
        Retour à l'accueil
      </button>
    </main>
  );
}

export default Completion;
