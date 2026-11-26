// test for Home page component

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from './Home';

describe('Home', () => {
  it('désactive le bouton lorsque le formulaire est incomplet', () => {
    render(<Home />);

    const startButton = screen.getByRole('button', {
      name: 'Commencer le parcours',
    });

    expect(startButton).toBeDisabled();
  });
  it('active le bouton lorsque la catégorie et le nombre de cartes sont sélectionnés', async () => {
    const user = userEvent.setup();

    render(<Home />);

    const categorySelect = screen.getByRole('combobox', {
      name: 'Catégorie',
    });

    const cardCountSelect = screen.getByRole('combobox', {
      name: 'Nombre de flashcards',
    });

    const startButton = screen.getByRole('button', {
      name: 'Commencer le parcours',
    });

    expect(startButton).toBeDisabled();

    await user.selectOptions(categorySelect, 'array');

    expect(startButton).toBeDisabled();

    await user.selectOptions(cardCountSelect, '10');

    expect(startButton).toBeEnabled();
  });
});
