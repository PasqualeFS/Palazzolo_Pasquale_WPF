/*
 Expressions Worksheet
 Pasquale Palazzolo
 Web Programming Fundamentals Section 01 with Jessica Garlic
  */



/* PROBLEM 1: Dog Years
 Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
Calculate how old Sparky the pit bull is in dog years based on his actual age.
*/

var humanYears = 3; // This is Sparkys' age in human years
var dogYearsMultiplier = 7; // Dogs age 7 years for every human year.  This will provide a x7 multiplier in the final result

var result = "Sparky is " + humanYears + " human years old which is " + humanYears * dogYearsMultiplier + " in dog years.";
// The line above includes strings, proper spacing, integration of the variables and multiplication of variables where needed.
console.log(result); // This should print the result of 21 to the console when browser testing.