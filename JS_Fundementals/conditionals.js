console.log(12 % 3);
console.log(10 % 4);

var number = 2;

if (number % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}

var musicians = -1

if (musicians <= 0) {
    console.log("not a group")
} else if (musicians === 1) {
    console.log("solo")
} else if (musicians === 2) {
    console.log("duet")
} else if (musicians === 3) {
    console.log("trio")
} else if (musicians === 4) {
    console.log("quartet")
} else if(musicians > 4){
    console.log("this is a large group")
}


var room = "dining room";
var suspect = "Mr. Parkes";
// Initial values
var weapon = "";
var solved = false;


if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = 'poison'
    solved = true
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    solved = true
    weapon = 'trophy'
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = 'pool stick'
    solved = true
    
} else if (room === "dining room" && suspect === "Mr. Parkes"){
    weapon = 'knife'
    solved = true
} else {
    console.log('nothing on the console')
}

// The code below will run only when `solved` is true
if (solved) {
	console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}


var balance = -1;
var checkBalance = true;
var isActive = false;

if (checkBalance) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    } 
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    // Case when account is NOT active
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }  
} else {
    console.log('Thank you. Have a nice day!');
}

var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
        console.log ("I'd like two scoops of " + flavor + "ice cream in a " + vessel + "with " + toppings + ".")
}


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 21;
var shirtLength = 99;
var shirtSleeve = 8.40;

var size = "NA";

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
    size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
    size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
    size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
    size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
    size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
    size = "3XL";
}
else {
    size = "NA";
}
console.log(size);

// Ternary operator
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined")

//switch
var tier = "collector's deck";
var output = "You’ll receive "
var a, b, c, d;

switch (tier) {
    case "deck of legends":
        a = 1
        output += "a custom card, ";
        break;
    case "collector's deck":
        b = 2
        output += "a signed version of the Exploding Kittens deck, ";
        break;
    case "nsfw deck":
        c = 3
        output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
        break;
    default:
        d = 0
        output += "one copy of the Exploding Kittens card game.";
}

console.log(output + a + b + c + d);

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here

switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
        break;
}


console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");