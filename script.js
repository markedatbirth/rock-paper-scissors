
let playerScore = 0;
let computerScore = 0;


// PC Chooses Rock, Paper, or Scissors. 
function getComputerChoice() { 
  let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
      return "rock";
    } else if (computerSelection === 1) {
      return "paper";
    } else {
      return "scissors";
    }
}

//Single play round proceeds and round winner is selected.
function playRound(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
      if (playerSelection === "rock" && computerSelection === "scissors") {
          playerScore++;
          return "You WIN! Rock beats Scissors!" + " / Player Score: " + playerScore + " / Computer Score: " + computerScore;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
          playerScore++;
          return "You WIN! Paper beats Rock!" + " / Player Score: " + playerScore + " / Computer Score: " + computerScore;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
          playerScore++;
          return "You WIN! Scissors beats Paper!" + " / Player Score: " + playerScore + " / Computer Score: " + computerScore;
      } else if (playerSelection === "rock" && computerSelection === "paper") {
          computerScore++;
          return "You LOSE! Paper beats Rock!" + " / Player Score: " + playerScore + " / Computer Score: " + computerScore;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
          computerScore++;
          return "You LOSE! Scissors beats Paper!" + " / Player Score: " + playerScore + " / Computer Score: " + computerScore;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
          computerScore++;
          return "You LOSE! Rock beats Scissors!" + " / Player Score: " + playerScore + " / Computer Score: " + computerScore;
      } else if (playerSelection === computerSelection) {
          return "DRAW!" + " / Player Score: " + playerScore + " / Computer Score: " + computerScore;
      } else {
          return "Please enter \"Rock\", \"Paper\", or \"Scissors.\"";
      }
}

function game() {
  for (let rounds = 0; rounds < 5; rounds++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?", "");
    const computerSelection = getComputerChoice();
    const roundWinner = playRound(playerSelection, computerSelection);
    console.log(roundWinner);
  }

  if (computerScore > playerScore) {
    return "You LOSE! Player Score: " + playerScore + " / Computer Score: " + computerScore;
  } else if (playerScore > computerScore) {
    return "You WIN! Player Score: " + playerScore + " / Computer Score: " + computerScore;
  } else {
    return "DRAW! Player Score: " + playerScore + " / Computer Score: " + computerScore;
  }
}

console.log(game());