const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    return arr.reduce((sum, a) => sum + a, 0);
};

const multiply = function(arr) {
    return arr.reduce((result, a) => result * a, 1);
};

const power = function(a, power) {
    let result = 1;
    for (let i = 0; i < power; ++i)
      result *= a;
    return result;
};

const factorial = function(n) {
    let result = 1;
    for (let i = 2; i <= n; ++i)
        result *= i;
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
