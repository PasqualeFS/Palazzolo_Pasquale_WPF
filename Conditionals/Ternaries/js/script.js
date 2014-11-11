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

var gpa = 48;

// if the gpa is over the min 2.0 score, this student can graduate
// this conditional statement is written in standard format

/*
if(gpa > 2.0){
    console.log("You can graduate!");
} else{
    console.log("GPA is too low!");
}
*/

// This is the same conditional with a ternary operator

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

