// Variables
const choices = ["rock", "paper", "scissors"];

// Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  // generate a random number for index
  const index = getRandomInt(3);

  // get rock paper or scissors based on random index
  const computerChoice = choices[index];

  return computerChoice;
}

function getHumanChoice() {
  // get user input
  const humanChoice = window.prompt("Pick your fighter! Rock, Paper or Scissors?", "");

  return humanChoice;
}

console.log(getHumanChoice());

// Main Code
