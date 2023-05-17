// 1-Palindrome number

// const isPalindrome = function (x) {
//   return x < 0 ? false : x == x.toString().split("").reverse().join("");
//   console.log();
// };
// const res = isPalindrome(121);
// console.log(res);

// 2. fibonacci number

const fib = function (n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  // console.warn(arr);
  return console.warn(arr);
};
fib(5);
