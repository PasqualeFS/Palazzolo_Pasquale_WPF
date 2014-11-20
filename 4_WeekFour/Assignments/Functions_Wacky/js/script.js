/* This JS file is for Pasquale Palazzolo's Wacky Functions calculator */

alert("Good morning, Major Tom.  I notice you're standing there alone.");
var comeHome = prompt("Would you like to come home? Please enter \'y\' or \'n\'.");

function move() {
    window.location = 'http://youtu.be/0_O3wgiymXg';
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
    alert("INCORRECT! Abort Mission");
    move();
}

