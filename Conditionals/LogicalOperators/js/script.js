// For Logical Operators Screencast

var budget = 300;
var iPhonePrice = 499.99;
var wonLottery = false;

// if the price of the phone is less than our budget AND if the paycheck is over 300
// && operator must always go between relational expressions or booleans
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
} else{
    console.log("No phone for you!!");
}