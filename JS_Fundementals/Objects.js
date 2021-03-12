
var myObject = { greeting: 'hello', name: 'ahmed' };

var umbrella = {
    color: "pink",
    isOpen: false,
    open: function () {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function () {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    }
};

// Object-literal notation
var sister = {
    name: "Sarah",
    age: 23,
    parents: ["alice", "andy"],
    siblings: ["julia"],
    favoriteColor: "purple",
    pets: true,
    paintPicture: function () {
        return 'sarah paints'
    }
};

console.log(sister.age)
console.log(sister['name'])
console.log(sister.paintPicture())

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function () {
        return `Welcome!\nYour balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`

    }
};

console.log(savingsAccount.printAccountSummary());

var facebookProfile = {
    name: 'ahmed',
    friends: 5,
    messages: [],
    postMessage: function (message) {
        return this.messages.push(String(message))
    },
    deleteMessage: function (index) {
        return this.messages.splice(index, 1)
    },
    addFriend: function () {
        return this.friends += 1
    },
    removeFriend: function () {
        if (facebookProfile.friends > 0) {
            return this.friends -= 1
        }
    }
}

facebookProfile.postMessage("hi ahmed")
facebookProfile.postMessage("ok")
facebookProfile.removeFriend()
facebookProfile.removeFriend()
facebookProfile.addFriend()
facebookProfile.deleteMessage(1)
console.log(facebookProfile.friends, facebookProfile.messages)


var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function (dic) {
    let x = `${dic.type} donuts cost $${dic.cost} each`
    console.log(x)
});