class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember {
    designation = 'Web course Instructor'
    team = 'Web team'
    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}


class Developer extends TeamMember {
    designation = 'Web course Instructor'
    team = 'Web team'
    tech;
    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech
    }
    developFeature(feature) {
        console.log(`please develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the version ${version}`)
    }
}


class JobPlacement extends TeamMember {
    designation = 'Job placement commandos'
    team = 'Job placement'
    region;
    constructor(name, location, region) {
        super(name, location)
        this.region = region;
    }
    developFeature(feature) {
        console.log(`please develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the version ${version}`)
    }
}

const dalia = new Developer('dalia Hasan', 'Dhaka', 'React');
console.log(dalia);
dalia.provideFeedback();