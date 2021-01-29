`use strict`;
function dice() {
    let minNum = 1;
    let maxNum = 6;
    let diceNum = Math.floor(Math.random() * maxNum) + minNum;
    return diceNum;
}


console.log(`Number on Dice: ${dice()}`);