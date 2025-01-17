function selectionSortRecursive(arr) {
  if (arr.length == 0) {
    return [];
  }

  let min = Math.min(...arr);
  let idx = arr.indexOf(min);
  arr.splice(idx, 1);

  let result = selectionSortRecursive(arr);

  result.unshift(min);

  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
