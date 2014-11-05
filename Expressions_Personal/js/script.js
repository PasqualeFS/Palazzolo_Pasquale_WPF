// This is for my Personal Expressions assignment

alert("Trans-Siberian Orchestra is playing at Amway Arena on 12/14/2014!"); // This line starts an alert to click through.

var perPerson = prompt("What would you like to spend per ticket?"); // This line stores the price per person for a single ticket to TSO

var headCount = prompt("You chose tickets at a cost of $" + perPerson + " per person. \n\nHow many people are in your party?"); //This line asks the user how many people are attending the TSO concert and stores the user data in a variable;

var taxAmount = prompt("What is the sales tax in your area?\nPlease enter a whole number. No decimals."); // This line stores the sales tax amount entered by the user

var taxCalculation = headCount * perPerson * taxAmount/100; // This line turns the tax rate into a decimal and calculates the amount of tax on the total price

var subtotal = headCount * perPerson; // This line multiplies the cost per person times the amount of people going.

var totalCost = headCount * perPerson + taxCalculation;

var displayTotal = ("The subtotal for " + headCount + " tickets is $" + subtotal + "." + "\nThe sales tax amount is " + taxAmount + "%.\n\nYour total cost equals $" + totalCost); // This creates a string concatenated with the relevant variables

alert(displayTotal); // This displays the information for the user

console.log (displayTotal); // This displays the information in the console (for assignment purposes only)