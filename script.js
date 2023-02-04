let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
  let playerSelection = prompt("Rock, Paper, or Scissors?");
  if (playerSelection == null) alert("Invalid entry, please refresh.");
  else {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();

    if (
      playerSelection != "rock" &&
      playerSelection != "paper" &&
      playerSelection != "scissors"
    )
      alert("Invalid entry, please refresh.");
    else {
      console.log(computerSelection);
      playLogic(playerSelection, computerSelection);
    }
  }
}

function playLogic(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    console.log("1 point to Player.");
  } else if (playerSelection == computerSelection) {
    console.log("Tie, no point awarded.");
  } else {
    computerScore += 1;
    console.log("1 point to Computer.");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(playerScore, computerScore);

  if (playerScore > computerScore) console.log("You Win!");
  else if (computerScore > playerScore) console.log("You Lose :(");
  else console.log("You Tie...");
}

game();
