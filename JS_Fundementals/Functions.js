const { xorBy } = require("lodash");
const M = require("minimatch");

function reverseString(reverseMe) {
    let reversed = '';
    for (let i = reverseMe.length - 1; i >= 0; i--) {
        reversed += reverseMe[i];
    }
    return reversed;
}

console.log(`Hi, ${reverseString('ahmed')}`)

function laugh(num) {
    let str = '';
    let x = 1;
    while ( x <= num) {
        str += 'ha';
        x += 1;
    }
    return str + "!";
}

console.log(laugh(7))

var sound = "" ; 
function laugh2(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound;
}

console.log(laugh2(3));

function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
  }
  
isThisWorking(3);
  

// returns the sum of two numbers
function add(x, y) {
    return x + y;
  }
  
  
  // returns the value of a number divided by 2
  function divideByTwo(num) {
    return num / 2;
  }
  
  
  var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable
  
sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(length) {
    var line = "";
    for (var x = 1; x <= length; x++) {
        line +=makeLine(x)
    }
    return line
}
console.log(buildTriangle(10))


// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle2(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";

    //Let's start from the topmost line
    var lineNumber = 1;

    for(lineNumber=1; lineNumber<=length; lineNumber++){
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
console.log(buildTriangle2(10));

// function expression
// function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
  }
  
  // pass in catSays as a callback function
  helloCat(catSays);