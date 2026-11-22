// utilitary file to shuffle an array of items

// <T> is a generic type parameter that allows the function to work with any type of array without losing type information.
// It ensures that the function can accept an array of any type and return an array of the same type.

export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  // create a copy of the original array to avoid mutating it
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

// this loop can be read as the following :
// For each element in the array "shuffled", swap it with a randomly selected element from the remaining elements.
