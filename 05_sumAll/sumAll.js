const validate = (value) => Number.isInteger(value) && value >= 0;

const sumAll = function (left, right) {
  return validate(left) && validate(right)
    ? left === right
      ? right
      : left > right
        ? right + sumAll(left, right + 1)
        : left + sumAll(left + 1, right)
    : "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
