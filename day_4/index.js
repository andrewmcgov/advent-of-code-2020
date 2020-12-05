const fs = require('fs');
const input = fs.readFileSync('./day_4/input.txt').toString();

// Part 1

const passportObjects = input.split('\n\n').map((input) => {
  const fieldsObject = {};
  input
    .split('\n')
    .join(' ')
    .split(' ')
    .forEach((field) => {
      const [key, value] = field.split(':');
      fieldsObject[key] = value;
    });
  return fieldsObject;
});

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

function hasRequiredFields(passport) {
  return requiredFields.every((field) => passport[field] !== undefined);
}

const validPassportCountPart1 = passportObjects.filter(hasRequiredFields)
  .length;

console.log('Part 1: ' + validPassportCountPart1);

// Part 2

function validYear(year, min, max) {
  return year.length === 4 && year >= min && year <= max;
}

function validHeight(height) {
  const unit = height.substring(height.length - 2);
  const value = height.replace(unit, '');

  if (unit === 'cm') {
    return value >= 150 && value <= 193;
  } else if (unit === 'in') {
    return value >= 59 && value <= 76;
  } else {
    return false;
  }
}

function validHairColor(color) {
  return color.charAt(0) === '#' &&
    color.length === 7 &&
    color.replace('#', '').match(/^[a-z0-9]*$/)
    ? true
    : false;
}

const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

function validEyeColor(color) {
  return validEyeColors.some((validColor) => validColor === color);
}

function validId(id) {
  return !isNaN(Number(id)) && id.length === 9;
}

function isValidPassport(passport) {
  return (
    hasRequiredFields(passport) &&
    validYear(passport.byr, 1920, 2002) &&
    validYear(passport.iyr, 2010, 2020) &&
    validYear(passport.eyr, 2020, 2030) &&
    validHeight(passport.hgt) &&
    validHairColor(passport.hcl) &&
    validEyeColor(passport.ecl) &&
    validId(passport.pid)
  );
}

const validPassportCountPart2 = passportObjects.filter(isValidPassport).length;

console.log('Part 2: ' + validPassportCountPart2);
