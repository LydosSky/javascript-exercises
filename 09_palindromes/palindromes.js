const isLetter = function (char) {
  const charCode = char.charCodeAt();
  return (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122) ||
    (charCode >= 48 && charCode <= 57)
  );
};

const palindromes = function (string) {
  const stringArray = string.toLowerCase().split("").filter(isLetter);
  const stringArrayLength = stringArray.length;
  const stringArrayMiddle = Math.floor(stringArrayLength / 2);

  for (let i = 0; i < stringArrayMiddle; i++) {
    if (stringArray[i] !== stringArray[stringArrayLength - (i + 1)]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
