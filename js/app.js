"use strict";


var yourName = prompt(' Enter your name')
alert('Hello ' + yourName + ' you have a very beautiful name :) ')

var myFirstQ = prompt("Do you think I love animals? Yes or No")
// console.log(myFirstQ)
if (myFirstQ.toLowerCase() === 'yes') {
    alert('your guessing is false. I dont love animals :(')
} else if (myFirstQ.toLowerCase() === 'no') {
    alert('You are rigth')
} else {
    alert('It is a yes no question make sure to choose one of them only')
}

alert('Time for the second question dear')

var secQ = prompt("Have I ever lost someone close? Yes or No")
// console.log(secQ)
if (secQ.toLowerCase() === 'yes') {
    alert('Yes, I lost :(')
} else if (secQ.toLowerCase() === 'no') {
    alert('Your guessing is false ')
} else {
    alert('It is a yes no question make sure to choose one of them only')

}

var thiQ = prompt("Do I like to exercise? Yes or No")
// console.log(thiQ)
if (thiQ.toLowerCase() === 'yes') {
    alert('Yes I exercise every day ')
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
} else {
    alert('It is a yes no question make sure to choose one of them only')

}

    var fiveQ = prompt("Have you cheated in a game? Yes or No")
    // console.log(fiveQ)
    if (fiveQ.toLowerCase() === 'yes') {
        alert('For sure :)')
    } else if (fiveQ.toLowerCase() === 'no') {
        alert('are sure? of course i cheated :)')
    } else {
        alert('It is a yes no question make sure to choose one of them only')

                }

alert('Thank you ' + yourName + ' you did amazing job')

alert(' well ' + yourName + 'know I am thinking of a number between 1 and 20')
var maxGuesses = 4;
var myNumber = prompt("Take a guess")
if (myNumber > 11 ) {
    prompt("Your guess is too high")
} else if (myNumber < 5 ) {
    prompt("Your guess is too low")
}
