// this algorithm uses bisection search to find the
// the cubed root by throwing away half the possible
// values at every stage and very quickly finding an answer

function findCubeRoot(cube) {
  var exponent = 3,
      epsilon = 0.01,
      numGuesses = 0,
      low = (cube < 1) ? 0.0 : 1.0,
      high = (cube < 1) ? 1 : cube,
      ans = (high + low) / 2.0;

  while (Math.abs(Math.pow(ans, exponent) - cube) >= epsilon) {
    numGuesses += 1;

    if (Math.pow(ans, exponent) < cube) {
      low = ans
    } else {
      high = ans
    }
    ans = (high + low) / 2.0
  }

  console.log('numGuesses = ' + numGuesses);
  console.log(ans + ' is close to square root of ' + cube);
}


findCubeRoot(0.55);
findCubeRoot(27);
findCubeRoot(1000);