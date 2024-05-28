

const double = (x) => x * 2;

const functionVariable = function double(x) {
    return x * 2;
}

// console.log(functionVariable(4))
// console.log(double(4))

function doTo(dontdo) {
    console.log('we r in')
    if(typeof(dontdo) === 'function')
        dontdo(4)
}

doTo(x => x * 2)


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const numbers1 = [1, 2, 3, 4, 5];
// const doubledNumbers1 = numbers1.map(number => number * 2);
// console.log(doubledNumbers1); // [2, 4, 6, 8, 10]

const students = ['bo', 'ro','re', 'ze'];

let newStudents = students.map(student => {
    return student += 'buHu'
});
console.log(newStudents)

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(getEven);
console.log(evenNumbers); // [2, 4]

function getEven(number) {
    return result = number % 2 === 0;
}

const fruits = ["apple", "banana", "orange", "mango"];
const firstOrange = fruits.find((fruit) => fruit === "orange");
console.log(firstOrange); // Output: "orange"

const numbers2 = [5, 2, 1, 4, 3];
numbers2.sort((a, b) => a - b); // Sorts the numbers in ascending
console.log(numbers2); 
numbers2.sort((a, b) => b - a); // Sorts the numbers in descending
console.log(numbers2); 

const fruits2 = ['apple', 'banana', 'orange', 'mango'];
fruits2.forEach(fruit => console.log(fruit)); 

let groupNames = ['estelle', 'bo', 'mariem', 'shenoa', 'regina'];
groupNames.sort()
console.log(groupNames)

const students2 = [
    { name: 'Mary', age: 18, grade: 'A' },
    { name: 'Peter', age: 19, grade: 'B' },
    { name: 'Jane', age: 17, grade: 'C' },
  ];
  students2.sort((a, b) => b.age - a.age).forEach(student => {
    if (student.grade === 'A') {
      console.log('Excellent student: ' + student.name);
    }
  }); 
  


  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hi, my name is ${this.name}`);
    }
    callYou() {
        console.log(`my age is: ${this.age}`)
    }
  }
  const person = new Person('bo', 37);
  person.greet()
  person.callYou()

  console.log(person.name)