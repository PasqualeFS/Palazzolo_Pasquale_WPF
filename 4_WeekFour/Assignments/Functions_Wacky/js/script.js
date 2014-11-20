/* This JS file is for Pasquale Palazzolo's Wacky Functions calculator */

alert("Good morning, Major Tom.  I notice you're standing there alone.");
var comeHome = prompt("Would you like to come home? Please enter \'y\' or \'n\'.");

function move() {
    window.location = 'http://youtu.be/0_O3wgiymXg?t=49s';
}

if (comeHome === "y"){
    alert("The ship is waiting.");
} else if (comeHome === "n") {
    alert("...the ship is waiting. All systems are go, are you sure?!");
} else {
    alert("Does not compute.  Please refresh the program and choose \'y\' or \'n\'.")
    alert("Malfunction");
    alert("System Override");
    alert("The rowers keep on rowing");
    alert("but there's no way of knowing");
    alert("Does not compute");
    alert("error! error!");
    alert("ever seen a green smurf?");
    alert("Pork chop sandwiches");
    alert("My god...it's full of stars");
    alert("ever eaten a $48 steak in a haunted castle in tampa? I have");
    move();
}

alert("First, all astronauts must pass a basic math test");
var fivePlusTwo = prompt("What is the sum of 5 and 2?");
if (Number(fivePlusTwo) === 7) {
    alert("Correct!");
} else {
    alert("INCORRECT!");
}

var sevenTimesNine = prompt("What is the product of 7 and 9?\n\n\"Product\" means multiply.");
if (Number(sevenTimesNine)=== 63) {
    alert("Correct!");
} else {
    alert("That is INCORRECT, Major Tom!");
}

var onePlusOne = prompt("What is 1 plus 1, Major Tom?");
if (Number(onePlusOne)=== 2) {
    alert("Correct!")
} else {
    alert("Are you kidding me, Major Tom?!?!  Abort Mission!");
    move();
}

//-------------------------------------------------------------

if (Number(fivePlusTwo)=== 7 && Number(sevenTimesNine) === 63 && Number(onePlusOne) === 2) {
    alert("Control is not convinced\nBut the computer has the evidence\nNo need to abort.")
} else {
    alert("You have failed at basic math skills, Major Tom.  There is need to abort. Abort Mission!");
    move();
}

var countdownStart = prompt("There is one thing left to do.  Please choose a number between 4 and 1000");

alert("The countdown starts...");



while (countdownStart > 4) {
    console.log("T-minus " + countdownStart);
    countdownStart--;
}

alert("4...");
alert("3...");
alert("2...");
alert("1...");
alert(".............");
move();



