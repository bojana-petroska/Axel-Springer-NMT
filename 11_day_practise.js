
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (let i=0; i<weekDays.length; i++) {
    //     const oneDay = weekDays[i];
    //     console.log(oneDay === 'Saturday' || oneDay === 'Sunday' ? oneDay : 'Not a weekend :(' );
    // }
    
// for (let i=0; i<weekDays.length; i++) {
//     const oneDay = weekDays[i];
//     if(oneDay === 'Saturday' || oneDay === 'Sunday') {
//         console.log(oneDay)
//     }
// }

// console.log('bo')
    
// for (let i=0; i<weekDays.length; i++) {
//     const oneDay = weekDays[i];
//     if(oneDay !== 'Saturday' && oneDay !== 'Sunday') {
//         console.log(oneDay)
//     }
// }

let boHobbies = ['running', 'korean dance', 'yoga', 'animals', 'nature', 'hiking'];
let tinaHobbies = ['yoga', 'running', 'writing', 'fitness', 'meditation', 'listening to music'];
// console.log(bo)

// bo.push('writing')
// console.log(bo)

// let commonHobbies = [];
// for (let i = 0; i < boHobbies.length; i++) {
//     for (let j = 0; j < tinaHobbies.length; j++) {
//         if (boHobbies[i] === tinaHobbies[j]) {
//             commonHobbies.push(tinaHobbies[j]);
//         }
//     }
// }
let commonHobbies = [];
for (let i = 0; i < boHobbies.length; i++) {
    for (let j = 0; j < tinaHobbies.length; j++) {
        if (tinaHobbies[j] === boHobbies[i]) {
            commonHobbies.push(tinaHobbies[j]);
        }
    }
}
console.log(commonHobbies);

