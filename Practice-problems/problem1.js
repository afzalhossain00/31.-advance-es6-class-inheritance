/*
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. 
*/

// for loop
const oddArray = [1, 3, 5, 7, 9];

const newEvenArray = []
for (const number of oddArray) {
    const newArray = number + 1;
    newEvenArray.push(newArray)
}
console.log(newEvenArray);

// using map

const evenArray = oddArray.map(num => num + 1)
console.log(evenArray)


/* 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. 
*/

const givenArray = [33, 50, 79, 78, 90, 101, 30];
const getAllElements = givenArray.filter(num => num % 10 === 0)
console.log(getAllElements)


/*
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. 
*/

const getAllElementsUsingFind = givenArray.find(num => num % 10 === 0)
console.log(getAllElementsUsingFind)
