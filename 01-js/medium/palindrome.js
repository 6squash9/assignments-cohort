/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right =alphanumericStr.length - 1;
  while (left < right) {
    if (alphanumericStr[left] !== alphanumericStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
