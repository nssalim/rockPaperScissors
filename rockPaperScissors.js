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
  
  // test getUserChoice function
  // valid input
  // console.log(getUserChoice('rock'));
  // rock
  
  // invalid input
  // console.log(getUserChoice('stapler'));
  // Output
  // Error! Please type: rock, paper or scissors.
  
  // computer makes a choice to pick ‘rock’, ‘paper’, or ‘scissors’ 
  const getComputerChoice = () => {
    const randomNumber = 
    Math.floor(Math.random() * 3);
      switch (randomNumber){
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors'
      }
  };
  
  // test getComputerChoice function can randomly generate 'rock', 'paper' or 'scissors'
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // Output
  // paper
  // scissors
  // rock
  
  // Determine winner
  const determineWinner = (userChoice, computerChoice) => {
    // tie
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "Sorry! Computer won!";
      } else {
        return "Congratulations! You won!"
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return "Sorry! Computer won!";
      } else {
        return "Congratulations! You won!"
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return "Sorry! Computer won!";
      } else {
        return "Congratulations! You won!"
      }
    }
  };
  
  // test determineWinner function
  // console.log(determineWinner('scissors', 'rock'));
  // console.log(determineWinner('scissors', 'paper'));
  // console.log(determineWinner('paper', 'rock'));
  // console.log(determineWinner('paper', 'paper'));
  // Output
  // Sorry! Computer won!
  // Congratulations! You won!
  // Sorry! Computer won!
  // It's a tie!
  
  // start game and log the results
  const playGame = () => {
    const userChoice = 
    getUserChoice('paper');
    const computerChoice = 
    getComputerChoice();
  // console.log(`You threw ${userChoice}`);
    console.log('Your choice: ' + userChoice);
    // console.log(`The computer threw ${computerChoice}`);
    console.log('Computer choice: ' + computerChoice);
  
  // Winner
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // start game
  playGame()
  // Output 1
  // Your choice: paper
  // Computer choice: scissors
  // Congratulations! You won!
  
  // Output 2
  // Your choice: paper
  // Computer choice: rock
  // Sorry! Computer won!
  
  // Output 3
  // Your choice: paper
  // Computer choice: paper
  // It's a tie!
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  