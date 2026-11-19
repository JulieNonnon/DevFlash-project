// interface flashcards

export interface FlashcardData {
  id: number;
  category: string;
  definition: string;
  methodName: string;
  mdnUrl: string;
}

export const flashcards: FlashcardData[] = [
  {
    id: 1,
    category: 'array',
    definition:
      "Une méthode qui ajoute un ou plusieurs éléments à la fin d'un tableau et retourne sa nouvelle longueur.",
    methodName: 'push()',
    mdnUrl:
      'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  },
  {
    id: 2,
    category: 'array',
    definition: "Une méthode qui supprime le dernier élément d'un tableau et retourne cet élément.",
    methodName: 'pop()',
    mdnUrl:
      'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
  },
  {
    id: 3,
    category: 'array',
    definition:
      'Une méthode qui vérifie si un tableau contient une certaine valeur et retourne true ou false.',
    methodName: 'includes()',
    mdnUrl:
      'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
  },
  {
    id: 4,
    category: 'array',
    definition: "Une méthode qui supprime le premier élément d'un tableau et retourne cet élément.",
    methodName: 'shift()',
    mdnUrl:
      'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
  },
  {
    id: 5,
    category: 'array',
    definition:
      "Une méthode qui ajoute un ou plusieurs éléments au début d'un tableau et retourne sa nouvelle longueur.",
    methodName: 'unshift()',
    mdnUrl:
      'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
  },
];
