const type = 'stone';
const color = 'green';
const mass = 50.5;

const object = {
    type,
    color,
    mass,
    calculateWeight() {
        return this.mass * 10
    }
}

console.log(object.calculateWeight())