function guessingGame() {
  randomNum = Math.random() * 101;
  fixedNum = Math.floor(randomNum);
  //   console.log(fixedNum);
  let guess;
  do {
    guess = prompt("guess the no.");
    console.log(guess, fixedNum);
    if (fixedNum > guess) {
      console.log("the guess is too low");
    } else if (fixedNum < guess) {
      console.log("the guess is too high");
    }
  } while (guess != fixedNum);
  console.log("you won");
}
guessingGame();
