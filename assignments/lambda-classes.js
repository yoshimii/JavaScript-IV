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
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    gradeMod(student){
        let min = 1;
        let max = 10;
        let posRand = 0;
        let randNum = function(){
            if(Math.random() < 0.5){
                posRand = -1;//subtracts points
            }else {
                posRand = 1;//adds points
            }
        }
        return (Math.floor(Math.random() * (max - min + 1) )*posRand) + student.grade;
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade =  Math.random()*100;
    }
    listsSubjects(){
        return this.favSubjects.forEach(function(element){
            console.log(element);
        });
    }
    pRAssignments(subject){
        return (`${this.name} has submitted a pull request for ${subject}`);
    }
    sprintChallenge(subject){
        return (`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate(){if(this.grade >= 70){
        return "Let them graduate!"
    }else {
        return ("Retake your O.W.L.S.");
    }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel} @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}
// PM Attributes
const dumbledore = new ProjectManager ({
    name: "Albus Dumbledore",
    age: 150,
    location: "behind the veil Snape",
    specialty: "wisdom",
    favLanguage: "English",
    catchPhrase: "138",
    gradClassName: "FSW22",
    favInstructor: "Britt"
})

const mrsNorris = new ProjectManager({
    name: "Mrs. Norris",
    age: "???",
    location: "???",
    specialty: "tipping off Filch",
    favLanguage: "cat?",
    catchPhrase: "meow",
    gradClassName: "FSW22",
    favInstructor: "Britt"
})
// Instructor Attributes
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
// Student Attributes
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
    grade: this.grade
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
    previousBackground: "wizard",
    grade: this.grade
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
    previousBackground: "witch",
    grade: this.grade
})

//test PM methods
dumbledore.debugsCode(ron, "herbology");
mrsNorris.standUp("#web22");

//test instructor methods
snape.grade(harry, "potions");
lupin.demo("Defense Against the Dark Arts")


//test student methods
harry.listsSubjects();
console.log(hermione.pRAssignments("divinations"));
console.log(ron.sprintChallenge('herbology'));

// Testing Grandchild inheritance from Parent
ron.speak();

// Grade modifier tester
console.log(lupin.gradeMod(harry));// Instructor
console.log(mrsNorris.gradeMod(hermione));

//Graduate tester

console.log(ron.grade);
console.log(lupin.gradeMod(ron))
console.log(ron.graduate());