//if = if statement 
//eo = end of

let compPick = function(){
    let rando = Math.floor(Math.random() * 3);
     return (rando === 0) ? 'rock': 
         (rando === 1) ? 'paper': 'scissors'
}

game = (userinput) => {

  let comp = compPick()
  console.log(comp)

  if (userinput === 'rock'){ //if#1
    if (comp === 'rock'){
      return `IT'S A TIE! You both chose rock`;
    }else if (comp === 'paper'){ 
      return 'COMPUTER WINS! Computer chose paper. You chose rock.'
  } else{
    return 'YOU WIN! Computer chose scissors. You chose rock.'};//eo if#1
  }else if (userinput === 'paper'){ //if#2
    if (comp === 'rock'){
      return 'YOU WIN! Computer chose rock. You chose paper.'
    }else if (compChoice === 'paper'){
      return `IT's a TIE! You both chose paper.`
    }else {return 'COMPUTER WINS! Computer chose scissors. You chose paper.'};//eo if#2
  }else{
    if (userinput === 'scissors'){ //if#3
      if (comp === 'rock'){
        return 'COMPUTER WINS! Computer chose rock. You chose scissors.'
      }else if (comp === 'paper'){
        return 'YOU WIN! Computer chose paper. You chose scissors'
      }else{ return `IT's A TIE! You both chose scissors`} //EO IF#3
    }
  }
}


console.log(game('rock'))





// 
// ### UPDATED - I NOW KNOW THAT THIS BOTTOM CODE WOULDNT EVEN WORK IF TERNARY OPS WORKED. I NEED TO CALL THE FUNCTION FIRST BY ASSIGNING IT TO A VARIABLE. THEN SEE IF THE TERNARY OPS DO WORK?
// let compChoice = () => {
//   let rando = Math.floor(Math.random() * 1);
//    return (rando === 0) ? 'rock': 
//        (rando === 1) ? 'paper': 'scissors'
//  }  
//  console.log(compChoice())
 
//  Game = (userInput) =>{
//    return /*1I*/(userInput === 'rock') ? /*1.1I*/(compChoice === 'rock') ? `It's a tie, you both chose rock` /*1.2EI*/: 
//                       (compChoice === 'paper') ? 'Computer wins! Computer chose Rock whcihj beats paper' : 
//                       (compChoice === 'scissors') ? 'YOU WIN! computer chose scissors and Rock beats scissors!' /*1E*/:'test'
//    //(userInput === 'paper') ? :
//    //(compChoice === 'rock') ? 
 
//    // return /*1I*/(userInput === 'rock') ? /*1.1I*/(compChoice === 'rock') ? `It's a tie, you both chose rock` /*1.2EI*/: (compChoice === 'paper') ? 'Computer wins! Computer chose Rock whcihj beats paper' : (compChoice === 'scissors') ? 'YOU WIN! computer chose scissors and Rock beats scissors!' /*1E*/: 
//    // 'test'
//    // //(userInput === 'paper') ? :
//    // //(compChoice === 'rock') ? 
//  :'test'
//  }
 
//  Game('rock')