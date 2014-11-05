// This is for my Industry Expressions assignment

alert("You have 600px to work with. \n\nLet's calculate the remaining width of our email design space.\n\nYou have to use four TD elements across the width of the design.");

var firstTD = prompt("How much is the width of your first TD element?");
var totalSpace = 600;
var firstRemainder = totalSpace - firstTD;
var secondTD = prompt("You have " + firstRemainder + "px left to work with.\n\nHow much is the width of your second TD element?\nPlease make sure your entry is " + firstRemainder + " or less.");
var secondRemainder = firstRemainder - secondTD;
var thirdTD = prompt("You have " + secondRemainder + "px left to work with.\n\nHow much is the width of your third TD element?\nPlease make sure your entry is " + secondRemainder + " or less.");
var thirdRemainder = secondRemainder - thirdTD;
var fourthTD = prompt("BE CAREFUL!!! \n\nYou only have " + thirdRemainder + " px left to work with.\n\nPlease make sure your entry is exactly " + thirdRemainder + "px or your email design\nwill break!\n\nHow much is the width of your last TD element?");