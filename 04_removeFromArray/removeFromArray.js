const removeFromArray = function (arr, ...itemsToRemove) {
  for (let item of itemsToRemove) {
    let index = arr.indexOf(item);
    while (index >= 0) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
