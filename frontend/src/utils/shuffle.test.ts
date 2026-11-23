// tests shuffle function

import { describe, expect, it } from 'vitest';
import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('retourne un tableau contenant les mêmes éléments', () => {
    const cards = ['A', 'B', 'C', 'D'];

    const result = shuffle(cards);

    expect(result).toHaveLength(cards.length);

    expect(result).toEqual(expect.arrayContaining(cards));
  });
  it('ne modifie pas le tableau original', () => {
    // Arrange : prepare the datas
    const cards = ['A', 'B', 'C', 'D'];
    const originalCards = [...cards];
    // Act : execute what we want to test
    shuffle(cards);
    // Assert : check the result
    expect(cards).toEqual(originalCards);
  });
});
