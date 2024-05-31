alert("Prepare-se para 5 rounds de Rock Paper Scissor");

// Escolhas das Inputs:

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

function getHumanChoice(){
    let result = prompt("Escolhe entre pedra, papel ou tesoura");
    return result;
}

function getComputerChoice(max){
    let result,number;
    number = Math.floor(Math.random() * max);
    (number == 0) ? result = "pedra" : (number == 1) ? result = "papel" : result = "tesoura";
    return result;
}

function playGame(){

    // Variáveis de Scores:

    let humanScore = 0; computerScore = 0;

    // Função de jogar o round:

    function playRound(humanSelection,computerSelection){
        if ((humanSelection == "pedra") && (computerSelection == "pedra")){
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Empate!");
        } else if ((humanSelection == "pedra") && (computerSelection == "papel")){
            computerScore++;
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Computador venceu este round!");
        } else if ((humanSelection == "pedra") && (computerSelection == "tesoura")){
            humanScore++;
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Você venceu este round!");
        } else if ((humanSelection == "papel") && (computerSelection == "pedra")){
            humanScore++;
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Você venceu este round!");
        } else if ((humanSelection == "papel") && (computerSelection == "papel")){
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Empate!");
        } else if ((humanSelection == "papel") && (computerSelection == "tesoura")){
            computerScore++;
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Computador venceu este round!");
        } else if ((humanSelection == "tesoura") && (computerSelection == "pedra")){
            computerScore++;
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Computador venceu este round!");
        } else if ((humanSelection == "tesoura") && (computerSelection == "papel")){
            computerScore++;
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Você venceu este round!");
        } else {
            console.log("Humano: " + humanSelection + ", Computador: " + computerSelection + ".")
            console.log("Empate!");
        }
    }

    // Loop dos 5 rounds:
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice(3))
        console.log("Humano: " + humanScore + " " + "Computador: " + computerScore)
    }
    (humanScore > computerScore) ? console.log("Você é o vencedor!") : (humanScore < computerScore) ? console.log("O computador é o vencedor!") : console.log("O jogo terminou em empate");
}

const openPage = playGame();