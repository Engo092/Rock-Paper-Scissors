let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

// Starts variables for displaying scores
const playerDiv = document.querySelector(".playerChoice");
const computerDiv = document.querySelector(".computerChoice");
playerDiv.textContent = `Player Score: ${playerScore}`;
computerDiv.textContent = `Computer Score: ${computerScore}`;

// Makes restart button initially hidden
let restart = document.querySelector(".restart");
restart.setAttribute('style', "visibility: hidden;")

const restartEvent = document.querySelector(".restartButton");
restartEvent.addEventListener('click', () => {
    restartGame();
});


const buttons = document.querySelectorAll('#button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = computerPlay();
        let winner = playRound(button.className, computerChoice);

        computeRound(winner);
    });
});


function computerPlay() {
    let choice = Math.random();

    if (choice <= 0.33) {
        return "rock";
    }

    if (choice <= 0.66) {
        return "paper";
    }

    if (choice <= 0.99) {
        return "scissors";
    }
}


function playRound(playerChoice, computerChoice) {
    const div = document.querySelector('.result');

    if (playerChoice === computerChoice) {
        div.textContent = "It is a tie!";
        return "tie";
    }

    if (playerChoice === "rock" && computerChoice === "scissors") {
        div.textContent = "You Win! Rock beats Scissors";
        return "playerChoice";
    }

    if (playerChoice === "scissors" && computerChoice === "rock") {
        div.textContent = "You Lose! Rock beats Scissors";
        return "computerChoice";
    }

    if (playerChoice === "rock" && computerChoice === "paper") {
        div.textContent = "You Lose! Paper beats Rock";
        return "computerChoice";
    }

    if (playerChoice === "paper" && computerChoice === "rock") {
        div.textContent = "You Win! Paper beats Rock";
        return "playerChoice";
    }

    if (playerChoice === "paper" && computerChoice === "scissors") {
        div.textContent = "You Lose! Scissors beats Paper";
        return "computerChoice";
    }

    if (playerChoice === "scissors" && computerChoice === "paper") {
        div.textContent = "You Win! Scissors beats Paper";
        return "playerChoice";
    }
}


function computeRound(winner) {
    gamesPlayed++;
    if (winner == "playerChoice") {
        playerScore++;
        playerDiv.textContent = `Player Score: ${playerScore}`;
    }

    if (winner == "computerChoice") {
        computerScore++;
        computerDiv.textContent = `Computer Score: ${computerScore}`;
    }

    if (gamesPlayed == 5) {
        buttons.forEach((button) => {

            // Visual clues indicating buttons aren't working
            button.disabled = true;
            button.removeAttribute("id");
            button.setAttribute('style', "cursor: not-allowed;");
        });
        const div = document.querySelector('.result');
        div.classList.add("winner");

        if (playerScore > computerScore) {
            div.textContent = "Player Wins!";
        }
        else if (computerScore > playerScore) {
            div.textContent = "Computer Wins!";
        }
        else {
            div.textContent = "Tie!";
        }

        // Turns restart button visible
        restart.setAttribute('style', "visibility: visible;")
    }
}


// Restarts page to the same state as when it was initially loaded
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    gamesPlayed = 0;

    restart.setAttribute('style', "visibility: hidden;")

    let div = document.querySelector(".result");
    div.classList.remove("winner");
    div.textContent = "⠀";

    buttons.forEach((button) => {
        button.disabled = false;
        button.setAttribute("id", "button");
        button.style.removeProperty("cursor");
    });
    
    playerDiv.textContent = `Player Score ${playerScore}`;
    computerDiv.textContent = `Computer Score ${computerScore}`;
}