import { useState } from 'react';
import CategorySelect from './components/CategorySelect';
import CardCountSelect from './components/CardCountSelect';

function App() {
  const [category, setCategory] = useState('');
  const [cardCount, setCardCount] = useState<number | ''>('');

  const canStart = category !== '' && cardCount !== '';

  return (
    <main>
      <h1>DevFlash</h1>

      <p>Flashcards pour développeurs débutants</p>

      <CategorySelect value={category} onChange={setCategory} />

      <CardCountSelect value={cardCount} onChange={setCardCount} />

      <button type="button" disabled={!canStart}>
        Commencer le parcours
      </button>
    </main>
  );
}

export default App;
