import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf-8');
// const input = '()())';

let floor = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] == '(') {
    floor++;
  } else if (input[i] == ')') {
    floor--;
  }

  if (floor == -1) {
    console.log(i + 1);
    break;
  }
}
