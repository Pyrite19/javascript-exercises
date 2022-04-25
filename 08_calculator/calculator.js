const add = function (num1, num2) {
  total = num1 + num2;
  return total;
};

const subtract = function (num1, num2) {
  total = num1 - num2;
  return total;
};

const sum = function (array) {
  total = 0
  array.forEach((i) => {
    total += i;
  });
  return total;
};

const multiply = function (array) {
  total = 1
  array.forEach((i) => {
    total *= i;
  });
  return total;
};

const power = function (num1, num2) {
  total = num1 ** num2;
  return total;
};

const factorial = function (num) {
  total = num;
  if (num !== 0) {
    for (let i = num - 1; i > 0; i--) {
      total *= i;
    }
  }
  if (num === 0) {
    total = 1
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
