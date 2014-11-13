// This goes along with the Conditionals: Industry Calculator assignment

// This asks the user to type in his or her name.
var yourName = prompt("What is your name?");

// This alert concatenates a string and the yourName variable so it outputs the user's name in the sentence.
alert("Good morning, " + yourName + "! Daryl had to take the day off.\n\nHis dog is sick and he's taking it to the vet. That leaves you and me\nto work through all of the email jobs.");

// This variable stores the amount of email jobs in the work queue
var emailJobs = 32;

// This variable states the amount of jobs and prompts the user asking what amount they can work on.
var yourJobs = prompt("There are currently " + emailJobs + " jobs in the queue. With your current work load, how many jobs can you take?");

