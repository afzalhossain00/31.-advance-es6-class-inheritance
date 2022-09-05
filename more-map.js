const numbers = [12, 16, 68, 20, 95];
const half = numbers.map(n => n / 2);
const thirds = numbers.map(n => n / 3);
console.log(half, thirds);

const friends = ['Tom Hanks', 'Tom cruise', 'Brad pit', 'Robert downey']
const fristLetters = friends.map(x => x[0]);
console.log(fristLetters);

const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

const products = [
    { id: 1, name: 'laptop', price: 78000 },
    { id: 2, name: 'mobile', price: 40000 },
    { id: 3, name: 'watch', price: 12000 },
    { id: 4, name: 'tablet', price: 25000 }
];

// const items = products.map(product => console.log(product));
const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(items);
console.log(prices);