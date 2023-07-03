let playerChoice = choice => {
    choice = choice.toLowerCase();
    if (choice =='rock' || choice =='paper' || choice =='scissors'){
        return choice
    }else{
        console.log('Please choose either rock, paper, or scissors. Or check your spelling')
    }
}


let compChoice = () =>{
    const random = Math.floor(Math.random() * (4 - 1)) + 1; 

    switch (random){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
} 


let computer = compChoice();
let player = playerChoice('scissors');




let game = () =>{ 
    if (computer === 'rock'){
        if (player === 'rock'){
            console.log('Both the computer and yourself chose rock. therefore it is a draw.')
        }else if (player === 'paper'){
            console.log('The computer chose rock and you chose paper. Therefore you win!')
        }else if (player === 'scissors'){
            console.log('The computer chose rock and you chose scissors. Therefore the computer wins!')
        }
    }else if ( computer === 'paper'){
        if (player === 'rock'){
            console.log('The computer chose paper and you chose rock, therefore the computer wins!')
        }else if (player === 'paper'){
            console.log('Both the commputer and youself chose paper, therefore it is a draw.')
        }else if (player === 'scissors'){
            console.log('The computer chose paper and you chose scissors, therefore you win!')
        }

    }else if (computer === 'scissors'){
        if (player === 'rock'){
            console.log('The computer chose scissors and you chose rock, therefore you win!')
        }else if (player === 'paper'){
            console.log('The computer chose scissors and you chose paper, therefore the computer wins.')
        }else if (player === 'scissors'){
            console.log(' Both the commputer and youself chose scissors, therefore it is a draw.')
        }
    }
}

console.log(`Computer Choice: ${computer}`);
console.log(`Player Choice: ${player}`);


game();
