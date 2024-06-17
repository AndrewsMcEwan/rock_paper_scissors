// Function to generate computer's choice (unchanged)
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Function to validate and get user's choice (unchanged)
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

  const resultsDiv = document.getElementById("results");
  resultsDiv.textContent = `Human: ${humanChoice} vs. Computer: ${computerChoice} - ${result}`; // Update the results div

  updateScoreboard(); // Call function to update scoreboard
  checkWinner(); // Check if a winner has emerged
}

function updateScoreboard() {
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const resultsDiv = document.getElementById("results");
    const buttonsContainer = document.getElementById("buttons-container");

    // Disable buttons and announce winner
    buttonsContainer.disabled = true;
    resultsDiv.textContent = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
  }
}

const buttonsContainer = document.getElementById("buttons-container");

// Add event listeners to each button
buttonsContainer.addEventListener("click", function(event) {
  if (event.target.tagName !== "BUTTON") return; // Only handle button clicks

  const playerSelection = event.target.id.slice(0, -4); // Extract selection from button ID
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});
