// var y = 1;
// while (y <= 1000) {
//     console.log(y);
//     y += 1;
// }

// var c = 10;
// while (c <= 25) {
//   console.log('Printing out c = ' + c);
//   c = c + 2;
// }

// var x = 1;
// while (x <= 20) {
//   if ((x % 3 === 0) && (x % 5 === 0)) {
//     console.log("JuliaJames")
//   }else if (x % 3 === 0) {
//     console.log("Julia")
//   }else if (x % 5 === 0) {
//     console.log("James")
//   } else {
//     console.log(x)
//   }
//   x += 1;
// }

// var num = 99;

// while (num >= 1) {
//   var bottles1 = (num === 1) ? "bottle" : "bottles"
//   var lyrics1 = `${num} ${bottles1} of juice on the wall! ${num} ${bottles1} of juice! Take one down, pass it around... `
//   var bottles2 = ((num - 1) === 1) ? "bottle" : "bottles"
//   var lyrics2 =`${ num - 1 } ${ bottles2 } of juice on the wall!`
//   console.log(lyrics1 + lyrics2)
//   num -= 1
// }

// var num = 99;

// while (num >=1) {
//     // Last iteration. Note occurances of bottle, bottle, bottleS
//     if (num === 1) {
//         console.log(num + " bottle of juice on the wall! "
//                     + num + " bottle of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     // Second-last iteration. Note concurrences of bottleS, bottleS, bottle
//     else if (num === 2){
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottle of juice on the wall!");
//     }
//     // All other iterations. Note occurrences of bottleS, bottleS, bottleS
//     else {
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     num = num - 1;
// }

// n = 60

// while (n >= 0) {
//   if (n === 50) {
//       console.log("Orbiter transfers from ground to internal power");
//   }
//   else if (n === 31) {
//       console.log("Ground launch sequencer is go for auto sequence start");
//   }
//   else if (n === 16) {
//       console.log("Activate launch pad sound suppression system");
//   }
//   else if (n === 10) {
//       console.log("Activate main engine hydrogen burnoff system");
//   }
//   else if (n === 6) {
//       console.log("Main engine start");
//   }
//   else if (n === 0) {
//       console.log("Solid rocket booster ignition and liftoff!");
//   }
//   else{
//       console.log("T-"+n+" seconds");
//   }

  
//   n = n-1;
// }

// for (var x = 0; x < 5; x = x + 1) {
//   for (var y = 0; y < 3; y = y + 1) {
//     console.log(x + "," + y);
//   }
// }
// for (var i = 0; i <= 6; i = i + 2) {
//   console.log(i);
// }

// for (let x = 9; x >= 1; x--) {
//   console.log("hello " + x);
  
// }
y = 1
for (let x = 5; x >= 1; x--) {
 
  y = y * x
  
}
console.log(y)

let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);

for (var x = 0; x <= 25; x = x + 1) {
    for (var y = 0; y <= 99; y = y + 1) {
      console.log(x + "," + y);
    }
}