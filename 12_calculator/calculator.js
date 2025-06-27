const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, num) => prod * num, 1);
};

const power = function(num, power) {
  let prod = 1;
	for (let i = 0; i < power; i++) {
    prod *= num;
  }
  return prod;
};

const factorial = function(x) {
	if (x == 0) {
    return 1;
  } else if (x == 1) {
    return 1
  } else {
    let prod = x;
    while (x != 1) {
      prod *= x-1;
      x--;
    }
    return prod;
  }
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
