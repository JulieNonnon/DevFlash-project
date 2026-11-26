// test for Home page component

import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from './Home';

// Mock the useNavigate hook from react-router-dom to test navigation behavior
const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// test suite for the Home component
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
  it('navigue vers Study avec les paramètres sélectionnés', async () => {
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

    await user.selectOptions(categorySelect, 'array');
    await user.selectOptions(cardCountSelect, '10');

    await user.click(startButton);

    expect(mockNavigate).toHaveBeenCalledWith('/study', {
      state: {
        category: 'array',
        cardCount: 10,
      },
    });
  });
});
