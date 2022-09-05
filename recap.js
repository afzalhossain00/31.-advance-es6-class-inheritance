
// 1. var let cosnt 
// break up with var.
const numbers = [12, 15, 14, 16, 18]
let salary = 5000;
salary = 7000;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 3. template strings
const elementHTML = `
<div> 
    <h3>Name:</h3>
    <p>Address:</p>
    <p>salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>others: ${numbers[2]}</p>
</div>
`

// 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread
const ages = [12, 13, 15, 14, 16];
const newAges = [...ages, 20, 25, 24]

// 6. destructring 
const { x, y, z, ...c } = { x: 20, y: 32, z: 40, name: 'sakib al hasan', salary: 450000 };
const [a, b, ...r] = [12, 14, 16, 15, 60]
