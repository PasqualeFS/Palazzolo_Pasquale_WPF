
/* This JS is for Pasquale Palazzolo's Personal Function Calculator */

//This alert tells the user to open the console for their browser
alert("If the console is not already open, please open\nit and refresh before we begin");

// This alert sets up the personal story for the calculator
alert("With all the farm to table restaurants popping up, it seems like a good choice\nto grow your own herbs instead of buying them from a purveyor.\n\nWe've purchased a box for planting an herb garden but need to figure out if\nyou have enough counter space to hold it.\n\n");

// This asks the user for a width
var counterWidth = prompt("What is the width of your counter space in inches?");

// This asks the user for a length
var counterLength = prompt("What is the length of your counter space in inches?");

// This calculates the perimeter based on user entries.
var counterPerimeter = Number(counterWidth) * 2 + Number(counterLength) * 2;

if (counterLength < counterWidth){ //This checks to see if the length is shorter than the width and alerts the user
    alert("A width that exceeds your length? That's a bit odd but the perimeter is " + counterPerimeter + " inches.\n\n")
} else if (counterLength === counterWidth) { //This checks to see if the length and width are equal and alerts the user.
    alert("Ahh, a square shaped counter space.\n\nThe perimeter of your square counter is " + counterPerimeter + " inches.\n\n")
} else { //This alerts the user if the length is greater than the width and they are not equal.
    alert("Great! The perimeter of your counter space is " + counterPerimeter + " inches.\n\n")
}
alert("Now that we've established the " + counterPerimeter + " inch perimeter of your counter\nwe need to see if the herb garden box will fit.\n\n");

//This is an anonymous function to calculate the area of the herb box
var herbBoxArea = function(width, length){
    var boxArea = width * length;
    return boxArea;
}

//This is an anonymous function to calculate the perimeter of the herb box
var herbBoxPerimeter = function(width, length){
    var boxPerimeter = width * 2 + length * 2;
    return boxPerimeter;
}

//The next two lines invoke both functions
var storeBoxArea = herbBoxArea(4, 8);
var storeBoxPerimeter = herbBoxPerimeter(4,8);

//This calculates the perimeter of the box minus the perimeter of the counter
var boxBigger = storeBoxPerimeter - counterPerimeter;

//This calculates the perimeter of the counter minus the perimeter of the box
var boxSmaller = counterPerimeter - storeBoxPerimeter;

//This alert tells the user a little more detail about the box purchased for the herb garden
alert("That box we bought for the herbs has a total area of " + storeBoxArea + " inches squared.\nWe calculated the perimeter of the box to be " + storeBoxPerimeter + " inches.");

//This if else statement has three possible outcomes
if (storeBoxPerimeter > counterPerimeter) {
    alert("Since the box we bought has a perimeter of " + storeBoxPerimeter + " it exceeds the counterspace by " + boxBigger + " inches and won't fit well on the counter."); //This alerts the user if the box is bigger than the counter
    console.log("Since the box we bought has a perimeter of " + storeBoxPerimeter + " it exceeds the counterspace by " + boxBigger + " inches and won't fit well on the counter."); //This prints to the console if the box is bigger than the counter
} else if (storeBoxPerimeter === counterPerimeter) {
    alert("Looks like your counterspace and the box we bought are the exact same size. They both have a perimeter of " + counterPerimeter + " inches. A perfect fit!"); //This alerts the user if the box is the same size as the counter
    console.log("Looks like your counterspace and the box we bought are the exact same size. They both have a perimeter of " + counterPerimeter + " inches. A perfect fit!"); //This prints to the console if the box is the same size as the counter
} else {
    alert("That is one gigantic counter.  Since the box we bought only has a perimeter of " + storeBoxPerimeter + " inches and your counter space has a perimeter of " + counterPerimeter + " inches, the box fits on the counter with " + boxSmaller + " inches to spare. Time to get a bigger box!");  //This alerts the user if the box is smaller than the counter
    console.log("That is one gigantic counter.  Since the box we bought only has a perimeter of " + storeBoxPerimeter + " inches and your counter space has a perimeter of " + counterPerimeter + " inches, the box fits on the counter with " + boxSmaller + " inches to spare. Time to get a bigger box!");  //This prints to the console if the box is smaller than the counter
}