// home page of the app, where the user can select a category and the number of cards to study

import { useState, type SubmitEvent } from 'react';
import CategorySelect from '../components/CategorySelect';
import CardCountSelect from '../components/CardCountSelect';

function Home() {
  const [category, setCategory] = useState('');
  const [cardCount, setCardCount] = useState<number | ''>('');

  const canStart = category !== '' && cardCount !== '';

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    //SubmitEvent instead of FormEvent after React 19.2.10 update
    event.preventDefault();

    if (!canStart) {
      return;
    }

    console.log({
      category,
      cardCount,
    });
  };

  return (
    <main>
      <h1>DevFlash</h1>

      <p>Flashcards pour développeurs débutants</p>

      <form onSubmit={handleSubmit}>
        <CategorySelect value={category} onChange={setCategory} />

        <CardCountSelect value={cardCount} onChange={setCardCount} />

        <button type="submit" disabled={!canStart}>
          Commencer le parcours
        </button>
      </form>
    </main>
  );
}

export default Home;
