'use strict';

let checkButton = document.querySelector('.check');
let againButton = document.querySelector('.again');
let guessNo;
let secretNo;
let highScore = 0;
let score = 20;
let number;
let message;
let highScore1;

// document.querySelector('.message').textContent = message;
console.log(message)
document.querySelector('.score').textContent = score;
// document.querySelector('.highscore').textContent = highScore;

secretNo = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNo;

console.log(`guess no1 is ${guessNo}`);

function g2() {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNo = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '';
    document.querySelector('.msg').textContent = "start guessing again..."

}



//click karso to atlu j thase. page refresh karo to akhu ave, baki atlu j ave. 
function g1() {
    guessNo = Number(document.querySelector('.guess').value);
    console.log(`guess no is ${guessNo}`);

    if (!guessNo) {
        console.log("no number")
    }

    else if (secretNo === guessNo) {
        document.querySelector('.msg').textContent = "you are right and you won the game.";
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secretNo;
        highScore1 = score;
        console.log("yeahu tru");
        if (highScore1 > highScore) {
            highScore = highScore1;
            document.querySelector('.highscore').textContent = highScore;
        } else {
            console.log(highScore1)
        }

    } else if (secretNo > guessNo) {
        if (score > 0) {
            document.querySelector('.msg').textContent = "your guess is low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.msg').textContent = "your game is finished";
        }
        // console.log(score)
    }

    else if (secretNo < guessNo) {
        if (score > 0) {
            document.querySelector('.msg').textContent = "your guess is high";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.msg').textContent = "your game is finished";
        }
    }

    else {
        console.log("no. is higher or lower")
    }

};
checkButton.addEventListener('click', g1);
againButton.addEventListener('click', g2);

