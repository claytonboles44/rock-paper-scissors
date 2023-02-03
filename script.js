function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound() {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase()
    let computerSelection = getComputerChoice()
    
    console.log(computerSelection);

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock"))
    return "you win"
    
    else if (playerSelection == computerSelection)
    return "you tie"

    else
    return "you lose";

    
    

}

console.log(playRound())
// 