// This file goes with my Personal Conditional Calculator
alert ("In order to view the recipe for Mama\'s\nItalian Chicken Soup, you\'ll need to \nopen the console.\n\nIf it\'s not open already, please open\nand refresh the browser.")

var RecipeType = prompt("Would you like to see the standard recipe or modified version?");

if (RecipeType == "standard"){
    console.log("Mama's Italian Chicken Soup\n\nThis is a standard recipe for my mother's chicken soup. It serves 8 people. In order to make this recipe, you will need the following ingredients:\n\n3 Boneless Skinless Chicken Breasts\n4 Celery Stalks, sliced\n1 lb Baby Carrots\n1 Sweet Onion\n16 oz. Chicken Stock\n1 Small Can of Tomato Sauce\n1 Tbsp Dried Parsley\n1 Tbsp Pureed Basil\nSalt and Pepper, to taste");
} else if (RecipeType == "modified") {
    console.log("Modification time");
} else {
    prompt("please choose \"standard\" or \"modified\"");
}
