const fibonacci = function (num) {
  num = parseInt(num);
  if (num < 0) return "OOPS";

  const helper = (first, second, num) => {
    if (num === 0) return first;
    return helper(second, first + second, num - 1);
  };

  return helper(0, 1, num);
};

// Do not edit below this line
module.exports = fibonacci;
