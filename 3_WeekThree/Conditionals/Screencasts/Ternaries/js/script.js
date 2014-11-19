// This goes with the Ternary Operators Screencast

/* It's called "Ternary" because this operator requires three components.  It uses a ? */

/* A standard conditional/if statement looks like this:


if(condition){
    do if true;
} else {
    do if false;
}

 */

/* A Ternary operator would look like this:

(condition) ? do if true : do if false;

 */


/*
var gpa = 48;

// if the gpa is over the min 2.0 score, this student can graduate
// this conditional statement is written in standard format

if(gpa > 2.0){
    console.log("You can graduate!");
} else{
    console.log("GPA is too low!");
}


// This is the same conditional with a ternary operator

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");
*/

var age = 6;
var book;

// if child is under 10, they get green eggs and ham, otherwise they get The Time Machine

/*
if(age < 10){
     book = "Green Eggs and Ham";
} else {
    book = "The Time Machine";
}
*/
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

