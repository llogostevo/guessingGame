/* 
ISSUES WITH IT hanging when 

*/

// ##### USER INPUT INTERFACE SETUP ##### //

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// ##### GLOBAL VARIABLES ##### //
let secretNumber;


// ##### GLOBAL FUNCTIONS ##### //

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max-min)+min);
  }

  function checkGuess(number){
    if (secretNumber===Number(number)){
        console.log("Correct!")
        return true;
    } else if (secretNumber>number){
        console.log("Too Low!")
        return false;
    } else {
        console.log("Too high!")
        return false;
    }
}

function askGuess(){
    rl.question('Please Enter a number ', (answer) => {
        if (checkGuess(answer)==true){
            console.log("You Win")
            rl.close();
        } else {
            // recursive call, to re-ask guess if teh answer didnt return a true value
            askGuess()
        }
      });
}


function askRange(){

    rl.question('Enter Max: ', max => {
      console.log(`Max: ${max}`);
      
        rl.question('Enter Min: ', min => {
        console.log(`Min: ${min}`);
        console.log(`I'm thinking of a number between ${min} and ${max}...`);
        secretNumber = randomInRange(min, max);
        askGuess();
      });
    });
    
}

// ##### MAIN PROGRAM ##### //

askRange();

