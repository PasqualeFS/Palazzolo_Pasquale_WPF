/*

console.log ("------ Loops ------");

var b = 10; // sets up the index

while (b > 0){ // checks the condition
    console.log(b + " kegs on the wall");
    b--; //Increments or decrements the index
}


console.log("------ Do While Loops ------");

var c = 10;

do{
    console.log(c + " kegs on the wall");
    c--;
}
while(c > 0);


console.log("------ For Loops ------");

// a culmination of all loops in one line.  Looks like this

for (var bagel = 10; bagel > 0; bagel--){
    console.log(bagel + " kegs on the wall");
}

*/

for (var beatIt = 500; beatIt > 0; beatIt--){
    if (beatIt == 305){
        break;
    }
    console.log("Counting Down: " + beatIt);
}