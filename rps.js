// declare options
let options = ["Rock", "Paper", "Scissors"];

// create function to randomly get computer choice
function computerSelection(options) {
  return options[Math.floor(Math.random() * options.length)];
}

// create a function to play a round of Rock Paper Scissors
// two inputs player and computer choice
function playRound(playerSelection, computerSelection) {
  console.log(`Computer Selection: ${computerSelection}`);
  if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Rock") {
    console.log("It's a draw");
  } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
    console.log("You Win, Rock beats Scissors");
  }
}

playRound("rock", computerSelection(options));