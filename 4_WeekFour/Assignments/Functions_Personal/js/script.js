/* This JS is for Pasquale Palazzolo's Personal Function Calculator */

alert("If the console is not already open, please open\nit and refresh before we begin");

var counterWidth = prompt("What is the width of your counter space in inches?"); // This asks the user for a width

var counterLength = prompt("What is the length of your counter space in inches?"); // This asks the user for a length

var counterPerimeter = Number(counterWidth) + Number(counterWidth) + Number(counterLength) + Number(counterLength); // This calculates the perimeter based on user entries.

if (counterLength < counterWidth){ //This checks to see if the length is shorter than the width and alerts the user
    alert("A width that exceeds your length? That's a bit odd but the perimeter is " + counterPerimeter + " inches.")
} else if (counterLength === counterWidth) { //This checks to see if the length and width are equal and alerts the user.
    alert("Ahh, a square shaped counter space.\n\nThe perimeter of your square counter is " + counterPerimeter + " inches.")
} else { //This alerts the user if the length is greater than the width and they are not equal.
    alert("Great! The perimeter of your counter space is " + counterPerimeter + " inches.")
}

