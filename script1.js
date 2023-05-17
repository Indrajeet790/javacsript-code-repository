// 1-Palindrome number

const isPalindrome = function (x) {
  return x < 0 ? false : x == x.toString().split("").reverse().join("");
  console.log();
};
const res = isPalindrome(121);
console.log(res);
