/*  This is the JS file for Pasquale Palazzolo's Industry Expressions Calculator */

//The four alerts that follow this comment tell a story.  The user clicks OK to move to each next alert.
alert("Once upon a time there live a small email marketing department");
alert("Daryl the brave led the troops. Pasquale utilized inbox sorcery.\n\'Twas the fair maiden, Kadri, who was busiest of them all.");
alert("Each day, the three would gaze into Ye Olde Book of Tasks and see what the future held for them.");
alert("On this particular day, there was an excessive amount of Tasks in the book. They would all be very busy.")

//This var prompts the user for Pasquale's total tasks and stores it in a variable
var pasqualeTasks = prompt("Gaze in to Ye Olde Book of Tasks. How many tasks doth Pasquale have?\n\nPlease enter a large number.");

//This var prompts the user for Daryl's total tasks and stores it in a variable
var darylTasks = prompt("and what does thou see in store for Sir Daryl?\n\nPlease enter a large number");

//This var prompts the user for Kadri's total tasks and stores it in a variable
var kadriTasks = prompt("Surely they will fail in battle against this foe.  How grim are things for the maiden, Kadri?\n\nPlease enter the largest number")

//This anonymous function takes three parameters and adds them together then returns the total back to addTasks.
function addTasks(pasqualeTasks, darylTasks, kadriTasks ){
    var totalTasks = Number(pasqualeTasks) + Number(darylTasks) + Number(kadriTasks);
    return totalTasks;
}

//This variable invokes the function, passes the three arguments and stores the added total that was returned to addTasks.
var allTasks = addTasks(pasqualeTasks, darylTasks, kadriTasks);

//This alert presents the amount of tasks to the user in a pop-up window.
alert("and as our story draws to a close, Pasquale, Daryl and Kadri sat staring into the endless abyss of " + allTasks + " tasks...\n\nand they did NOT live happily ever after.");

//This console.log prints the same information to the console.
console.log("and as our story draws to a close, Pasquale, Daryl and Kadri sat staring into the endless abyss of " + allTasks + " tasks...\n\nand they did NOT live happily ever after.");