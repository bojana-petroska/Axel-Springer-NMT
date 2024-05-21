function checkDay(day) {
    switch(day) {
        case 1:
            console.log(`It's Monday!`);
            break;
        case 2:
            console.log(`It's Tuesday!`);
            break;
        case 3:
            console.log(`It's Wednesday!`);
            break;
        case 4:
            console.log(`It's Thursday!`);
            break;
        case 5:
            console.log(`It's Friday!`);
            break;
        case 6:
        case 7:
            console.log(`It's the Weekend!`);
            break;
        default:
            console.log('Wrong Input')
    }
}

checkDay(2);
checkDay(6);
checkDay(4);
checkDay(9);
