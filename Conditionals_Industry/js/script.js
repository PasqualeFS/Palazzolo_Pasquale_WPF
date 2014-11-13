// This goes along with the Conditionals: Industry Calculator assignment

// This asks the user to type in his or her name.
var yourName = prompt("What is your name?");

// This alert concatenates a string and the yourName variable so it outputs the user's name in the sentence.
alert("Good morning, " + yourName + "! Daryl had to take the day off.\n\nHis dog is sick and he's taking it to the vet. That leaves you and me\nto work through all of the email jobs.");

// This variable stores the amount of email jobs in the work queue
var emailJobs = 32;

// This variable will hold the result of the ternary operator below.
var work;

//This shows how much I'm working on
var myJobs = 8;

// This variable states the amount of jobs and prompts the user asking what amount of work they currently have.
var yourJobs = prompt("There are currently " + emailJobs + " jobs in the queue. How many jobs are you currently working on?");

// This ternary operator checks to see if the user has less tasks than I do. If they have more, I'll take on the bulk.  If they have less, they can work on a few more.
work = (yourJobs < myJobs) ? "You have less tasks than me. Take a few more from the queue please." : "That\'s a lot. You have more tasks than me. Don\'t stress! I\'ll take the bulk of the work today.";

alert(work); // This alerts the user with one of the ternary operator results.
console.log(work); // This prints the ternary operator result to the console.
