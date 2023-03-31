// var userChoice = prompt("R, P, or S");
​
/* 
play Rock, Paper Scissors
user enters R, P, or S
computer also enters R, P, or S
"Play again?" prompt
see total wins, losses, and ties
*/
​
// var rockPaperScissors = [ "R", "P", "S" ];
var userHand = "R";
var computerHand = "R";
var stats = 
{
    wins: 0,
    losses: 0,
    ties: 0
};
​
// buttons for user to choose - Rock, Paper, Scissors
const buttonRock = document.createElement('button');
buttonRock.innerText = 'Rock';
const buttonPaper = document.createElement('button');
buttonPaper.innerText = 'Paper';
const buttonScissors = document.createElement('button');
buttonScissors.innerText = 'Scissors';
​
// computer randomly generates R P S
function computerHandPicker() {
    var handPicker = Math.floor(Math.random() * 3) + 1;
​
    if (handPicker === 1) {
        computerHand = "Rock";
    }
    else if (handPicker === 2) {
        computerHand = "Paper";
    }
    else {
        computerHand = "Scissors";
    }
}
​
// alert that shows what you & the computer chose
function handReveal() {
    if (userHand === "R") {
        alert(`You chose: Rock. \nThe AI chose: ${computerHand}.`)
    }
    else if (userHand === "P") {
        alert(`You chose: Paper. \nThe AI chose: ${computerHand}.`);
    }
    else if (userHand === "S") {
        alert(`You chose: Scissors. \nThe AI chose: ${computerHand}.`);
    }
}

var string2 = "Dog"

var string = "Hello"
var lowercase = string.toLowerCase()
var lowercase2 = string2.toLowerCase()

var alphabet = ['a', 'b', 'c']
var uppercase = []

for ( var i = 0; i < alphabet.length; i++) {
    var upper = alphabet[i].toUpperCase()
    uppercase.push(upper)
}
 
var ​array = ['person1', 'person2']
array.push('person3')
// prompts for choosing Rock, Paper, Scissors
// rock
buttonRock.addEventListener('click', () => {
    userHand = "R";
    computerHandPicker();
    handReveal();
    scoreAndRetry();
})
document.body.appendChild(buttonRock);
​
// paper
buttonPaper.addEventListener('click', () => {
    userHand = "P";
    computerHandPicker();
    handReveal();
    scoreAndRetry();
})
document.body.appendChild(buttonPaper);
​
// scissors
buttonScissors.addEventListener('click', () => {
    userHand = "S";
    computerHandPicker();
    handReveal();
    scoreAndRetry();
})
document.body.appendChild(buttonScissors);
​
​
// if user wins, this returns 'true'
function winCondition() {
    if (userHand === "R" && computerHand === "Scissors") {
        return true;
    }
    else if (userHand === "P" && computerHand === "Rock") {
        return true;
    }
    else if (userHand === "S" && computerHand === "Paper") {
        return true;
    }
    return false;
}
​
// if tie, this returns 'true'
function tie() {
    if (userHand === "S" && computerHand === "Scissors") {
        return true;
    }
    else if (userHand === "R" && computerHand === "Rock") {
        return true;
    }
    else if (userHand === "P" && computerHand === "Paper") {
        return true;
    }
    return false;
}
​
// checks all win conditions & adds to score accordingly
function checkWin() {
    if (tie()) {
        stats.ties++;
        confirm(`You tied!`);
    }
    else if (winCondition()) {
        stats.wins++;
        confirm(`You win!`);
    }
    else {
        stats.losses++;
        confirm(`You lose!`);
    }
}
​
// user plays again after retrying
/* function userPrompt() {
    userHand = prompt("Rock, Paper, Scissors! Type 'R', 'P', or 'S' to choose.");
​
    while (userHand != "R" && userHand != "P" && userHand != "S") {
        userHand = prompt(`Please type 'R', 'P', or 'S' to choose.`);
    }
​
} */
​
// compiles score & asks user if they want to retry
function scoreAndRetry() {
    checkWin();
​
    alert(`Score:\n
    Wins: ${stats.wins}\n
    Losses: ${stats.losses}\n
    Ties: ${stats.ties}`);
​
    /* if (confirm("Would you like to play again?") == true) {
        userPrompt();
    }
​
    computerHandPicker();
    handReveal(); */
}
​
​
// confirm();
// alert("Type 'R', 'P', or 'S' to choose!");
​
// userPrompt();