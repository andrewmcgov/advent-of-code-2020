const fs = require('fs');

const input = fs.readFileSync('./day_2/input.txt').toString().split('\n');

const part1 = input.filter((entry) => {
  const [policy, password] = entry.split(': ');
  const [range, requiredCar] = policy.split(' ');
  const [low, high] = range.split('-');

  const charCount = password.split('').filter((char) => char === requiredCar)
    .length;

  return charCount >= Number(low) && charCount <= Number(high);
}).length;

const part2 = input.filter((entry) => {
  const [policy, password] = entry.split(': ');
  const [range, requiredChar] = policy.split(' ');
  const [a, b] = range.split('-');
  const positionOneMatches = password.charAt(a - 1) === requiredChar;
  const positionTwoMatches = password.charAt(b - 1) === requiredChar;

  return (
    (positionOneMatches || positionTwoMatches) &&
    !(positionOneMatches && positionTwoMatches)
  );
}).length;

console.log(part2);
