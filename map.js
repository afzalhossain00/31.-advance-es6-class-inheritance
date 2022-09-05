const numbers = [2, 5, 6, 8, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleItArrow(number);
        output.push(doubled);
    }
    return output;
}

function doubleItRegular(num) {
    return num * 2
}

const doubleItArrow = num => num * 2;

const makeDouble = numbers.map(doubleItArrow);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
console.log(makeDouble);
// console.log(makeDoubleDirect);
// console.log(makeDouble2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes)


/* 
Purpose:
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

const result = getDoubles(numbers);
console.log(result);