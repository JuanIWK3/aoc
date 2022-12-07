export const a = "";

const input = Deno.ReadTextInput('./input.txt');
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
