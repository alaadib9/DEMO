"use strict";

var numCorrect = 0;
var yourName = prompt(' Enter your name')
alert('Hello ' + yourName + ' you have a very beautiful name :) ')

var checkOne = true;
while (checkOne) {
    var myFirstQ = prompt("Do you think I love animals? Yes or No");

    if (myFirstQ.toLowerCase() === 'yes' || myFirstQ.toLowerCase() === 'y') {

        alert('your guessing is false. I dont love animals :(');
        checkOne = false;
    } else if (myFirstQ.toLowerCase() === 'no' || myFirstQ.toLowerCase() === 'n') {

        alert('You are right');
        numCorrect += 1;
        checkOne = false;
    } else {
        alert("please make sure to answer the question");
    }
}


secondQ();

function secondQ() {
    var secQ = prompt("Have I ever lost someone close? Yes or No").toLowerCase();
    switch (secQ) {
        case 'yes'://if
        case 'y':
            alert('Yes, I lost :(')
            numCorrect += 1;
            break;
        case 'no'://else if
        case 'n':
            alert('Your guessing is false ');
            break;
        default:// else
            alert('It is a yes no question make sure to choose one of them only');
            secondQ();
            

    }
}

var check2 = true;
while (check2 ){

    var thirdQ = prompt("Do I like to exercise? Yes or No");

    if (thirdQ.toLowerCase() === 'yes' || thirdQ.toLowerCase() === 'y') {
        alert('Yes I exercise every day ');
        numCorrect += 1;
        check2=false;
    } else if (thirdQ.toLowerCase() === 'no' ||thirdQ.toLowerCase() === 'n') {
        alert('You are incorrect :( I love sport :)');
        check2=false;
    } else {
        alert('It is a yes no question make sure to choose one of them only');

    }
}

fourthQ();

function fourthQ() {
    var fourQ = prompt("Do I know how to play a musical instrument? Yes or No");
    if (fourQ.toLowerCase() === 'yes' || fourQ.toLowerCase() === 'y') {
        
        alert('Unfortunately, I dont know how to play');
    } else if (fourQ.toLowerCase() === 'no'|| fourQ.toLowerCase() === 'n') {
        alert('You are correct ');
        numCorrect += 1;

    } else {
        alert('It is a yes no question make sure to choose one of them only');
        fourthQ();

    }
}


fifthQ();
function fifthQ() {
    var fiveQ = prompt("Have I cheated in a game? Yes or No");
    if (fiveQ.toLowerCase() === 'yes' || fiveQ.toLowerCase() === 'y') {
        alert('For sure :)');
        numCorrect += 1;
    } else if (fiveQ.toLowerCase() === 'no' || fiveQ.toLowerCase() === 'n') {
        alert('are sure? of course i cheated :)');
    } else {
        fifthQ();
    }
}

alert('Thank you ' + yourName + ' you did amazing job');

alert(' well ' + yourName + ' now I am thinking of a number between 1 and 20');


function sixthQ() {
    for (var i = 0; i <= 4; i++) {
        const guessNum = 15;
        var yourGuess = parseInt(prompt("Try Guess"));
        console.log(yourGuess);
        if (yourGuess === guessNum) {
            alert(" your guessing is correct");
            numCorrect += 1;
            break;
        } else if (yourGuess > 15) {
            alert("too high");
        } else if (yourGuess < 14) {
            alert("too low");

        }
    

    } if (i === 4) {
        alert("You ran out of guesses. The number is 15");
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

