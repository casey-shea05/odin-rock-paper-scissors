// Variables
const choices = ["rock", "paper", "scissors"];
let computerChoice = "";

// Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  // generate a random number for index
  const index = getRandomInt(3);

  // get rock paper or scissors based on random index
  computerChoice = choices[index];
  return computerChoice;
}

// Main Code
