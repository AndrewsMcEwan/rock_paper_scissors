// Function to generate computer's choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Call the function and log the result to the console
const computerChoice = getComputerChoice();
console.log("Computer's choice:", computerChoice);

// Function to validate and get user's choice
function getHumanChoice() {
  const options = ["rock", "paper", "scissors"];
  let choice;

  // Prompt user for input and convert to lowercase
  while (!(choice = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase())) {
    console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
  }

  // Validate the user input against the options array
  while (!options.includes(choice)) {
    choice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors: ").toLowerCase();
  }

  return choice;
}

const humanChoice = getHumanChoice();
console.log("Human's choice:", humanChoice);

let humanScore = 0;
let computerScore = 0;


// Function to play a single round of Rock-Paper-Scissors
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase(); // Make human choice case-insensitive

  const options = ["rock", "paper", "scissors"];
  let result = "";

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    humanScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  console.log(result);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Function to manage the entire game (5 rounds)
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Function to generate computer's choice 
  function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
  }

  // Function to validate and get user's choice
  function getHumanChoice() {
    const options = ["rock", "paper", "scissors"];
    let choice;
    while (!(choice = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase())) {
      console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
    }
    while (!options.includes(choice)) {
      choice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors: ").toLowerCase();
    }
    return choice;
  }

  // Function to play a single round of Rock-Paper-Scissors
  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const options = ["rock", "paper", "scissors"];
    let result = "";

    if (humanChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win!";
      humanScore++;
    } else {
      result = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }

    console.log(result);
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}`);
    playRound(); // Call playRound for each round
  }

  // Display final scores
  console.log("\nFinal Results:");
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore === computerScore) {
    console.log("It's a tie!");
  } else {
    console.log("Better luck next time!");
  }
}

// Start the game
playGame();