function computerPlay() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function playerPlay() {
  var input = prompt("Please choose rock, paper, or scissors").toLowerCase();
  if (input !== "rock" && input !== "paper" && input !== "scissors") {
    console.log("This isn't a valid choice.");
    playerPlay();
  }
  return input;
}

function playRound(playerSelection, computerSelection) {}
