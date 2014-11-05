// This is the Javascript for my Wacky Expressions assignment

var userNumber = prompt("Welcome to Ye Olde 1980's Fortune Teller! Please pick a number from 1 to 6.");
// The prompt above will take a user number from 1 to 6 and store it in the variable "userNumber"


if (userNumber == 6) {
    var userColor = prompt("1, 2, 3, 4, 5, 6...Pick a color (red, blue, green, yellow) please:");
} else if (userNumber == 5) {
    var userColor = prompt("1, 2, 3, 4, 5...Pick a color (red, blue, green, yellow) please:");
} else if (userNumber == 4) {
    var userColor = prompt("1, 2, 3, 4...Pick a color (red, blue, green, yellow) please:");
}  else if (userNumber == 3) {
    var userColor = prompt("1, 2, 3...Pick a color (red, blue, green, yellow) please:");
} else if (userNumber == 2) {
    var userColor = prompt("1, 2...Pick a color (red, blue, green, yellow) please:");
} else if (userNumber ==1) {
    var userColor = prompt("1...Pick a color (red, blue, green, yellow) please:");
} else {
    var userColor = prompt("Oh, a smarty pants.  Clearly you can't count to six!\nLet's see if you can pick a color (red, blue, green, yellow)");
}

console.log(userColor);