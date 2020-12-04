const fs = require('fs');

const input = fs
  .readFileSync('./day_1/input.txt')
  .toString()
  .split('\n')
  .map((i) => Number(i));

let valueOne, valueTwo, valueThree;

input.find((a, i) => {
  return input.find((b, j) => {
    if (i !== j) {
      return input.find((c, k) => {
        if (i !== k && a + b + c === 2020) {
          valueOne = a;
          valueTwo = b;
          valueThree = c;
          return true;
        }
      });
    }
  });
});

console.log(valueOne * valueTwo * valueThree);
