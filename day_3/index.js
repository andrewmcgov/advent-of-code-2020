const fs = require('fs');
const input = fs.readFileSync('./day_3/input.txt').toString().split('\n');

// Part 1

const patternWidth = input[0].length;
let x = 0;
let treesHit = 0;

input.forEach((row, index) => {
  if (index !== 0) {
    x = x + 3;
  }
  const position = row[x % patternWidth];

  if (position === '#') {
    treesHit++;
  }
});

console.log('Part 1: ' + treesHit);

// Part 2

function calculateSlopes(slopes) {
  return slopes
    .map(([right, down]) => {
      let x = 0;
      let y = 0;
      let treesHit = 0;
      input.forEach((row, index) => {
        if (index !== y) {
          return;
        }

        if (index !== 0) {
          x = x + right;
        }

        const position = row[x % patternWidth];

        if (position === '#') {
          treesHit++;
        }

        y = y + down;
      });
      return treesHit;
    })
    .reduce((total, treesHit) => total * treesHit, 1);
}

console.log(
  'Part 2: ' +
    calculateSlopes([
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ])
);
