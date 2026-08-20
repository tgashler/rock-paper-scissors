let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return("rock");
    }
    else if (randomNumber === 1) {
        return("paper");
    }
    else {
        return("scissors");
    }
}

function getHumanChoice() {
    humanSelectionHigh = prompt("Pick one");
    humanSelection = humanSelectionHigh.toLowerCase();

    if (humanSelection === "rock") {
        return("rock");
    }
    else if (humanSelection === "paper") {
        return("paper");
    }
    else if (humanSelection === "scissors") {
        return("scissors");
    }
}

function playRound(humanChoice, computerChoice) {
    let humanWinRound = false;
    
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore ++;
        alert("You WIN! Rock beats scissors");
        return;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore ++;
        alert("You WIN! Paper beats rock");
        return;
    }
     else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore ++;
        alert("You WIN! Scissors beats paper");
        return;
    }

    else if (humanChoice === computerChoice) {
        alert("Draw")
        return;
    }

    else {
        computerScore ++;
        console.log("HAHA YOU LOSE")
        return;
    }
}

function showScore() {
alert("You have a score of " + humanScore);
alert("Your opp has a score of " + computerScore);
}

function playGame() {
    let keepGoing = true;
    while (keepGoing === true) {
        playRound(getHumanChoice(), getComputerChoice());
        showScore();
        
        if (computerScore + humanScore === 5) {
            keepGoing = false;
        }
    }

}

function endGame() {
    if (computerScore > humanScore) {
        console.log("YOU SUCK YOU LOSE");
    }
    else {
        console.log("YOU RULE!! YOU WIN");
    }
}

playGame();
endGame();