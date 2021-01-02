"use strict";

function ifCorrect() {
    alert("You are correct");
}
function ifIncorrect() {
    alert("You are incorrect");
}
function notYesOrNo() {
    alert("It is a yes no question make sure to choose one of them only")
}

var numCorrect = 0;
var yourName = prompt(' Enter your name')
alert('Hello ' + yourName + ' you have a very beautiful name :) ')

var checkOne = true;
while (checkOne) {
    var myFirstQ = prompt("Do you think I love animals? Yes or No");

    if (myFirstQ.toLowerCase() === 'yes' || myFirstQ.toLowerCase() === 'y') {
        ifIncorrect();

        checkOne = false;
    } else if (myFirstQ.toLowerCase() === 'no' || myFirstQ.toLowerCase() === 'n') {
        ifCorrect();
        numCorrect += 1;
        checkOne = false;
    } else {
        notYesOrNo();
    }
}


secondQ();

function secondQ() {
    var secQ = prompt("Have I ever lost someone close? Yes or No").toLowerCase();
    switch (secQ) {
        case 'yes':
        case 'y':
            ifCorrect();
            numCorrect += 1;
            break;
        case 'no':
        case 'n':
            ifIncorrect();
            break;
        default:
            notYesOrNo();
            secondQ();


    }
}

var check2 = true;
while (check2) {

    var thirdQ = prompt("Do I like to exercise? Yes or No");
    if (thirdQ.toLowerCase() === 'yes' || thirdQ.toLowerCase() === 'y') {
        ifCorrect();
        numCorrect += 1;
        check2 = false;
    } else if (thirdQ.toLowerCase() === 'no' || thirdQ.toLowerCase() === 'n') {
        ifIncorrect();
        check2 = false;
    } else {
        notYesOrNo();

    }
}

fourthQ();

function fourthQ() {
    var fourQ = prompt("Do I know how to play a musical instrument? Yes or No");
    if (fourQ.toLowerCase() === 'yes' || fourQ.toLowerCase() === 'y') {
        alert('Unfortunately, I dont know how to play');
    } else if (fourQ.toLowerCase() === 'no' || fourQ.toLowerCase() === 'n') {
        ifCorrect();
        numCorrect += 1;

    } else {
        notYesOrNo();
        fourthQ();

    }
}


fifthQ();
function fifthQ() {
    var fiveQ = prompt("Have I cheated in a game? Yes or No");
    if (fiveQ.toLowerCase() === 'yes' || fiveQ.toLowerCase() === 'y') {
      ifCorrect();
        numCorrect += 1;
    } else if (fiveQ.toLowerCase() === 'no' || fiveQ.toLowerCase() === 'n') {
        ifIncorrect();
    } else {
        notYesOrNo();
        fifthQ();
    }
}

alert('Thank you ' + yourName + ' you did amazing job');

alert(' well ' + yourName + ' now I am thinking of a number between 1 and 20');


function sixthQ() {
    for (var i = 0; i <= 4; i++) {
        const guessNum = 8;
        var yourGuess = parseInt(prompt("Try Guess"));
        console.log(yourGuess);
        if (yourGuess === guessNum) {
            alert(" your guessing is correct");
            numCorrect += 1;
            break;
        } else if (yourGuess > 8) {
            alert("too high");
        } else if (yourGuess < 8) {
            alert("too low");

        }


    } if (i === 4) {
        alert("You ran out of guesses. The number is 8");
    }
}
sixthQ();

var correctArray = ['black', 'pink', 'blue'];
var correct = false;
function sevenQ() {
    for (var i = 0; i < 6; i++) {
        var sevQ = prompt("What is my favourite color?");
        for (let index = 0; index < correctArray.length; index++) {
            if (sevQ.toLowerCase() === correctArray[index]) {
                alert("You got it right!");
                numCorrect++;
                correct = true;
                break;

            }


        }
        if (correct === true) {
            break;
        }

    }



}

sevenQ();

alert("The possible answers were black, pink, blue");
alert("Your score is " + numCorrect);
alert("Thank you " + yourName)

