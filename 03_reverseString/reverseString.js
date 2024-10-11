const reverseString = function (str) {
  let strArr = str.split("");
  let newStr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr.push(strArr[i]);
  }

  return newStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
