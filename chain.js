const users = [
    { id: 1, name: 'kabir', job: 'doctor' }
]
console.log(users[0].name)

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'leader' }
    ]
}
const firstJob = data.data[0].job;
console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alva edison',
    address: {
        street: {
            first: '30/B kochukhet lane',
            second: 'second floor',
            third: 'left side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address?.stret?.second;
console.log(userFloor);