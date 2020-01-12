// Have the object in one instance

// Example #1. Using a global variable "instance".
let instance;

class Counter {
    constructor() {
        if (!instance) {
            instance = this;
            instance.count = 0;
        }

        return instance;
    }

    getCount() {
        return instance.count;
    }

    increaseCount() {
        instance.count++;
    }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount());
console.log(myCount2.getCount());
console.log(myCount1 === myCount2);


// Example #2. Using a static property into class.

class Counter2 {
    constructor() {
        if (Counter.exists) {
            return Counter.instance;
        }

        this.count = 0;
        Counter.instance = this;
        Counter.exists = true;
        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        this.count++;
    }
};

const myCount3 = new Counter2();
const myCount4 = new Counter2();

myCount3.increaseCount();
myCount3.increaseCount();
myCount4.increaseCount();
myCount4.increaseCount();

console.log(myCount3.getCount());
console.log(myCount4.getCount());
console.log(myCount3 === myCount4);


