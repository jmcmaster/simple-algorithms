// Factorial solutions

// This is an iterative solution using a for loop.
function computeFactorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

computeFactorial(5);


// This is a recursive solution utilizing functions,
// call stack, and closure.
function computeFactorial(num) {
  var result = 1;
  function compute(n) {
    if (n < 1) {
      return result;
    }
    result *= n;
    return compute(n-1);
  }
  return compute(num);
}

computeFactorial(5);

// This solution uses recursion and memoization
// to cache calculations in an object.
function memoize(cb) {
  let cache = {};
  return function memoizeReturn(num) {
    if (num in cache) {
      return cache[num];
    } else {
      var result = cb(num);
      cache[num] = result;
      return result;
    }
  }
}

function computeFactorial(num) {
  if (num === 0) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
}

const factorial = memoize(computeFactorial);
factorial(5);
factorial(6); // calculates 6, grabs 5 from cache
factorial(8); // calculates 8 and 7, grabs 6 from cache
