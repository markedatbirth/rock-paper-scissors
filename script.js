
function getComputerChoice() { // PC Chooses Rock, Paper, or Scissors. 
  let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
      return "rock";
    } else if (computerSelection === 1) {
      return "paper";
    } else {
      return "scissors";
    }
}

function playRound(playerSelection, computerSelection) { //Play round proceeds and round winner is selected.
    let playerScore = 0;
    let computerScore = 0;
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
          return "Draw!" + " / Player Score: " + playerScore + " / Computer Score: " + computerScore;
      } else {
          return "Please enter Rock, Paper, or Scissors.";
      }

}

function game() {
  let playerSelection = prompt("Rock, Paper, or Scissors?", "");
  const computerSelection = getComputerChoice();
  const roundWinner = playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}

 
game();
game();
game();
game();
game();






