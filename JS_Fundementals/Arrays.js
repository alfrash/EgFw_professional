// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];

// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];

// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [
    [1, 2, 3], 
    ["Julia", "James"], 
    [true, false, true, false]
];
  
donuts[0] = 'ahmed';
console.log(donuts[0]);
console.log(mixedData[2]);
console.log(arraysInArrays[1]);

//Array.length
var donuts1 = ["glazed", "powdered", "sprinkled"];
console.log(donuts1.length);
//Strings have a length
console.log("supercalifragilisticexpialidocious".length)

// add an element to the end of an array using push
donuts1.push('milk')
console.log(donuts1.push('milk2')) // return array length

// remove element from the end of an array using pop 
donuts1.pop() // return the removed element

var donuts3 = ["cookies", "cinnamon sugar", "creme de leche"];
// adds 2 element at index 1
// splice(index, number of elements, new elements)
donuts3.splice(1, 0, "chocolate frosted", "glazed");
console.log(donuts3)

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2, 1, "Yellow", "Green")
rainbow.splice(5, 0, "Purple")
console.log(rainbow)

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(team) {
    if (team.length >= 7) {
        return true
    } else {
        return false
    }
}
console.log(hasEnoughPlayers(team));

let numbers1 = [4, 2, 5, 1, 3];
console.log(numbers1.join(''))
numbers1.sort((a, b) => a - b);
console.log(numbers1);

var donuts4 = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
donuts4.forEach(function(donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
});
  
let words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(element) {
    if (element % 3 === 0) {
        element += 100
        console.log(element)
    }

})

test.forEach(function(element,index){
    if (element % 3 === 0) {
        test[index] += 100
    }
})
console.log(test)


var newTest = test.map(function(element) {
    element += " hole";
    element = element.toUpperCase();
  return element;
});

console.log(newTest)

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(element) {
    element *= 1.15;
    return Number(element.toFixed(2));
});
console.log(totals);

var donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
  ];
  
  // here, donutBox.length refers to the number of rows of donuts
  for (var row1 = 0; row1 < donutBox.length; row1++) {
    console.log(donutBox[row1]);
  }
  for (var row = 0; row < donutBox.length; row++) {
    // here, donutBox[row].length refers to the length of the donut array currently being looped over
    for (var column = 0; column < donutBox[row].length; column++) {
      console.log(donutBox[row][column]);
    }
  }


  var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
  ];

  for (let row = 0; row < numbers.length; row++) {
      for (let column = 0; column < numbers[0].length; column++) {
          if (numbers[row][column] % 2 === 0) {
            numbers[row][column] = "even";
          } else {
            numbers[row][column] = "odd";
          }
      }
      
  }
  console.log(numbers)