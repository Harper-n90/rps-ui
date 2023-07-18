let buttons = document.querySelectorAll("button");
let results = document.getElementById("results");
let playerScoreDisplay = document.querySelector(".playerScore");
let computerScoreDisplay = document.querySelector(".computerScore");
let playerScore = 0;
let computerScore = 0;
results.textContent = "Please make a choice.";
playerScoreDisplay.textContent = `Player score is: ${playerScore}`;
computerScoreDisplay.textContent = `Computer score is: ${computerScore}`;
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
}
buttons.forEach((button) => {
  button.addEventListener("mouseenter", (e) => {
    button.style.border = "2px dotted black";
  });
  button.addEventListener("mouseleave", () => {
    button.style.border = "2px solid black";
  });

  button.addEventListener("click", () => {
    let playerChoice = button.id;
    const computerChoice = getComputerChoice();

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        results.textContent = "You win.";
        ++playerScore;
        playerScoreDisplay.textContent = `Player score is: ${playerScore}`;
      } else if (computerChoice === "rock") {
        results.textContent = "Draw!";
      } else {
        results.textContent = "You Lose";
        ++computerScore;
        computerScoreDisplay.textContent = `Computer score is: ${computerScore}`;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        results.textContent = "You win!";
        ++playerScore;
        playerScoreDisplay.textContent = `Player score is: ${playerScore}`;
      } else if (computerChoice === "paper") {
        results.textContent = "Draw!";
      } else {
        results.textContent = "You lose!";
        ++computerScore;
        computerScoreDisplay.textContent = `Computer score is: ${computerScore}`;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        results.textContent = "You win!";
        ++playerScore;
        playerScoreDisplay.textContent = `Player score is: ${playerScore}`;
      } else if (computerChoice === "scissors") {
        results.textContent = "Draw!";
      } else {
        results.textContent = "You lose!";
        ++computerScore;
        computerScoreDisplay.textContent = `Computer score is: ${computerScore}`;
      }
    }
  });
});
