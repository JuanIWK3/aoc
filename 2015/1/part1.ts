const input = await Deno.readTextFile('./input.txt');
// const input = '()())';

let floor = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] == '(') {
    floor++;
  } else if (input[i] == ')') {
    floor--;
  }
}

console.log(floor);
