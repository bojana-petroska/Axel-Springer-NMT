
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
for (let i=0; i<weekDays.length; i++) {
    const oneDay = weekDays[i];
    if(oneDay !== 'Saturday' && oneDay !== 'Sunday') {
        console.log(oneDay)
    }
}

let boHobbies = ['running', 'korean dance', 'yoga', 'animals', 'nature', 'hiking'];
let tinaHobbies = ['yoga', 'running', 'writing', 'fitness', 'meditation', 'listening to music'];

let commonHobbies = [];
for (let i = 0; i < boHobbies.length; i++) {
    for (let j = 0; j < tinaHobbies.length; j++) {
        if (tinaHobbies[j] === boHobbies[i]) {
            commonHobbies.push(tinaHobbies[j]);
        }
    }
}
console.log(commonHobbies);

