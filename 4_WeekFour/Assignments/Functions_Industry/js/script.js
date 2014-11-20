/*  This is the JS file for Pasquale Palazzolo's Industry Expressions Calculator */

alert("Once upon a time there live a small email marketing department");
alert("Daryl the brave led the troops. Pasquale utilized inbox sorcery.\n\'Twas the fair maiden, Kadri, who was busiest of them all.");
alert("Each day, the three would gaze into Ye Olde Book of Tasks and see what the future held for them.");
alert("On this particular day, there was an excessive amount of Tasks in the book. They would all be very busy.")


var pasqualeTasks = prompt("Gaze in to Ye Olde Book of Tasks. How many tasks doth Pasquale have?\n\nPlease enter a large number.");
var darylTasks = prompt("and what does thou see in store for Sir Daryl?\n\nPlease enter a large number");
var kadriTasks = prompt("Surely they will fail in battle against this foe.  How grim are things for the maiden, Kadri?\n\nPlease enter the largest number")


function addTasks(pasqualeTasks, darylTasks, kadriTasks ){
    var totalTasks = Number(pasqualeTasks) + Number(darylTasks) + Number(kadriTasks);
    return totalTasks;
}

var allTasks = addTasks(pasqualeTasks, darylTasks, kadriTasks);

console.log(allTasks);