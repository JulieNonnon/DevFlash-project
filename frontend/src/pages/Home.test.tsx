// test for Home page component

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('désactive le bouton lorsque le formulaire est incomplet', () => {
    render(<Home />);

    const startButton = screen.getByRole('button', {
      name: 'Commencer le parcours',
    });

    expect(startButton).toBeDisabled();
  });
});
