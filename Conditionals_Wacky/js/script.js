// This script file is part of the Conditionals: Wacky assignment

// This asks the user to enter their first name
var firstName = prompt("What is your first name?");

// This asks the user to enter their last name
var lastName = prompt("What is your last name?");

// This asks the user for a yes or no answer and stores it in the yesNo variable
var yesNo = prompt("Greetings, Professor " + lastName + ". May I call you " + firstName + "?\n\nPlease respond with \"yes\" or \"no\"\nYour response is case sensitive.");

// This ternary operator creates a result based on the user data stored in the yesNo variable
mayI = (yesNo === "yes") ? "Great! I prefer to be socially casual." : "My apologies, Professor. I'll keep it professional.";

// This prints the result of the mayI variable to the console.
console.log(mayI);