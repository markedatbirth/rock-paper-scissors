
// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

// can use a combination of JavaScript's Math.random() function and conditional statements

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
console.log(getComputerChoice)