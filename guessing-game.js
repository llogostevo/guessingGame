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
    let min;
    let max;


    function handleResponseTwo(secondAnswer) {
      console.log("Min: "+secondAnswer);
      min = secondAnswer;
      console.log(`I'm thinking of a number between ${min} and ${max}...`)
      secretNumber = randomInRange(Number(min), Number(max));
      rl.close(); 
      askGuess();
    }

    function handleResponseOne(firstAnswer) {
      console.log("Max: "+firstAnswer);
      max = firstAnswer;
      rl.question("Enter Min Number: ", handleResponseTwo);
    }
    

    rl.question("Enter Max Number: ", handleResponseOne);
    
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

