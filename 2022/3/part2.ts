export const a = "";

const input: string = await Deno.readTextFile("./input.txt");
// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`;

const lines = input.split(/\n/);
let priority = 0;

const groupsOfThree: string[][] = [];
let group: string[] = [];

const getRepeatedLetter = (l1: string, l2: string, l3: string) => {
  const repeatedLetters: string[] = [];
  for (let letter of l1) {
    for (let letter2 of l2) {
      if (letter === letter2) {
        repeatedLetters.push(letter);
      }
    }
  }

  for (let letter of repeatedLetters) {
    for (let letter2 of l3) {
      if (letter === letter2) {
        return letter;
      }
    }
  }
};

for (let line of lines) {
  if (group.length === 2) {
    group.push(line);
    groupsOfThree.push(group);
    group = [];
  } else {
    group.push(line);
  }
}

for (let group of groupsOfThree) {
  console.log(group);

  const l1 = group[0];
  const l2 = group[1];
  const l3 = group[2];

  const repeated = getRepeatedLetter(l1, l2, l3);

  if (repeated === undefined) {
    continue;
  }

  //console.log(repeated);

  if (repeated === repeated.toLowerCase()) {
    // LowerCase
    priority += repeated.charCodeAt(0) - 96;
    //console.log(repeated.charCodeAt() - 96);
  } else {
    // UpperCase
    //console.log('maiscula');
    priority += repeated.charCodeAt(0) - 64 + 26;
    //console.log(repeated.charCodeAt() - 64 + 26);
  }
}

console.log(priority);
