// Creates an array of that lists all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Creates variables to hold that values of wins, losses and guesses.
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Creates an empty array to keet track of guesses.
var guessCounter = [];

// Creates a variable of the letter to guess.
var letterToGuess = null;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Function to updated incorrect guesses.
var updateGuessesLeft = function() {
  document.querySelector('#guessesLeft').innerHTML = "guessesLeft: " + guessesLeft;
};

// Function to update user guesses left.
var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

// Function to keep track of users guess thus far.
var updateGuessesSoFar = function() {
  document.querySelector('#guesses').innerHTML = "Your guesses so far: " + guessCounter.join(', ');
};

// Funciton will be called when we reset everything.
var reset = function() {
  guessesLeft = 9;
  guessCounter = [];

  updateGuessesLeft();
  updateLetterToGuess();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

// Function for user guess when key is released.
// If user uses uppercase letter function will make it lower case.
document.onkeyup = function(event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessCounter.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

  // if user guesses correctly displays alert to console win and resets the game.
  if (guessesLeft > 0) {
    if (userGuess == letterToGuess) {
      wins++;
      document.querySelector('#wins').innerHTML = "Wins: " + wins;
      alert("Congratulations, your psycic!");
      reset();
    }
    // if user does not guess correctly displays alert to console loss and resets the game.
  } else if (guessesLeft == 0) {
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    alert("Sorry, Your not psychic, try again!");
    reset();
  }
};
