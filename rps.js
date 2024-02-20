// declare options
let options = ["Rock", "Paper", "Scissors"];

// create function to randomly get computer choice
function computerSelection(options) {
  return options[Math.floor(Math.random() * options.length)];
}

// create a function to play a round of Rock Paper Scissors
// two inputs player and computer selection
function playRound(playerSelection, computerSelection) {
  console.log(`Computer Selection: ${computerSelection}`);
  if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Rock") {
    console.log("It's a draw");
  } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
    console.log("You Win, Rock beats Scissors");
  } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Paper") {
    console.log("It's a draw")  
  } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
    console.log("You Win, Paper beats Rock");
  } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
    console.log("You Lose, Scissors beat Paper");
  } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
    console.log("You Win, Scissors beat Paper");
  } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
    console.log("You Lose, Rock beats Scissors");
  } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Scissors") {
    console.log("It's a draw");
  } else {
    return "Invalid result"
  }
}
playRound("scissors", computerSelection(options));