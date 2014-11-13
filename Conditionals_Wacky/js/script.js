// This script file is part of the Conditionals: Wacky assignment

// This asks the user to enter their first name
var firstName = prompt("What is your first name?");

// This asks the user to enter their last name
var lastName = prompt("What is your last name?");

// This asks the user for a yes or no answer and stores it in the yesNo variable
var yesNo = prompt("Greetings, Professor " + lastName + ". May I call you " + firstName + "?\n\nPlease respond with \"yes\" or \"no\"\nYour response is case sensitive.");

// This ternary operator creates a result based on the user data stored in the yesNo variable
mayI = (yesNo === "yes") ? "Great! I prefer to be socially casual." : "My apologies, Professor. I'll keep it professional.";

// This continues the conversation and then asks how many people will be drinking
var drinkerCount = prompt(mayI + "\n\nYou may call me Joshua.\n\nShall we sing a drinking song?\n\nHow many people will be drinking?");

// This continues conversation asking user how many drinks per person
var drinksCount = prompt("How many drinks per person?");

// This continues conversation asking user what their favorite drink is
var favoriteDrink = prompt("What is your favorite drink?");

// This variable multiplies the amount of drinkers times the amount of drinks and stores the total
var totalDrinks = drinkerCount * drinksCount;

// This variable just stores a single drink
var oneDown = 1;

// This variable reduces the totalDrinks variable by the amount stored in the oneDown variable
var takeOne = totalDrinks - oneDown;

// This concatenates the following strings with several of the above stored variables to make a song
var ninetyNineBottles = totalDrinks + " bottles of " + favoriteDrink + " on the wall\n" + totalDrinks + " bottles of " + favoriteDrink + "!\nTake " + oneDown + " down. Pass it around.\n" + takeOne + " bottles of " + favoriteDrink + " on the wall!";

// This displays the ninetyNineBottle variable for the user
alert(ninetyNineBottles);

// This prints the result of the ninetyNineBottles variable to the console.
console.log(ninetyNineBottles);