// declare options
const options = ["rock", "paper", "scissors"];

// initialise variable for player input 
let playerSelection = "";

// initialise scores for player & computer
let playerScore = 0; 
let computerScore = 0;

// create function to randomly get computer choice
function computerSelection(options) {
  return options[Math.floor(Math.random() * options.length)];
}

// create a function to play a round of Rock Paper Scissors
// two inputs player and computer selection
function playRound(playerSelection, computerSelection) {
  console.log(`Computer: ${computerSelection}`);
  console.log(`Player: ${playerSelection}`);
  if (playerSelection.toLowerCase() === computerSelection) {
    return("It's a draw")
  } 
  else if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      // increase computer score
      computerScore++;
      return("You Lose! Paper beats Rock");
    }
    else if (computerSelection === "scissors") {
      // increase player score
      playerScore++;
      return("You Win, Rock beats Scissors");
    }
  } 
  else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return ("You Win, Paper beats Rock");
    }
    else if (computerSelection === "scissors") {
      computerScore++;
      return("You Lose, Scissors beat Paper");
    }
  } 
  else if (playerSelection.toLowerCase() === "scissors")  {
    if (computerSelection === "paper") {
      playerScore++;
      return("You Win, Scissors beat Paper");
    }
    else if (computerSelection === "rock") {
      computerScore++;
      return("You Lose, Rock beats Scissors");
    }
  }
  else {
    return "Invalid result";
  }
}

// create playGame function - loops 'rounds' number of times
function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    // get new input from player each round
    playerSelection = prompt("Enter Rock, Paper, or Scissors:", "")
    // print result of each round to the console
    console.log(playRound(playerSelection, computerSelection(options)));
  }
  // add result messages
  if (playerScore > computerScore) {
    return `You win. Player scored ${playerScore} and Computer scored ${computerScore}`;
  }
  else if (computerScore > playerScore) {
    return `You lose. Computer scored ${computerScore} and Player scored ${playerScore}`;
  }
  else {
    return `It's a draw. Player scored ${playerScore} and Computer scored ${computerScore}`;
  }
  
}
// call play game function and input how many rounds to play
playGame(5);