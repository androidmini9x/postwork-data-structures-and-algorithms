function romanNumeral(string) {
  const ROM = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let count = 0;
  let ptr = string[string.length - 1];
  for (let i = string.length - 1; i >= 0; i--) {
    const idx = string[i];
    if (ROM[idx] < ROM[ptr]) {
      count -= ROM[idx];
    } else {
      count += ROM[idx];
    }
    ptr = idx;
  }
  return count;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
