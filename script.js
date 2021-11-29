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


function game() {

    let computerScore = 0;
    let playerScore = 0;

    // for (let i = 0; i < 5; i++) {
    //     let computerChoice = computerPlay();
    //     let playerChoice;
    
    //     while (true) {
    //         playerChoice = prompt("Please choose what to play:").toLowerCase();
    //         playerChoice = playerChoice.trim();
    
    //         if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
    //             break;
    //         }
    //     }

    //     let win = playRound(playerChoice, computerChoice);

    //     if (win === "player") {
    //         playerScore++;
    //     }
    //     if (win === "computer") {
    //         computerScore++;
    //     }
    // }

    if (computerScore > playerScore) {
        console.log("Computer Wins!");
    }
    else if (playerScore > computerScore) {
        console.log("Player Wins!");
    }
    else {
        console.log("Tie!");
    }
}

//game();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computer = computerPlay();
        playRound(button.className, computer);
    });
});