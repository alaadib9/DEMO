"use strict";

var numCorrect = 0;
var yourName = prompt(' Enter your name')
alert('Hello ' + yourName + ' you have a very beautiful name :) ')

function firstQ () {
var myFirstQ = prompt("Do you think I love animals? Yes or No")
// console.log(myFirstQ)
if (myFirstQ.toLowerCase() === 'yes') {
    alert('your guessing is false. I dont love animals :(')
} else if (myFirstQ.toLowerCase() === 'no') {
    alert('You are rigth')
    numCorrect += 1;
} else {
}
}


firstQ();


alert('Time for the second question dear')

var secQ = prompt("Have I ever lost someone close? Yes or No").toLowerCase()
// console.log(secQ)
switch (secQ) {
  case 'yes':
    alert('Yes, I lost :(')
    numCorrect += 1;
    break;
  case'no':
    alert('Your guessing is false ');
    break;
   default:
       if (secQ !== 'yes' || secQ !=='no')
       { 
    alert('It is a yes no question make sure to choose one of them only');
     }

}

var thiQ = prompt("Do I like to exercise? Yes or No")
// console.log(thiQ)
function thirQ () {
if (thiQ.toLowerCase() === 'yes') {
    alert('Yes I exercise every day ')
    numCorrect += 1;

} else if (thiQ.toLowerCase() === 'no') {
    alert('You are incorrect :( I love sport :)')
} else {
    alert('It is a yes no question make sure to choose one of them only')

}
}
thirQ();

var fourQ = prompt("Do I know how to play a musical instrument? Yes or No")
// console.log(fourQ)
function fourthQ(){
if (fourQ.toLowerCase() === 'yes') {
    alert('Unfortunately, I dont know how to play')
} else if (fourQ.toLowerCase() === 'no') {
    alert('You are correct ')
    numCorrect += 1;

} else {
    alert('It is a yes no question make sure to choose one of them only')

}
}
fourthQ();

var fiveQ = prompt("Have I cheated in a game? Yes or No")
// console.log(fiveQ)
function fivQ (){
if (fiveQ.toLowerCase() === 'yes') {
    alert('For sure :)')
    numCorrect += 1;
} else if (fiveQ.toLowerCase() === 'no') {
    alert('are sure? of course i cheated :)')
} else {

}
}
fiveQ();

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

var correctArray = ['black','pink','blue'];
for (var i = 1; i <= 6; i++) {
    var sevenQue = prompt("what is my favorite color ? red,yellwo,black, gold, pink, blue ");
    console.log(sevenQue);
    for (let index = 0; index < correctArray.length; index++) {
    } if (sevenQue.toLowerCase() === correctArray[index] ){
        alert("yes it's true ");
        numCorrect += 1
       index = correctArray.length
        i =6;
} else {
    alert("Try again");
}
   
   
    

}
prompt("Your score is " + numCorrect)




