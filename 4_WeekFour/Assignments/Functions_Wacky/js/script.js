/* This JS file is for Pasquale Palazzolo's Wacky Functions calculator */

//This alerts the user to open their console
alert("Please make sure your console is visible before continuing.");

//This alert starts the story for this calculator
alert("Good morning, Major Tom.  I notice you're standing there alone.");

//This variable prompts the user for a 'y' or 'n' answer and stores it.  Anything other than a lowercase 'y' or 'n' will cause a bad reaction in the if else that follows shortly after
var comeHome = prompt("Would you like to come home? Please enter \'y\' or \'n\'.");

//This function will be used in various places later to redirect the user to a YouTube clip that inspired this calculator
function move() {
    window.location = 'http://youtu.be/0_O3wgiymXg?t=49s';
}

//This if else statement has three outcomes
if (comeHome === "y"){ //The first outcome alerts the user and moves on to the next alert outside of the if statement
    alert("The ship is waiting.");
} else if (comeHome === "n") { //The second outcome alerts the user and moves on to the next alert outside of the if statement
    alert("...the ship is waiting. All systems are go, are you sure?!");
} else { //The third outcome is bad.  It does not move out of the if statement and continue...instead it throws up a series of alerts
    alert("Does not compute.  Please refresh the program and choose \'y\' or \'n\'.") //This alert tells the user what they should have done
    alert("Malfunction"); //This alert continues on with the theme
    alert("System Override"); // This alert is when the user starts getting slightly upset at my calculator
    alert("The rowers keep on rowing"); // This one is a throw back toward the Gene Wilder Willy Wonka Movie
    alert("but there's no way of knowing"); // This alert continues the nod toward Willy Wonka
    alert("Does not compute"); // This goes with the theme of this story
    alert("error! error!"); // Are you mad yet?
    alert("ever seen a green smurf?"); // This is another random alert
    alert("Pork chop sandwiches"); // This is something that only my first boss in web would understand
    alert("The thing's hollow..."); //This alert and the next four alerts are a nod to 2001 - A Space Odyssey
    alert("it goes on forever...");
    alert("and...");
    alert("oh my God!...");
    alert("it's full of stars!");
    alert("ever eaten a $48 steak in a haunted castle in tampa? I have"); //This last alert is only known by the other code geeks I've worked closely with over the years. Smart guys and close friends.  I'd sent them this JS file to test and review and wanted something in there for them to relate to.
    move(); //This calls the move function from above and redirects the user to the YouTube clip
}

alert("First, all astronauts must pass a basic math test");  // This alert warns of the start of the math test
var fivePlusTwo = prompt("What is the sum of 5 and 2?"); //This variable prompts the user for an answer

//The following if else statement has two outcomes
if (Number(fivePlusTwo) === 7) { //The first checks if the user is correct and alerts them if they are.
    alert("Correct!");
} else { //This else informs the user that their answer is wrong
    alert("INCORRECT!");
}

var sevenTimesNine = prompt("What is the product of 7 and 9?\n\n\"Product\" means multiply."); // This variable prompts the user for a second answer

//The following if else statement has two outcomes
if (Number(sevenTimesNine)=== 63) { //The first checks if the user is correct and alerts them if they are.
    alert("Correct!");
} else { //This else informs the user that their answer is wrong
    alert("That is INCORRECT, Major Tom!");
}

//This if else has two outcomes
var onePlusOne = prompt("What is 1 plus 1, Major Tom?"); // This variable prompts the user for a third answer
if (Number(onePlusOne)=== 2) { // This checks if the user is correct and alerts them if they are
    alert("Correct!")
} else { // Thise else informs the user that they've gotten the third question wrong
    alert("Are you kidding me, Major Tom?!?!  Abort Mission!");
    move(); //This redirects the user to the themed YouTube video
}

/* This comment is just separating a new if else statement */

//This if else first uses a logical operator to check and see if the user got all three questions correct.
if (Number(fivePlusTwo)=== 7 && Number(sevenTimesNine) === 63 && Number(onePlusOne) === 2) { // if all three are correct, the alert continues the story
    alert("Control is not convinced\nBut the computer has the evidence\nNo need to abort.")
} else { // if any one of the three are wrong, it alerts the user and lets them know they failed.
    alert("You have failed at basic math skills, Major Tom.  There is need to abort. Abort Mission!");
    move(); //This calls the move function again to redirect the user to the YouTube clip.
}

var countdownStart = prompt("There is one thing left to do.  Please choose a number between 4 and 1000"); //This variable prompts the user asking for a number.  I hope they choose a low one.  It stores the chosen number.

alert("The countdown starts..."); // This alert lets the user know the countdown is about to start


// This while loop continues to check and see if the user number stored is greater than 4 and keeps subtracting one until it equals four
while (countdownStart > 4) {
    console.log("T-minus " + countdownStart);
    countdownStart--;
}

// These alerts pick up on the lyrics to the song that inspired this calculator
alert("4...");
alert("3...");
alert("2...");
alert("1...");
alert(".............");
move(); // This calls the move function again and redirects the user to the YouTube clip.  The user was going to see this clip no matter what.  There were just several different ways to get to it.