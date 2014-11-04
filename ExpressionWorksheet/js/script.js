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

var dogResult = "Sparky is " + humanYears + " human years old which is " + humanYears * dogYearsMultiplier + " in dog years.";
// The line above includes strings, proper spacing, integration of the variables and multiplication of variables where needed.
console.log(dogResult); // This should print the result of 21 to the console when browser testing.

/* PROBLEM 2: Slice of Pie Part I
 A bunch of students are having a party and somebody ordered pizza.
 Create an expression that calculates how much pizza each party goer will get at the party.
 (Assume all pizzas have the same number of slices and that the person dividing the pizza is
 really precise, so this can be a decimal, like 3.52 slices, etc.)
 */

var pizzasOrdered = 10; // This states that 10 pizzas were ordered by somebody
var slicesPerPie = 12; // This states that each pizza pie has 12 slices
var partyRSVPS = 18; // This states that 18 people are attending this party
var pizzaResult = "Each person ate " + pizzasOrdered * slicesPerPie / partyRSVPS + " slices of pizza at the party.";
console.log(pizzaResult);


/* PROBLEM 3: Slice of Pie Part II
 At the pizza party Sparky, the host’s dog is excited, because he gets
 the leftover pizza after the slices have been divided up evenly among the guests.
 Assume guests get whole slices, how many whole slices will Sparky feast on?
 */

var remainingPizza = pizzasOrdered * slicesPerPie % partyRSVPS;
var sparkyEats = "Sparky got " + remainingPizza + " slices of pizza.";
console.log(sparkyEats);

/* PROBLEM 4: Average Shopping Bill
 You are budgeting your money for the year and must calculate your average weekly grocery
 shopping spending over the past five weeks. Store the past five grocery totals as a list in an array.
 Create an expression that will use the items in the array to calculate the average amount spent on groceries.

 Please note: there should only be one given for this problem set, the array holding the five weekly totals.
 You should be able to access the array using the array access notation discussed earlier in the course.
 */



/* PROBLEM 5: Discounts
 Calculate the discounted price for an item. Create an expression that will calculate the discounted
 price with and without sales tax.
 (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)
 */