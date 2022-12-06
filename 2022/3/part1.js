import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf-8');
// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`;

const lines = input.split(/\n/);
let priority = 0;

const getRepeatedLetter = (h1, h2) => {
  for (let letter of h1) {
    for (let letter2 of h2) {
      if (letter === letter2) {
        return letter;
      }
    }
  }
};

for (let line of lines) {
  const p1 = line.substring(0, line.length / 2);
  const p2 = line.substring(line.length / 2, line.length);

  const repeated = getRepeatedLetter(p1, p2);

  if (repeated === undefined) {
    continue;
  }

  console.log(repeated);

  if (repeated === repeated.toLowerCase()) {
    // LowerCase
    priority += repeated.charCodeAt() - 96;
    console.log(repeated.charCodeAt() - 96);
  } else {
    // UpperCase
    console.log('maiscula');
    priority += repeated.charCodeAt() - 64 + 26;
    console.log(repeated.charCodeAt() - 64 + 26);
  }
}

console.log(priority);
