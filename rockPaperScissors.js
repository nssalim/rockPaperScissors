// Rock, Paper, or Scissors

// Rock paper scissors is a two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.

// Game has 4 parts:
// user choice.
// computer choice.
// to compare the two choices and determine a winner.
// start the program and display the results.

// user makes a choice to pick ‘rock’, ‘paper’, or ‘scissors’ 
// make all input lowercase
// ensure user enters valid choice (‘rock’, ‘paper’, or ‘scissors’).
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 
    userInput === 'scissors' || 
    userInput ===  'paper'){
      return userInput;
    } else {
      console.log('Error! Please type: rock, paper or scissors.');
    }
  }