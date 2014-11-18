/* This goes along with the Arguments and Parameters Screencast */

/*
Structure:

// This is when calling a function
funcName (argument1, argument2);

// This is a defined function with parameters
function funcName (parameter1, parameter2){
    //Code the function runs
}


calcArea(30, 20);

// Since 30 is the first argument, it's going to be stored in the "w" parameter. 20 will be stored in the "h" parameter
function calcArea(w, h){
    var area = w * h;
    console.log(area);
}

 */

function dogYears(){
    var humanAge = 4;
    var dogYears = humanAge * 7;
    console.log("Sparky is " + dogYears + " years old.");
}