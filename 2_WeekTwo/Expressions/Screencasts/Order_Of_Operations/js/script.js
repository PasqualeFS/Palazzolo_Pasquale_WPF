// This is the JS file to go along with the Order of Operations Screencast
// Don't forget PEMDAS

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// the average is the sum of the items divided by the number of items

//var average = quiz1 + quiz2 + quiz3 + quiz4/4;
//console.log(average);
// The result of the above ended up being too high.

/* Need to use PEMDAS to achieve the correct result. PEMDAS is:
Parenthesis
Exponents
Multiplication
Division
Addition
Subtraction
in that exact order!
 */

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
// This ensures the items in parenthesis are added first then divided at the end. It follows the rule of PEMDAS
console.log(average);


var length = 7;
var width= 6;
var perimeter = length *2 + width * 2;
console.log(perimeter);
// Since multiplication comes first in PEMDAS, parenthesis aren't needed to achieve the correct result.