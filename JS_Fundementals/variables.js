var x = "hello" + 5 * 10;
console.log(x);

var quote = "Stay awhile and listen!";
console.log(quote[6]);

var y = "The man whispered, \"please speak to me.\"";
console.log(y)

var z = "Up up\n\tdown down"
console.log(z)

// Pick a string. your string can have any number of characters.
var my_string = "a";

// calculate the ASCII value of the first character, i.e. the character at the position 0.
var ASCII_value = my_string.charCodeAt(0);
console.log(ASCII_value);

var my_string = "Udacity";
// Iterate using a loop
for (var i = 0; i < my_string.length; i++) {
    console.log(my_string.charCodeAt(i))
}

console.log('green' == 'blue')
console.log('green' == 'green')
console.log('green' == 'Green')
console.log('Green' == 'green')
console.log('green' > 'blue')
console.log('green' > 'green')
console.log('green' > 'Green')
console.log('Green' > 'Green')

var joke = 'Why couldn\'t the shoes go out and play?\nThey were all \"tied\" up!'
console.log(joke);

var haiku = `Blowing from the west
Fallen leaves gather
In the east.`;
console.log(haiku);

var a = 10;
var b = 20;
// a comparison - we will study this in detail in upcoming lesson
if (a>b) // The outcome of a>b will be a boolean
    console.log("Variable `a` has higher value"); // if a>b is true
else 
    console.log("Variable `b` has higher value"); // if a>b is false

if(1){
    console.log("This statement will always execute because conditional is set to 1 i.e., true");
}
    
if(0){
    console.log("This statement will NEVER execute because conditional is set to 0 i.e., false");
}

console.log("Hello" % 10)
console.log("3" > 1)
console.log(true >= 0)
console.log(3 === 3)

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;

console.log(total.toFixed(2) + '$');

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madLib);

var firstName = "ahmed";
var interest = "tech";
var hobby = "programming";
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";

console.log(awesomeMessage)