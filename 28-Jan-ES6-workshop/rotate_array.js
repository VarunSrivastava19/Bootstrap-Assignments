`use strict`;
function rotateArray(shift, ...arr) {
    return `rotated: [${[...arr.slice(shift), ...arr.slice(0, shift)]}]`;
}

console.log(`Array to be rotated: [a, b, c]\n`,rotateArray(1, 'a', 'b', 'c'));