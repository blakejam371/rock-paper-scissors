// declare options
const options = ["rock", "paper", "scissors"];

// get player input 
let playerSelection = "";

// create function to randomly get computer choice
function computerSelection(options) {
  return options[Math.floor(Math.random() * options.length)];
}

// create a function to play a round of Rock Paper Scissors
// two inputs player and computer selection
function playRound(playerSelection, computerSelection) {
  console.log(`Computer: ${computerSelection}`);
  console.log(`Pkayer: ${playerSelection}`);
  if (playerSelection.toLowerCase() === computerSelection) {
    return("It's a draw")
  } 
  else if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      return("You Lose! Paper beats Rock");
    }
    else if (computerSelection === "scissors") {
      return("You Win, Rock beats Scissors");
    }
  } 
  else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      return ("You Win, Paper beats Rock");
    }
    else if (computerSelection === "scissors") {
      return("You Lose, Scissors beat Paper");
    }
  } 
  else if (playerSelection.toLowerCase() === "scissors")  {
    if (computerSelection === "paper") {
      return("You Win, Scissors beat Paper");
    }
    else if (computerSelection === "rock") {
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
    playerSelection = prompt("Enter Rock, Paper, or Scissors:", "")
    console.log(playRound(playerSelection, computerSelection(options)));
  }
}

playGame(5);