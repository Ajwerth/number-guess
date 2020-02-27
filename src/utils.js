export const randInt = (lower, upper) => {
    // return random inclusive integer
    let min = Math.ceil(lower);
    let max = Math.floor(upper);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  export const checkGuess = (number, lastGuess) => {
    if (lastGuess > number) {
      return "Nope. Lower";
    } else if (lastGuess < number) {
      return "Nope. Higher";
    } else {
      return "You got it!";
    }
  };
  