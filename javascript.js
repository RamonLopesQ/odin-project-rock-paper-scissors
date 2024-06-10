let playerScore = 0; let computerScore = 0;
const buttonsArea = document.querySelector("#buttons-area");
const buttons = document.querySelectorAll(".button");
const playerSelection = document.querySelector("#player-selection");
const computerSelection = document.querySelector("#computer-selection");
const fightArea = document.querySelector("#fight-area");
const theChosen = document.querySelector("#the-chosen");
const otherChosen = document.querySelector("#the-cop");
const totalScore = document.querySelector("#total-score");
const roundResult = document.querySelector("#round-result");
const finalResult = document.querySelector("#final-result");
const againButton = document.querySelector("#play-again");

againButton.addEventListener("click", refreshPage);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice(3);
        theChosen.textContent = `Player selecionou: ${playerSelection}`;
        otherChosen.textContent = `Computer selecionou: ${computerSelection}`;
        playRound(playerSelection,computerSelection);
        winPrize();
    })
})

function getComputerChoice(max){
    let number,result;
    number = Math.floor(Math.random() * max);
    (number == 0) ? result = "Pedra" : (number == 1) ? result = "Papel" : result = "Tesoura";
    return result;
}

function refreshPage() {
    location.reload();
}

playRound = (playerSelection,computerSelection) => {
    if (playerSelection === "Pedra" && computerSelection === "Tesoura" ||
        playerSelection === "Papel" && computerSelection === "Pedra" ||
        playerSelection === "Tesoura" && computerSelection === "Papel"){
            playerScore++;
            totalScore.textContent = `Humano: ${playerScore} Computador: ${computerScore}`;
            roundResult.textContent = `${playerSelection} ganha de ${computerSelection}`;
        }
    else if (playerSelection === "Pedra" && computerSelection === "Papel" ||
        playerSelection === "Papel" && computerSelection === "Tesoura" ||
        playerSelection === "Tesoura" && computerSelection === "Pedra"){
            computerScore++;
            totalScore.textContent = `Humano: ${playerScore} Computador: ${computerScore}`;
            roundResult.textContent = `${computerSelection} ganha de ${playerSelection}`;
        }
    else {
            roundResult.textContent = `Empate!`;
    }
}

winPrize = () => {
    if (playerScore == 5) {
        finalResult.textContent = "O jogador venceu!";
        buttonsArea.setAttribute("style", "display:none");
        fightArea.setAttribute("style", "display:none");
        roundResult.setAttribute("style", "display:none");
    }  else if (computerScore == 5) {
        finalResult.textContent = "O computador venceu!";
        buttonsArea.setAttribute("style", "display:none");
        fightArea.setAttribute("style", "display:none");
        roundResult.setAttribute("style", "display:none");
    }
}
