let humanScore = 0;
let computerScore = 0;
let roundNum = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return ("rock");
    }
    else if (randomNumber === 1) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function getHumanChoice() {
    humanSelectionHigh = prompt("Pick one");
    humanSelection = humanSelectionHigh.toLowerCase();

    if (humanSelection === "rock") {
        return ("rock");
    }
    else if (humanSelection === "paper") {
        return ("paper");
    }
    else if (humanSelection === "scissors") {
        return ("scissors");
    }
}

function playRound(humanChoice, computerChoice) {
    let humanWinRound = false;
    roundNum++;

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanWinRound = true;
        }
    }
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanWinRound = true;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanWinRound = true;
        }
    }


    if (humanChoice === computerChoice) {
        alert(`Uh oh, it was a tie of ${humanChoice} to ${computerChoice}`)
    }
    else if (humanWinRound === true) {
        humanScore++;
        alert(`You WIN! Your ${humanChoice} beat ${computerChoice}`)
    }
    else {
        computerScore++;
        alert(`You LOSE Your ${humanChoice} lost to ${computerChoice}`)
    }
    showScore();
    return;
}

function showScore() {
    alert("You have a score of " + humanScore);
    alert("Your opp has a score of " + computerScore);
    alert(`You get to play ${5 - roundNum} more rounds`)
}

function playGame() {
    let keepGoing = true;
    while (keepGoing === true) {
        playRound(getHumanChoice(), getComputerChoice());

        if (roundNum === 5) {
            keepGoing = false;
        }
    }

}

function endGame() {
    if (computerScore > humanScore) {
        alert("YOU SUCK YOU LOSE");
    }
    
    else if (computerScore === humanScore) {
        alert("BORING its a tie")
    }
    else {
        alert("YOU RULE!! YOU WIN");
    }
}

playGame();
endGame();