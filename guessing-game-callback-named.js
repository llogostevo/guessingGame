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
            // close readline as all user input has finsihed
            rl.close();
        } else {
            // recursive call, to re-ask guess if teh answer didnt return a true value
            askGuess()
        }
      });
}


function askRange(){
    // function scope variables to allow usage across both chained callbacks
    let minRange;
    let maxRange;
    
    // min number callback 2
    const getMin = (min) => {
        console.log(`Min: ${min}`);
        minRange = min; 
        console.log(`I'm thinking of a number between ${minRange} and ${maxRange}...`);
        secretNumber = randomInRange(minRange, maxRange);
        askGuess();
    };
    
    // max number callback 1
    const getMax = (max) => {
        console.log(`Max: ${max}`);
        maxRange = max; 
        rl.question('Enter Min: ', getMin);
      };

    // take user entry for max range
    rl.question('Enter Max: ', getMax);
}

// ##### MAIN PROGRAM ##### //

askRange();

