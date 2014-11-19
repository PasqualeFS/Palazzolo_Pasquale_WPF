// This is the Javascript for my Wacky Expressions assignment

var currentYear = 2014; // This declares the current year and stores it in a variable

var userBirth = prompt("What year were you born?"); // This prompts the user for their year of birth and stores it in a variable

var userAge = currentYear - userBirth; // This subtracts the user birth year from the current year and stores the result in a variable.

/* The three variables above satisfy the calculation portion of the assignment.  The wacky part begins below and is just for fun as a throwback to one of my 1980s memories. */



// The if and else statements that follow below are used to return various prompts to the user depending on their age.
if (userBirth == 1999) {
    var userNumber = prompt("Seriously? 1999? Did you party like it was? Anyway...\n\n" + userAge + " is a little young to remember the 1980s\n\nWe used to fool around with these paper fortune tellers as a joke! Please pick a number from 1 to 6.")
}
else if (userBirth <= 1989) {
    var userNumber = prompt("The ripe old age of " + userAge + ". You should remember the 1980s well.\n\nWelcome to Ye Olde 1980's Fortune Teller! Please pick a number from 1 to 6.")
}
else {
   var userNumber = prompt("You're a little young to remember the 1980s\n\nWe used to fool around with these paper fortune tellers as a joke! Please pick a number from 1 to 6.");
}



// The if and else statements below return a different prompt depending on the number the user chooses
if (userNumber == 6) {
    prompt("1, 2, 3, 4, 5, 6...Pick a color (red, blue, green, yellow) please:");
} else if (userNumber == 5) {
    prompt("1, 2, 3, 4, 5...Pick a color (red, blue, green, yellow) please:");
} else if (userNumber == 4) {
    prompt("1, 2, 3, 4...Pick a color (red, blue, green, yellow) please:");
}  else if (userNumber == 3) {
    prompt("1, 2, 3...Pick a color (red, blue, green, yellow) please:");
} else if (userNumber == 2) {
    prompt("1, 2...Pick a color (red, blue, green, yellow) please:");
} else if (userNumber ==1) {
    prompt("1...Pick a color (red, blue, green, yellow) please:");
} else {
    prompt("Oh, a smarty pants.  Clearly you can't count to six!\nLet's see if you can pick a color (red, blue, green, yellow)");
}

// The function below will redirect the page to the URL that's declared if the function is called in a line of javascript.

function move() {
    window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}


alert("Uh Oh! You've been Rick Rolled!"); // This warns the user that something ridiculous is about to happen.

move(); // This simply calls the move function and redirects the user to Rick Astley doing his cool dance.