// Variables
const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Helper functions
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function capitalise(string) {
  if (!string) return null;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Functions
function getComputerChoice() {
  // generate a random number for index
  const index = getRandomInt(3);

  // get rock paper or scissors based on random index
  const computerChoice = choices[index];

  console.log(computerChoice);

  return computerChoice;
}

function getHumanChoice() {
  // get user input
  let humanChoice = window.prompt(
    "Pick your fighter! Rock, Paper or Scissors?",
  );

  console.log(humanChoice);

  return humanChoice;
}

// Main Code
function playRound(humanChoice, computerChoice) {
  //show score helper
  let showScore = (humanScore, computerScore) => {
    console.log(`Current scores:
        You: ${humanScore}
        Computer: ${computerScore}`);
  };

  // winning conditions
  if (
    (String(humanChoice).toLowerCase() === "rock" &&
      computerChoice === "scissors") ||
    (String(humanChoice).toLowerCase() === "paper" &&
      computerChoice === "rock") ||
    (String(humanChoice).toLowerCase() === "scissors" &&
      computerChoice === "paper")
  ) {
    console.log(`You win! ${capitalise(humanChoice)} beats ${computerChoice}!`);
    humanScore++;
    showScore(humanScore, computerScore);
    // tie condition
  } else if (String(humanChoice).toLowerCase() === computerChoice) {
    console.log(`It's a tie! You both chose ${computerChoice}!`);
    showScore(humanScore, computerScore);
    // losing condition
  } else {
    console.log(
      `You lose! ${capitalise(computerChoice)} beats ${String(humanChoice).toLowerCase()}`,
    );
    computerScore++;
    showScore(humanScore, computerScore);
  }
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound(humanSelection, computerSelection);
//   }

//   console.log("Thanks for playing!");
// }

// playGame();
