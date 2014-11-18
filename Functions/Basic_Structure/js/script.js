/* JS file for Basic Structure Screencast */

/*
Basic Structure for a function is as follows:

function functionName() {
    // code that the function runs
}



function outptMsg(){
    console.log("Hello World");
}

 */

var width = 5; // Even though there are two widths now, the function is going to prefer to run the code within it.

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

// The above functions won't run unless they are invoked or called.  Just type the function with parentheses to run it.

calcArea(); // This calls the calcArea function and runs it in the console.
console.log(width); // This will call any "width" variables OUTSIDE of the written functions.  Testing in the console will result in seeing "5" instead of the "600 output from the function

