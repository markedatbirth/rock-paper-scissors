
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