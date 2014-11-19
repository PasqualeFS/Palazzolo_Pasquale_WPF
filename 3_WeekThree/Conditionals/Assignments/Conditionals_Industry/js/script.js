// This goes along with the Conditionals: Industry Calculator assignment

// This asks the user to type in his or her name.
var yourName = prompt("What is your name?");

// This alert concatenates a string and the yourName variable so it outputs the user's name in the sentence.
alert("Good morning, " + yourName + "! Daryl had to take the day off.\n\nHis dog is sick and he's taking it to the vet. That leaves you and me\nto work through all of the email jobs.");

// This variable stores the amount of email jobs in the work queue
var emailJobs = 32;


//This shows how much I'm working on
var myJobs = 8;

// This variable states the amount of jobs and prompts the user asking what amount of work they currently have.
var yourJobs = prompt("There are currently " + emailJobs + " jobs in the queue. I currently have " + myJobs + " items to work on. How many jobs are you currently working on?");

// This variable takes myWork, applies casting to yourWork so it acts as a number and the current queue amount and adds them together.
var totalJobs = myJobs + Number(yourJobs) + emailJobs;

// This variable uses the modulo operator to determine if there is a remainder once the totalJobs variable is divided by 2.
var remainingJobs = totalJobs % 2;


// This ternary operator checks to see if the user has less tasks than I do. A result is chosen based on whether the user has more or less than the number in myJobs.
work = (yourJobs < myJobs) ? "You have less tasks than I do." : "You have more tasks than I do.";

// This alerts the user with one of the ternary operator results.
alert(work);

// This variable stores concatenates the following string combined with several of the variables above.
var splitTasks = "Let's split up the work. Your " + yourJobs + " tasks plus my " + myJobs + " tasks plus the " + emailJobs + " already in the queue totals " + totalJobs + ". \n\nIf we each take half of the tasks, then there will be " + remainingJobs + " left for Daryl when he returns to work!\n\nLet's do this!";

// This alert displays the splitTasks variable to the user.
alert(splitTasks);

// This console.log prints the splitTasks variable to the console.
console.log(splitTasks);