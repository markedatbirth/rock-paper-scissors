


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



function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You WIN! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You WIN! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You WIN! Scissors beats Paper!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
      return "You LOSE! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "You LOSE! Scissors beats Paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You LOSE! Rock beats Scissors!";
  } else {
      return "Please make a selection";
  }
}








/*

    // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
      } else if (randomNumber === 1) {
        return "Paper";
      } else {
        return "Scissors";
    }
}

    // Plays a single round of Rock Paper Scissors. 
    // The function takes two parameters - the playerSelection and computerSelection 
    // then returns a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    // playerSelection parameter is case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function game() {
    let playerSelection = prompt("Rock, Paper, or Scissors?", undefined) 
    let computerSelection = getComputerChoice();

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper"; 
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors"; 
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
            return "You Win! Scissors beats Paper"; 
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
            return "Draw! You both selected Rock"; 
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
            return "Draw! You both selected Paper"; 
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
            return "Draw! You both selected Scissors"; 
        }
    }
    console.log(playRound(playerSelection, computerSelection));
}


    

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
  
    if (randomNumber === 0) {
      return "Rock";
    } else if (randomNumber === 1) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      let playerSelection = prompt("Round " + round + ": Rock, Paper, or Scissors?", undefined);
      let computerSelection = getComputerChoice();
  
      function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
  
        if (
          (playerSelection === "rock" && computerSelection === "Scissors") ||
          (playerSelection === "paper" && computerSelection === "Rock") ||
          (playerSelection === "scissors" && computerSelection === "Paper")
        ) {
          playerScore++;
          return "You Win! " + playerSelection + " beats " + computerSelection;
        } else if (
          (playerSelection === "rock" && computerSelection === "Paper") ||
          (playerSelection === "paper" && computerSelection === "Scissors") ||
          (playerSelection === "scissors" && computerSelection === "Rock")
        ) {
          computerScore++;
          return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
          return "Draw! You both selected " + playerSelection;
        }
      }
  
      console.log(playRound(playerSelection, computerSelection));
    }
  
    if (playerScore > computerScore) {
      console.log("You Win the Game!");
    } else if (playerScore < computerScore) {
      console.log("You Lose the Game!");
    } else {
      console.log("It's a Draw!");
    }
  }
  
  game();
  
  */