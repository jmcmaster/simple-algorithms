// This algorithm will achieve an approximate guess
// for what the cubed root is for X by incrementing its
// guess each iteration until the guess is within
// the epsilon value or has surpassed X

function guessCubedRoot(cube) {
  var epsilon = 0.01,
      guess = 0,
      increment = 0.0001,
      num_guesses = 0;

  while(Math.abs(Math.pow(guess, 3) - cube) >= epsilon && guess <= cube) {
    guess += increment
    num_guesses += 1
  }

  console.log('Number of guesses: ' + num_guesses);
  if (Math.abs(Math.pow(guess, 3) - cube) >= epsilon) {
    console.log('Failed on cube root of ' + cube);
  } else {
    console.log(guess + ' is close to the cube root of ' + cube);
  }
}

guessCubedRoot(27);
guessCubedRoot(44);
guessCubedRoot(10);
guessCubedRoot(1000);
