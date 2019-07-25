// CODE here for your Lambda Classes
class Person {
    constructor(atrributes){
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
        return (`Today we are learning about ${this.subject}`);
    }
    grade(student){
        return (`${this.name} receives a perfect score on ${this.subject}`);
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(favSubjects){
        return favSubjects;
    }
    PRAssignments(subject){
        return `${this.name} has submitted a pull request for ${this.subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${this.subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradeClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${this.channel} @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.student} debugs ${this.name}'s code on ${this.subject}.`
    }
}
