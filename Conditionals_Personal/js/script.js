// This file goes with my Personal Conditional Calculator

// This alerts the user to make sure the console is open
alert("In order to view the recipe for Mama\'s\nItalian Chicken Soup, you\'ll need to \nopen the console.\n\nIf it\'s not open already, please open\nand refresh the browser.");

// This prompts the user asking for the type of recipe they want
var RecipeType = prompt("Would you like to see the standard recipe or modified version?\n\nPlease type 1 for standard or 2 for modified.");

// This variable holds the standard recipe. It serves 8 people
var StandardRecipe = "Mama's Italian Chicken Soup\n\nThis is a standard recipe for my mother's chicken soup. It serves 8 people. In order to make this recipe, you will need the following ingredients:\n\n3 Boneless Skinless Chicken Breasts\n4 Celery Stalks, sliced\n1 lb Baby Carrots\n1 Sweet Onion\n16 oz. Chicken Stock\n1 Small Can of Tomato Sauce\n1 Tbsp Dried Parsley\n1 Tbsp Pureed Basil\nSalt and Pepper, to taste";

// This variable will eventually start the chain of events to modify the recipy
var ModifiedRecipe = "Modification time";

if (RecipeType == 1){
    // if the user picks standard, this will print the standard recipe to the console
    console.log(StandardRecipe);
} else if (RecipeType == 2) {
    // if the user picks modified, this will start the prompts for modifying the recipe
    console.log(ModifiedRecipe);
} else {
    // if the user types anything else, this will call the string from the choose variable and prompt again
    alert("Sorry, that's not a valid choice.\nPlease refresh the browser and choose either 1 or 2");
}