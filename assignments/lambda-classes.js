// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    } //Constructor Class
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }// Instructor (child) Methods
    demo(subject){
        return (`Today we are learning about ${subject}`);
    }
    grade(subject){
        return (`${this.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects.forEach(function(element){
            console.log(element);
        });
    }
    pRAssignments(subject){
        return `${this.name} has submitted a pull request for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(subject){
        return `${this.student} debugs ${this.name}'s code on ${subject}.`
    }
}

const dumbledore = new ProjectManager ({
    name: "Albus Dumbledore",
    age: 150,
    location: "behind the veil Snape",
    specialty: "wisdom",
    favLanguage: "English",
    catchPhrase: "138"
})

const trelawney = new Person ({
    name: "Professor Trelawney",
    age: 56,
    location: "Ireland",
    specialty: "Divinations",
    favLanguage: "prophecies",
    catchPhrase: "There's more to me than incense and tea leaves."
});

const snape = new Instructor ({
    name: "Severus Snape", 
    age: 38, 
    location: "behind the veil",
    specialty: "Potions",
    favLanguage: "parseltongue",
    catchPhrase: "*robe whip"
})

const lupin = new Instructor ({
    name: "Remus Lupin",
    age: 59, 
    location: "Lupin Lodge",
    specialty: "Defense against the dark arts",
    favLanguage: "English", 
    catchPhrase: "It's the qualities of one's convictions that determine success. Not the number of followers."
})

const harry = new Student ({
    name: "Harry Potter",
    age: 39, 
    location: "Ministry of Magic",
    specialty: "Auror", 
    favLanguage: "Parseltongue",
    catchPhrase: "They're my letters!",
    favSubjects: ["JavaScript", "CSS", "HTML"],
    className: "augmented reality",
    previousBackground: "wizard",
})

const ron = new Student({
    name: "Ronald Weasley",
    age: 39, 
    location: "Weasley's Wizard Wheezes", 
    specialty: "getting dirt on his nose",
    favLanguage: "English", 
    catchPhrase: "Bloody 'ell",
    favSubjects: ["JavaScript", "CSS", "HTML"],
    className: "iOS",
    previousBackground: "wizard"
})

const hermione = new Student ({
    name: "Hermione Granger",
    age: 39,
    location: "Ministry of Magic",
    specialty: "Deputy Head of the Department of Magical Law Enforcement",
    favLanguage: "Russian",
    catchPhrase: "Let's see then.",
    favSubjects: ["JavaScript", "CSS", "HTML"],
    className: "data science",
    previousBackground: "witch"
})

// trelawney.speak("prophecies");
// dumbledore.speak()
harry.listsSubjects();