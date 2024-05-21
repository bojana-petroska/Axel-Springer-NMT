let number = 4;
console.log(result = number % 2 === 0 ? 'Even' : 'Odd');

// Conditional Statements:

// Temperature Classifier:
let temperatureToday = prompt('what is the T');

let temperatureExpressions = 
temperatureToday < 0 ? `It's freezing outside!` : 
temperatureToday >= 0 && temperatureToday <= 15 ? `It's cold outside.` : 
temperatureToday >= 16 && temperatureToday <= 25 ? `It's pleasant outside.` : 
`It's hot outside.` 

alert(temperatureExpressions);

// Ticket Price Calculator:

function ticketPriceCalculator() {
    let usersAge = prompt('what is your Age');

    return usersAge <= 0 ? `Enter a valid age` : 
    usersAge <= 12 ? `The price is $8` :
    usersAge > 13 && usersAge <= 64 ? `The price is $12` :
    `The price is $10`
}

let priceAlert = ticketPriceCalculator();
alert(priceAlert);


// Score Grading System:

function gradingSystem() {
    let userScore = prompt('what is your score');

    switch(true) {
        case userScore > 90:
            return 'You got an A';
            break;
        case userScore >= 80 && userScore <= 89:
            return 'You got a B';
            break;
        case userScore >= 70 && userScore <= 79:
            return 'You got a C';
            break;
        case userScore >= 60 && userScore <= 69:
            return 'You got a D';
            break;
        default: 
            return 'You Failed : ('
    }
}

let scoreAlert = gradingSystem();
alert(scoreAlert);

// Greeting Function:
function greet (name = 'Beautiful User') {
    return`Hi! ${name}`
};

console.log(greet());
console.log(greet('bo'));

// Addition Function:
function add(a = 1, b = 2) {
    return a + b;
}

console.log(add(3, 6));

// Multiplication Function:
function multiply(a = 1, b = 2) {
    return a * b;
}

console.log(multiply(8, 7));
