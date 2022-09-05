const numbers = [12, 5, 42, 63, 75, 10, 79, 6, 18];
const bigNumbs = numbers.filter(number => number > 20)
const tiny = numbers.filter(n => n < 10)
const even = numbers.filter(n => n % 2 === 0)
console.log(bigNumbs, tiny, even)

const products = [
    { id: 1, name: 'laptop', price: 78000 },
    { id: 2, name: 'mobile', price: 40000 },
    { id: 3, name: 'watch', price: 12000 },
    { id: 4, name: 'tablet', price: 25000 }
];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 30000);
const expensive = products.filter(product => product.price < 1000);
console.log(expensive)
