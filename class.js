// syntactic sugar
class Instructor {
    name;
    designation = 'Web course Instructor'
    team = 'Web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}

const afzal = new Instructor('afzal', 'Dhaka')
console.log(afzal);
afzal.startSupportSession('10.00')
afzal.createQuiz(60)