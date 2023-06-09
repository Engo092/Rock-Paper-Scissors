let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

// Starts variables for displaying scores
const playerDiv = document.querySelector(".player");
const computerDiv = document.querySelector(".computer");
playerDiv.textContent = `Player Score: ${playerScore}`;
computerDiv.textContent = `Computer Score: ${computerScore}`;

// Makes restart button initially hidden
let restart = document.querySelector(".restart");
restart.setAttribute('style', "visibility: hidden;")


const buttons = document.querySelectorAll('#button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computer = computerPlay();
        let winner = playRound(button.className, computer);

        computeRound(winner);
    });
});

const restartEvent = document.querySelector(".restartButton");
restartEvent.addEventListener('click', () => {
    restartGame();
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


function playRound(player, computer) {
    const div = document.querySelector('.result');

    if (player === computer) {
        div.textContent = "It is a tie!";
        return "tie";
    }

    if (player === "rock" && computer === "scissors") {
        div.textContent = "You Win! Rock beats Scissors";
        return "player";
    }

    if (player === "scissors" && computer === "rock") {
        div.textContent = "You Lose! Rock beats Scissors";
        return "computer";
    }

    if (player === "rock" && computer === "paper") {
        div.textContent = "You Lose! Paper beats Rock";
        return "computer";
    }

    if (player === "paper" && computer === "rock") {
        div.textContent = "You Win! Paper beats Rock";
        return "player";
    }

    if (player === "paper" && computer === "scissors") {
        div.textContent = "You Lose! Scissors beats Paper";
        return "computer";
    }

    if (player === "scissors" && computer === "paper") {
        div.textContent = "You Win! Scissors beats Paper";
        return "player";
    }
}


function computeRound(winner) {
    gamesPlayed++;
    if (winner == "player") {
        playerScore++;
        playerDiv.textContent = `Player Score: ${playerScore}`;
    }

    if (winner == "computer") {
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