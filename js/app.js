"use strict";

var numCorrect = 0;
var yourName = prompt(' Enter your name')
alert('Hello ' + yourName + ' you have a very beautiful name :) ')

var myFirstQ = prompt("Do you think I love animals? Yes or No")
// console.log(myFirstQ)
if (myFirstQ.toLowerCase() === 'yes') {
    alert('your guessing is false. I dont love animals :(')
} else if (myFirstQ.toLowerCase() === 'no') {
    alert('You are rigth')
    numCorrect += 1;
} else {
}



alert('Time for the second question dear')

var secQ = prompt("Have I ever lost someone close? Yes or No")
// console.log(secQ)
if (secQ.toLowerCase() === 'yes') {
    alert('Yes, I lost :(')
    numCorrect += 1;
} else if (secQ.toLowerCase() === 'no') {
    alert('Your guessing is false ')
} else {
    alert('It is a yes no question make sure to choose one of them only')

}

var thiQ = prompt("Do I like to exercise? Yes or No")
// console.log(thiQ)
if (thiQ.toLowerCase() === 'yes') {
    alert('Yes I exercise every day ')
    numCorrect += 1;

} else if (thiQ.toLowerCase() === 'no') {
    alert('You are incorrect :( I love sport :)')
} else {
    alert('It is a yes no question make sure to choose one of them only')

}

var fourQ = prompt("Do I know how to play a musical instrument? Yes or No")
// console.log(fourQ)
if (fourQ.toLowerCase() === 'yes') {
    alert('Unfortunately, I dont know how to play')
} else if (fourQ.toLowerCase() === 'no') {
    alert('You are correct ')
    numCorrect += 1;

} else {
    alert('It is a yes no question make sure to choose one of them only')

}

var fiveQ = prompt("Have I cheated in a game? Yes or No")
// console.log(fiveQ)
if (fiveQ.toLowerCase() === 'yes') {
    alert('For sure :)')
    numCorrect += 1;
} else if (fiveQ.toLowerCase() === 'no') {
    alert('are sure? of course i cheated :)')
} else {

}
alert('Thank you ' + yourName + ' you did amazing job');

alert(' well ' + yourName + ' know I am thinking of a number between 1 and 20');

for (var i = 1; i <= 4; i++) {
    const guessNum = 15
    var yourGuess = prompt("Try Guess")
    if (yourGuess == guessNum) {
        alert(" your guessing is corre")
        numCorrect += 1;
        break;

    } else if (yourGuess > 15) {
        alert("too high")
    } else if (yourGuess < 14) {
        alert("too low")

    } else {
        alert("Try again")
    }

}

alert("the number is 15");

for (var i = 1; i <= 6; i++) {
    var sevenQue = prompt("what is my favorite color ? red,yellwo,black, gold, pink, blue ")
    console.log(sevenQue)
    var colorArray = ['red','yellwo','black','gold','pink','blue'];
    if (sevenQue.toLowerCase() === colorArray[0] ||
        sevenQue.toLowerCase() === colorArray[1] ||
        sevenQue.toLowerCase() === colorArray[2] ||
        sevenQue.toLowerCase() === colorArray[3] ||
        sevenQue.toLowerCase() === colorArray[4]) {
        alert("No. Try again ")
    } else if (sevenQue.toLowerCase() === colorArray[5]) {
        alert(" Yes I adore blue color");
        numCorrect += 1
        break;

    }
}
prompt("Your score is " + numCorrect)




