// var fib = function (n) {
//   var arr = [0, 1];
//   for (var i = 2; i <= n; i++) {
//     arr[i] = (arr[i - 1]+ arr[i - 2]) % 1000000007;
//   }
//   return arr[n];
// };
// console.log(fib(7))
////////////////////////////////////////////////////////////////////
//1 1 2 3 5 8 13 21
//0 1 2 3 4 5 6  7
var fib = function (n) {
  var arr = [0, 1];
  for (var i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
  }
  return arr[n];
};
console.log(fib(7))
////////////////////////////////////////////////////////////////////
// var numWays = function (n) {
//   const arr = [1,1];
//   // arr[0] = 1;
//   // arr[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//     arr[i] = arr[i] % (1e9 + 7);
//   }
//   return arr[n];
// };

// console.log(numWays(7));
