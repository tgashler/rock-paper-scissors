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
getComputerChoice();

function getHumanChoice() {
    humanChoice = prompt("Pick one");
    if (humanChoice === "rock") {
        return("rock");
    }
    else if (humanChoice === "paper") {
        return("paper");
    }
    else if (humanChoice === "scissors") {
        return("scissors");
    }
}

console.log(getHumanChoice());