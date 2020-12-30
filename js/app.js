"use strict";

var numCorrect = 0;
var yourName = prompt(' Enter your name')
alert('Hello ' + yourName + ' you have a very beautiful name :) ')

function firstQ() {
    var myFirstQ = prompt("Do you think I love animals? Yes or No");
    console.log(myFirstQ);
    if (myFirstQ.toLowerCase() === 'yes') {
        // console.log(myFirstQ)
        alert('your guessing is false. I dont love animals :(');
    } else if (myFirstQ.toLowerCase() === 'no') {
        // console.log(myFirstQ)
        alert('You are right');
        numCorrect += 1;
    } else {
        alert("invalid Entry")
    }
}

firstQ();

alert('Time for the second question dear')

var secQ = prompt("Have I ever lost someone close? Yes or No").toLowerCase()
console.log(secQ)
function secondQ() {
    switch (secQ) {
        case 'yes':
            //console.log('Yes, I lost')
            alert('Yes, I lost :(')
            numCorrect += 1;
            break;
        case 'no':
            //console.log('Your guessing is false ')
            alert('Your guessing is false ');
            break;
        default:
            if (secQ !== 'yes' || secQ !== 'no') {
                alert('It is a yes no question make sure to choose one of them only');
            }

    }
}
secondQ();

var thirdQ = prompt("Do I like to exercise? Yes or No")
console.log(thirdQ)
function thirQ() {
    if (thirdQ.toLowerCase() === 'yes') {
        //console.log('Yes I exercise every day')
        alert('Yes I exercise every day ')
        numCorrect += 1;
    } else if (thirdQ.toLowerCase() === 'no') {
        //console.log('You are incorrect :( I love sport :)')
        alert('You are incorrect :( I love sport :)')
    } else {
        alert('It is a yes no question make sure to choose one of them only')

    }
}
thirQ();

var fourQ = prompt("Do I know how to play a musical instrument? Yes or No")
console.log(fourQ)
function fourthQ() {
    if (fourQ.toLowerCase() === 'yes') {
        //console.log('Unfortunately, I dont know how to play')
        alert('Unfortunately, I dont know how to play')
    } else if (fourQ.toLowerCase() === 'no') {
        //console.log('You are correct ')
        alert('You are correct ')
        numCorrect += 1;

    } else {
        alert('It is a yes no question make sure to choose one of them only')

    }
}
fourthQ();

var fiveQ = prompt("Have I cheated in a game? Yes or No")
console.log(fiveQ)
function fifthQ() {
    if (fiveQ.toLowerCase() === 'yes') {
        //console.log('For sure :)')
        alert('For sure :)')
        numCorrect += 1;
    } else if (fiveQ.toLowerCase() === 'no') {
        //console.log('are sure? of course i cheated :)')
        alert('are sure? of course i cheated :)')
    }
}
fifthQ();

alert('Thank you ' + yourName + ' you did amazing job');

alert(' well ' + yourName + ' now I am thinking of a number between 1 and 20');

function sixthQ() {
    for (var i = 0; i <= 4; i++) {
        const guessNum = 15
        var yourGuess = prompt("Try Guess");
        console.log(yourGuess);
        if (yourGuess == guessNum) {
            alert(" your guessing is correct");
            numCorrect += 1;
            break;

        } else if (yourGuess > 15) {
            //console.log("too high")
            alert("too high")
        } else if (yourGuess < 14) {
            //console.log("too low")
            alert("too low")

        }

    } if (i == 4) {
        alert("You ran out of guesses. The number is 15");
    }
}
sixthQ();

var correctArray = ['black', 'pink', 'blue'];
var correct = false
function sevenQ() {
    for (var i = 0; i < 6; i++) {
        var sevQ = prompt("What is my favourite color?");
        console.log(sevQ);
        for (let index = 0; index < correctArray.length; index++) {
            if (sevQ.toLowerCase() === correctArray[index]) {
                //console.log("You got it right!")
                alert("You got it right!");
                numCorrect++;
                correct = true;
                break;

            }


        }
if (correct===true){
    break;
}            

    }



}


sevenQ();

alert("The possible answers were black, pink, blue");
alert("Your score is " + numCorrect);
alert("Thank you " + yourName)

