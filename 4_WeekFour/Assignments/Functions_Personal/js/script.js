/* This JS is for Pasquale Palazzolo's Personal Function Calculator */

alert("If the console is not already open, please open\nit and refresh before we begin");

var counterWidth = prompt("What is the width of your counter space in inches?");
var counterLength = prompt("What is the length of your counter space in inches?");

var counterPerimeter = Number(counterWidth) + Number(counterWidth) + Number(counterLength) + Number(counterLength);

if (counterLength < counterWidth){
    alert("Sorry.  Your length needs to equal or exceed your width. Please refresh your browser and start again")
} else if (counterLength === counterWidth) {
    alert("Ahh, a square shaped counter space.\n\nThe perimeter of your square counter is " + counterPerimeter + " inches.\n\nLet's proceed.")
} else {
    alert("Great!  The perimeter of your counter space is " + counterPerimeter + " inches.");
}