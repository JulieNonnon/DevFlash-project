import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Flashcard from './Flashcard';

const flashcardProps = {
  definition: "Ajoute un élément à la fin d'un tableau.",
  methodName: 'push()',
  mdnUrl:
    'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
};

describe('Flashcard', () => {
  it('affiche la définition au chargement', () => {
    render(<Flashcard {...flashcardProps} />);

    expect(screen.getByText("Ajoute un élément à la fin d'un tableau.")).toBeInTheDocument();
  });

  it("affiche le verso lorsque l'utilisateur clique sur la carte", async () => {
    const user = userEvent.setup();

    render(<Flashcard {...flashcardProps} />);

    const cardButton = screen.getByRole('button');

    await user.click(cardButton);

    expect(screen.getByText('push()')).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: 'Consulter la documentation MDN',
      }),
    ).toBeInTheDocument();
  });
});
