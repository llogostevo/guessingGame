/* 
Uses prompt modulle, requires installation of 
 Run **npm install prompt-sync** in the terminal
*/

// ##### USER INPUT INTERFACE SETUP ##### //

// this is another way that behaves a bit more normally than the readline module. 
const prompt = require('prompt-sync')();

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
    const guess = prompt('Guess a number?: ');
        if (checkGuess(guess)==true){
            console.log("You Win")
        } else {
            // recursive call, to re-ask guess if teh answer didnt return a true value
            askGuess()
        }
}

function askRange(){
    let min = prompt('Enter Minimum Number: ');
    let max = prompt('Enter Maximum Number: ');
    secretNumber = randomInRange(Number(min), Number(max));
    askGuess()
}

// ##### MAIN PROGRAM ##### //


//askGuess()
askRange();



//    // loop and ask question again until the answer is correct
// while (!checkGuess(answer)) {
//     rl.question('Please Enter a number ', (answer) => {
//         console.log(`Your Guess is: ${answer}`);
//         rl.close();
//     });      
// }

