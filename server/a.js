var arr = [1, 2, 5, 4, 3];

function q(arr) {
  if (arr.length == 0) {
    return [];
  }
  var polit = arr[0];
  var big = [];
  var small = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] >= polit) {
      big.push(arr[i]);
    } else {
      small.push(arr[i]);
    }
  }
  return q(small).concat(polit, q(big));
}
console.log(q(arr));
