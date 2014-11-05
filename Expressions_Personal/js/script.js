// This is for my Personal Expressions assignment

alert("Trans-Siberian Orchestra is playing at Amway Arena on 12/14/2014!"); // This line starts an alert to click through.
var perPerson = 55.95; // This line stores the price per person for a single ticket to TSO
var headCount = prompt("Tickets cost $" + perPerson + " per person. \nHow many people are in your party?"); //This line asks the user how many people are attending the TSO concert and stores the user data in a variable;
var totalCost = headCount * perPerson; // This line multiplies the cost per person times the amount of people going.
var displayTotal = "The total cost for " + headCount + " tickets is $" + totalCost + "."; // This creates a string concatenated with the relevant variables
alert(displayTotal);