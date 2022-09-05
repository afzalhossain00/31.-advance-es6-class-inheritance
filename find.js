const numbers = [12, 5, 42, 63, 75, 10, 79, 6, 18];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fives)
console.log(fivesAll)

const products = [
    { id: 1, name: 'laptop', price: 78000 },
    { id: 2, name: 'mobile', price: 50000 },
    { id: 3, name: 'watch', price: 12000 },
    { id: 4, name: 'tablet', price: 25000 }
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);