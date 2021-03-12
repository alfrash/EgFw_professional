const digits = [0, 1.333, 'ahmed', 3, 4, 5, 6, 7, 8, 9];


Array.prototype.decimalfy = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toFixed(2)
        
    }
};

for (const index in digits) {
    console.log(digits[index])
}

for (const digit of digits) {
    console.log(digit)
}

for (const item of digits) {
    if (item % 2 === 0) {
        // go up
        continue;
    }
    console.log(item)
}

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (const day of days) {
    var uperDay = day.charAt(0).toUpperCase() + day.slice(1);
    console.log(uperDay)
}