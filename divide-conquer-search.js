// Linear search

// Time Complexity: Linear O(n)
function linearSearch(list, item) {
  for (var i = 0; i < list.length; i++) {
    console.log('iteration');
    if (list[i] === item) return i;
  }
  return -1;
}

console.log(linearSearch([1,2,3,90,90,100], 90));

// Binary Search
// Time Complexity: Log O(log n)
function binarySearch(list, item) {
  var min = 0;
  var max = list.length - 1;
  var guess;

  while ( min <= max) {
    console.log('iteration');
    guess = Math.floor((min + max) / 2);
    if (list[guess] === item) {
      return guess;
    } else {
      if (list[guess] < item) {
        min = guess + 1
      } else {
        max = guess - 1
      }
    }
  }
}

console.log(binarySearch([1,2,3,90,92,100], 100));