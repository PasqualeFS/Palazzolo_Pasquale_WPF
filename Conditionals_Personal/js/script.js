// This file goes with my Personal Conditional Calculator

var oneSvPrunes = 3; // This var contains a single serving of prunes
var oneSvChocolate = 31.25; // This var contains a single serving of chocolate
var StandardYield = 8; // This var is the standard yield of one batch
var DoubleYield = 16; // This var is the yield of two batches
var TripleYield = 24; // This var is the yield of three batches

// This variable prompts the user. First it provides some basic info about Grok Rocks and then asks the user how much they want to make.
var GrokRecipe = prompt("Grok Rocks are a great Primal treat when you need a slight break from Paleo eating.\n\nThey\'re chocolate covered prunes. One serving consists of " + oneSvPrunes + " prunes and " + oneSvChocolate + " grams \nof 60-70% dark chocolate.\n\nA standard recipe serves " + StandardYield + " people. It requires " + oneSvPrunes * StandardYield + " prunes and " + oneSvChocolate * StandardYield + " grams of chocolate.\n\nHow many people will you be making this recipe for?\n\n");

// If user needs 16 servings, console prints out double batch. If user needs 24 servings, console prints triple batch. Otherwise, console will just print whatever user amount entered multiplied by the single servings.
if(GrokRecipe == 16){
    console.log("You\'ll need a double batch so plan on buying " + DoubleYield * oneSvPrunes + " prunes and " + DoubleYield * oneSvChocolate + " grams of chocolate.");
} else if(GrokRecipe == 24) {
    console.log("That's a lot of Grok Rocks. You'll need to triple the recipe. You had better plan to buy " + TripleYield * oneSvPrunes + " prunes and " + TripleYield * oneSvChocolate + " grams of chocolate.");
} else {
    console.log("You\'re going to need " + GrokRecipe * oneSvPrunes + " prunes and " + GrokRecipe * oneSvChocolate + " grams of chocolate in order to make this recipe.");
}