
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

/*
  EXTRA TEST CASES (run `node index.js` to see output)
*/
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true  (single letter)");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false (different letters)");
  console.log("=>", isPalindrome("ab"));
}



module.exports = isPalindrome;