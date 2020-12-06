const fs = require('fs');
const groups = fs.readFileSync('./day_6/input.txt').toString().split('\n\n');

// Part 1

function countGroup(group) {
  const questionsAnswered = [];

  group
    .split('\n')
    .map((subgroup) => subgroup.split(''))
    .flat()
    .forEach((question) => {
      if (!questionsAnswered.includes(question)) {
        questionsAnswered.push(question);
      }
    });

  return questionsAnswered.length;
}

const partOneTotal = groups.reduce(
  (count, group) => count + countGroup(group),
  0
);

console.log('Part 1: ' + partOneTotal);

// Part 2

function countGroupPartTwo(group) {
  const groupMembers = group.split('\n').map((subgroup) => subgroup.split(''));

  if (groupMembers.length === 1) {
    console.log(groupMembers[0].length);
    return groupMembers[0].length;
  }

  const total = groupMembers[0].filter((question) => {
    return groupMembers.every((member, index) => {
      if (index === 0) {
        return true;
      }

      return member.includes(question);
    });
  }).length;

  console.log(total);

  return total;
}

const partTwoTotal = groups.reduce(
  (count, group) => count + countGroupPartTwo(group),
  0
);

console.log('Part 2: ' + partTwoTotal);
