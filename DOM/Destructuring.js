const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

const [a, , c] = point;

console.log(a, c);

const gameStone = {
    type: 'stone',
    color: 'red',
    mass: 20.5
};

// when destructuring an object you must use the sma keys;
const { type, mass } = gameStone;

console.log(type, mass)

const { color } = gameStone;
console.log(color)

// notice the difference between using this and circle
const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * circle.radius;
    }
  };
  
let { radius, getArea, getCircumference } = circle;

 console.log(radius, getArea(), getCircumference())
  