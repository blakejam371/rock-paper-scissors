// initialise scores, round, and choice variables
let playerScore = 0; 
let computerScore = 0;
let round = 0;
let playerChoice = '';
let computerChoice = '';
const roundCount = document.querySelector('#rounds');
const scoreCount = document.querySelector('#scores');
const roundResult = document.querySelector('#roundResult');
const enemyChoice = document.querySelector('#enemyChoice');
const gameResult = document.querySelector('#gameResult');
const resetButton = document.querySelector('.reset');

// add event listeners to buttons
const buttons = document.querySelectorAll('.playerSelection');
  buttons.forEach((element)  => {
    element.addEventListener('click', () => {
      if (element.classList.contains('rockButton')) {
        playerChoice = 'Rock';
        computerSelection();
        playRound();
    } else if (element.classList.contains('paperButton')) {
        playerChoice = 'Paper';
        computerSelection();
        playRound()
    } else if (element.classList.contains('scissorsButton')) {
        playerChoice = 'Scissors';
        computerSelection();
        playRound()
    }
    }
    )}
  );

function computerSelection() {
  const options = ["Rock", "Paper", "Scissors"];
  computerChoice = options[Math.floor(Math.random() * options.length)];
  enemyChoice.textContent = computerChoice;
}

// create a function to play a round of Rock Paper Scissors
function playRound() {
  if (playerChoice === computerChoice) {
      roundResult.textContent = "It's a draw";
      round++;
      roundCount.textContent = `Round ${round}`;
  } 
  else if (playerChoice === "Rock") {
    if (computerChoice === "Paper") {
      // increase computer score
      round++;
      roundCount.textContent = `Round ${round}`;
      computerScore++;
      scoreCount.textContent = `Your Score: ${playerScore} | Enemy Score: ${computerScore}`;
      roundResult.textContent = "You Lose! Paper beats Rock";
    }
    else if (computerChoice === "Scissors") {
      // increase player score
      round++;
      roundCount.textContent = `Round ${round}`;
      playerScore++;
      scoreCount.textContent = `Your Score: ${playerScore} | Enemy Score: ${computerScore}`;
      roundResult.textContent = "You Win, Rock beats Scissors";
    }
  } 
  else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      round++;
      roundCount.textContent = `Round ${round}`;
      playerScore++;
      scoreCount.textContent = `Your Score: ${playerScore} | Enemy Score: ${computerScore}`;
      roundResult.textContent = "You Win, Paper beats Rock";
    }
    else if (computerChoice === "Scissors") {
      round++;
      roundCount.textContent = `Round ${round}`;
      computerScore++;
      scoreCount.textContent = `Your Score: ${playerScore} | Enemy Score: ${computerScore}`;
      roundResult.textContent = "You Lose, Scissors beat Paper";
    }
  } 
  else if (playerChoice === "Scissors")  {
    if (computerChoice === "Paper") {
      round++;
      roundCount.textContent = `Round ${round}`;
      playerScore++;
      scoreCount.textContent = `Your Score: ${playerScore} | Enemy Score: ${computerScore}`;
      roundResult.textContent = "You Win, Scissors beat Paper";
    }
    else if (computerChoice === "Rock") {
      round++;
      roundCount.textContent = `Round ${round}`;
      computerScore++;
      scoreCount.textContent = `Your Score: ${playerScore} | Enemy Score: ${computerScore}`;
      roundResult.textContent = "You Lose, Rock beats Scissors";
    }
  }
  else {
    return "Invalid result";
  }
  checkScore();
}

function checkScore() {
  if (playerScore === 5) {
    gameResult.textContent = 'You win the game!';
    gameResult.style.color = 'rgb(115, 246, 115)';
    resetGame();
  } else if (computerScore === 5) {
    gameResult.textContent = 'You lose the game!';
    gameResult.style.color = 'rgb(218, 97, 137)';
    resetGame();
  }
}

function resetGame() {
  buttons.forEach((element) => {
    element.disabled = true;
  });

  resetButton.style.visibility = 'visible';
  
  resetButton.addEventListener('click', () => {
    window.location.reload();
  });
};