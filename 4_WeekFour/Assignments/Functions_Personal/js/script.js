
/* This JS is for Pasquale Palazzolo's Personal Function Calculator */

//This alert tells the user to open the console for their browser
<<<<<<< HEAD
alert("If the console is not already open, please open\nit and refresh before we begin");

// This alert sets up the personal story for the calculator
alert("With all the farm to table restaurants popping up, it seems like a good choice\nto grow your own herbs instead of buying them from a purveyor.\n\nWe've purchased a box for planting an herb garden but need to figure out if\nyou have enough counter space to hold it.\n\n");

// This asks the user for a width
var counterWidth = prompt("What is the width of your counter space in inches?");

// This asks the user for a length
var counterLength = prompt("What is the length of your counter space in inches?");
=======
alert("If the console is not already open, please open\nit and refresh before we begin"); 

// This alert sets up the personal story for the calculator
alert("With all the farm to table restaurants popping up, it seems like a good choice\nto grow your own herbs instead of buying them from a purveyor.\n\nWe've purchased a box for planting an herb garden but need to figure out if\nyou have enough counter space to hold it.\n\n"); 

// This asks the user for a width
var counterWidth = prompt("What is the width of your counter space in inches?"); 

// This asks the user for a length
var counterLength = prompt("What is the length of your counter space in inches?"); 
>>>>>>> FETCH_HEAD

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
var boxBigger = storeBoxPerimeter - counterPerimeter;
var boxSmaller = counterPerimeter - storeBoxPerimeter;

//console.log(storeBoxPerimeter);
//console.log(storeBoxArea);

if (storeBoxPerimeter > counterPerimeter) {
<<<<<<< HEAD
    console.log("Since the box we bought has a perimeter of " + storeBoxPerimeter + " it exceeds the counterspace by " + boxBigger + " inches and won't fit well on the counter.");
} else if (storeBoxPerimeter === counterPerimeter) {
    console.log("The box fits perfectly on the counter");
} else {
    console.log("The box fits with room to spare");
}
=======
	console.log("The box is too big for the counter");
} else if (storeBoxPerimeter === counterPerimeter) {
	console.log("The box fits perfectly on the counter");
} else {
	console.log("The box fits with room to spare");
}
>>>>>>> FETCH_HEAD
