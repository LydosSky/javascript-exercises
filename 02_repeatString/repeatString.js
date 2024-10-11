const repeatString = function (string, number) {
  return number < 0
    ? "ERROR"
    : number === 0
      ? ""
      : number === 1
        ? string
        : string + repeatString(string, number - 1);
};

// Do not edit below this line
module.exports = repeatString;
