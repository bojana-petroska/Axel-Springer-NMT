// Classroom Grades
// function Student(firstName, grades) {
//     this.firstName = firstName;  //put constructor
//     this.grades = grades;
//     this.getHighestGrade = function() {
//         return Math.max(...this.grades);
//     }
// }

class Student {
    constructor(firstName, grades) { //put constructor
        this.firstName = firstName;  
        this.grades = grades;
        this.getHighestGrade = function() {
            return Math.max(...this.grades);
        }
    }
}

const alice = new Student('Alice', [85, 90, 78]);
const bob = new Student('Bob', [92, 88, 79]);
const charlie = new Student('Charlie', [80, 85, 88]);

const classroom = {
students: [], //try empty []
averageGrades: {},
};

classroom.students.push(alice, bob, charlie);

// console.log(alice.getHighestGrade());
// console.log(bob.getHighestGrade());
// console.log(charlie.getHighestGrade());

// console.log(classroom.students[0].grades);
// console.log(classroom.students[1]);

function calculateAverageGrades(classroom) {
    classroom.students.forEach(student => {
        let sumOfGrades = 0;
        student.grades.forEach(grade => {
            sumOfGrades += grade;
        });
        const averageGrades = sumOfGrades / student.grades.length;
        classroom.averageGrades[student.firstName] = averageGrades;
        //console.log(averageGrades);
    });
    return;
};

calculateAverageGrades(classroom);
//console.log(classroom);
//console.log(`Each students average grades are: ${classroom.averageGrades}`);
const eachAverageGrade = classroom.averageGrades;
console.log(eachAverageGrade);
const printedEachAverageGrade = `Alices average grade is: ${eachAverageGrade.alice}`;
console.log(printedEachAverageGrade);
console.log(classroom.averageGrades);

// Finding the student with the highest Grades

function findStudentWithHighestGrades(classroom) {
    let highestGrade = 0;
    let highestGradedStudent;

    classroom.students.forEach(student => {
        let studentHighestGrade = student.getHighestGrade();
        if (studentHighestGrade > highestGrade) {
            highestGrade = studentHighestGrade;
            //console.log(highestGrade)
            highestGradedStudent = student.firstName;
        }
    })
    return highestGradedStudent;
}

console.log(`The student with the highest grade is: ${findStudentWithHighestGrades(classroom)}`);

//Guessing Game

// const guessingGame = function() {
//     let targetNumber = Math.floor(Math.random() * 100);
//     console.log(targetNumber);
//     let tries = 0;

//     function userGuess() {
//         const userGuessANumber = prompt('Please enter a number from 1 to 100');
//         console.log(userGuessANumber)
//         return parseInt(userGuessANumber);
//     }
//     let guess = userGuess();
    
//     while (targetNumber !== guess) {
//         guess = userGuess()
//         if (guess < targetNumber) {
//             alert('mehh bit low');
//         } else if (guess > targetNumber) {
//             alert('a bit higher than needed')
//         }
//         tries++;
//     }
//     alert(`Wuhuuuuu finally! You only needed ${tries} tries!`)
// }

// guessingGame();


