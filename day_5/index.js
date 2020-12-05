const fs = require('fs');
const input = fs.readFileSync('./day_5/input.txt').toString().split('\n');

// Part 1

function takeUpperOrLowerRange(range, delimiter) {
  const [low, high] = range;
  if (low + 1 === high) {
    if (['F', 'L'].includes(delimiter)) {
      return low;
    } else {
      return high;
    }
  }
  const halfWayPoint = Math.floor((high - low) / 2) + low;

  if (['F', 'L'].includes(delimiter)) {
    return [low, halfWayPoint];
  } else {
    return [halfWayPoint + 1, high];
  }
}

const seatIds = input.map((code) => {
  const rowCode = code.split('');
  const columnCode = rowCode.splice(-3, 3);

  const row = rowCode.reduce(
    (range, code) => takeUpperOrLowerRange(range, code),
    [0, 127]
  );

  const column = columnCode.reduce(
    (range, code) => takeUpperOrLowerRange(range, code),
    [0, 7]
  );

  return row * 8 + column;
});

console.log('Part 1: ' + Math.max(...seatIds));

// Part 2

const sortedIds = [...seatIds].sort((a, b) => a - b);

const seat =
  sortedIds.find((seat, index) => {
    return sortedIds[index + 1] === seat + 2;
  }) + 1;

console.log('Part 2: ' + seat);
