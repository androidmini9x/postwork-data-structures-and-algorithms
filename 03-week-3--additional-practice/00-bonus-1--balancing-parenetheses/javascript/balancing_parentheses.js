function balancingParentheses(string) {

  let left = 0;
  let right = 0;

  for (let i = 0; i < string.length; i++) {
    const pt = string[i];
    if (pt === '(') {
      left++;
    } else {
      if (left >= 1) {
        left--
      } else {
        right++;
      }
    }
  }
  return left + right;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
