// declare options
const options = ["Rock", "Paper", "Scissors"];

// create function to randomly get computer choice
function computerSelection(options) {
  return options[Math.floor(Math.random() * options.length)];
}

// create a function to play a round of Rock Paper Scissors
// two inputs player and computer selection
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
    return("You Lose! Paper beats Rock");
  } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Rock") {
    return("It's a draw");
  } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
    return("You Win, Rock beats Scissors");
  } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Paper") {
    return("It's a draw")  
  } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
    return("You Win, Paper beats Rock");
  } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
    return("You Lose, Scissors beat Paper");
  } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
    return("You Win, Scissors beat Paper");
  } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
    return("You Lose, Rock beats Scissors");
  } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Scissors") {
    return("It's a draw");
  } else {
    return "Invalid result";
  }
}

// create playGame function - loops 'rounds' number of times
function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    console.log(playRound("Rock", computerSelection(options)));
  }
}

playGame(5);