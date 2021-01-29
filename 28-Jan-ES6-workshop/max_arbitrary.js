`use strict`;
function findMax(...nums) {
    return Math.max(...nums);
}

console.log(findMax(1,2,3,4,5,6,100));
console.log(findMax(2,3,0,7));