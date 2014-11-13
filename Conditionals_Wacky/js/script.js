// This script file is part of the Conditionals: Wacky assignment

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var yesNo = prompt("Greetings, Professor " + lastName + ". May I call you " + firstName + "?\n\nPlease respond with \"yes\" or \"no\"\nYour response is case sensitive.");
mayI = (yesNo === "yes") ? "Great! I prefer to be socially casual." : "My apologies, Professor. I'll keep it professional.";

console.log(mayI);