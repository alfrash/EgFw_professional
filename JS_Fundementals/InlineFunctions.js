// inline function example
function movies(messageFunction, name) {
    messageFunction(name)
}
/*
 movies take two arguments (messageFunction(name){} , name) 
 the second name is the actual value 'Finding Nemo'
*/
movies(function messageFunction(name) {
    console.log(`my favorite movie is ${name}`)
}, 'Finding Nemo')

// anonymous function expression
var doSomething = function(y) {
    return y + 1;
};
doSomething(5);
// named function expression
var doSomething = function addOne(y) {
    return y + 1;
};
doSomething(5);

var laugh = function (num) {
    let ha = ''
    for (let x = 1; x <= num; x++) {
        ha += 'ha'   
    }
    return ha
}
console.log(laugh(3))

var cry = function name() {
    return "boohoo!"
}

console.log(cry())

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function (num) {
    let ha = ''
    for (let x = 1; x <= num; x++) {
        ha += 'ha'   
    }
    return ha + "!"
    
})