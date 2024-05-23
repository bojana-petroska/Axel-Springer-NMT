// Function Scope:
// const globalVar = 'bo';

// function localScope() {
//     const localVar = 20;
//     console.log(globalVar);
//     console.log(localVar);
// }

// console.log(localScope());
//console.log(localVar);

// Loops and Arrays:
// Task 2: Sum of Array Elements:

const sumArray = function(numbers) {
    if(Array.isArray(numbers) && numbers.every(number => typeof number === 'number')) {
        let sum = 0;
        numbers.forEach(number => {
            sum += number;
        });
        return sum;
    } else return 'Error! Put only numbers!'
}
console.log(sumArray([4, 6, 8, 9]));
console.log(sumArray([4, 6, 8, 9, 10, 12]));
console.log(sumArray([4, 6, 8, 9, 10, 'bo']));

// Task 3: Reverse Array Elements:

const reverseArray = arr => {
    if(arr.every(elem => typeof elem === 'string')) {
        arr.reverse();
    };
    return arr;
}

const reverseArray1 = arr => {
    if(arr.every(elem => typeof elem === 'string')) {
        let arrReverse = [];
        for (let i = arr.length-1; i >= 0; i--) {
            arrReverse.push(arr[i])
        }
        return arrReverse;
    };
}

console.log(reverseArray(['bo', 'petroska']));
console.log(reverseArray1(['bo', 'petroska']));

// Objects:
// Task 4: Student Information:

const student = {
    name: 'bo',
    age: 37,
    grade: 5
};

function displayInfo(arg) {
    console.log(`Her name is ${student.name}.`);
    console.log(`She is ${student.age} years old.`);
    console.log(`And her grade is ${student.grade}.`)
};

displayInfo({name: "bo", age: 37, grade: 5});

// Task 5: Shopping Cart:
const cart = {
    items: [],
    totalCost: 0,
    addItem: function(...newItems) {
        newItems.forEach(item => {
            if(typeof item === 'string') {
                this.items.push(item)
            };
        });
    }
};
cart.addItem('bread', 'veggies', 'salmon');
console.log(cart.items);

// Bonus Task: Task 6 - Finding Maximum Number in an Array:

function findMax(arr = []) {
    if(!Array.isArray(arr)) {
        throw new Error('Buhuuu, only arrays are accepted!');
    }
    if(!arr.every(num => typeof num === 'number')) {
        throw new Error('Buhuuu, only numbers are accepted!');
    } 
    return Math.max(...arr)
}
console.log(findMax([5, 7, 9, 2, 12, 4, 3, 21]));
//console.log(findMax([5, 7, 'bo', 2, 12, 4, 3, 21]));

