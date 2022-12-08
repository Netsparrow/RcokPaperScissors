function getComputerChoice(){
    random = Math.floor(Math.random() * (4 - 1)) + 1;
    switch(random){
        case 1:
            return "rock";
        break
        case 2:
            return "paper";
        break
        case 3:
            return "scissors";
    }

};

function playRound(){
    switch(playerSelection, computerSelection){
        case "rock" && "paper":
            return "The player chose " + playerSelection + " and the computer chose " + computerSelection + ". Therfore, the COMPUTER WINS!" ;
        break 
        case "rock" && "scissors":
            return "The player chose " + playerSelection + " and the computer chose " + computerSelection + ". Therfore, the PLAYER WINS! "
        break
        case "rock" && "rock":
            return "Both the player and computer chose rock, there THIS IS A DRAW!"
        break
        case "paper" && "scissors":
            return "The player chose " + playerSelection + " and the computer chose " + computerSelection + ". Therfore, the COMPUTER WINS!"
        break
        case "paper" && "rock":
            return "The player chose " + playerSelection + " and the computer chose " + computerSelection + ". Therfore, the PLAYER WINS!"
        break
        case "paper" && "paper":
            return "Both the player and computer chose paper, there THIS IS A DRAW!"
        break
        case "scissors" && "rock":
            return "The player chose " + playerSelection + " and the computer chose " + computerSelection + ". Therfore, the COMPUTER WINS!"
        break
        case "scissors" && "papers":
            return "The player chose " + playerSelection + " and the computer chose " + computerSelection + ". Therfore, the PLAYER WINS!"
        break
        case "scissors" && "scissors":
            return "Both the player and computer chose paper, there THIS IS A DRAW!"
    };
         




}
 
let playerSelection = "paper";
let computerSelection = getComputerChoice();


console.log("player: "+ playerSelection);
console.log("computer: "+ computerSelection);

console.log(playRound());



