// define variables in the game and create array of all options
// This randomly chooses a choice from the computerChoices option array
var userInput = [];
var computerChoices = ["a", "s", "v", "t", "q", "z", "p", "o", "j"];
var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];
// counter variables
var wins = 0;
var losses = 0;
var guessesLeft = 9; //9 attempts/guesses

// Create variables that hold references to places in HTML where we want to display results
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses-left");
var userInputText = document.getElementById("user-input");

// Write a function to reset game and update the HTML
function resetGame() {
  userInput = [];
  computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesLeft = 9;
  updateHtml();
}
function updateHtml() {
  guessesText.textContent = "Guesses left: " + guessesLeft;
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  userInputText.textContent = "Your guesses so far: " + userInput;
}

// This function is how the game begins with an event is triggered

document.onkeyup = function(event) {
  var userInput = event.key;
  console.log(event);

  // This conditional will determine what happens in the game
  if (userInput === computerGuess) {
    wins++;
    resetGame();
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      losses++;
      resetGame();
    }
  }
  updateHtml();
  // Display user guesses and wins/losses
};
// end of loop
console.log("Program Complete");

// Questions remain:
// How to record multiple userInputs on Guesses so far element
