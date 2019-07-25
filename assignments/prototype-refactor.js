/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes){
        this.newCreatedAt = attributes.createdAt;
        this.newName = attributes.name;
        this.newDimensions = attributes.dimensions;
    }

    destroy(){
        return `${this.newName} was removed from the game.`
      }
  };


  class CharacterStats extends GameObject {
      constructor(attributes) {
        super(attributes);
        this.newHealthPoints = attributes.healthPoints;
        
      }
      takeDamage(){
        return (`${this.newName} took damage.`);
      }
    }  

    class Humanoid extends CharacterStats {
    constructor(attributes){
        super(attributes);
        this.newTeam = attributes.team;
        this.newWeapons = attributes.weapons;
        this.newLanguage = attributes.language;
        
    }   
        greet(){
            return (`${this.newName} offers a greeting in ${this.newLanguage}.`)
        }     
    }

    const mage = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        healthPoints: 5,
        name: 'Bruce',
        team: 'Mage Guild',
        weapons: [
          'Staff of Shamalama',
        ],
        language: 'Common Tongue',
      });
    
      const swordsman = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 2,
          height: 2,
        },
        healthPoints: 15,
        name: 'Sir Mustachio',
        team: 'The Round Table',
        weapons: [
          'Giant Sword',
          'Shield',
        ],
        language: 'Common Tongue',
      });
    
      const archer = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 4,
        },
        healthPoints: 10,
        name: 'Lilith',
        team: 'Forest Kingdom',
        weapons: [
          'Bow',
          'Dagger',
        ],
        language: 'Elvish',
      });
    
      console.log(mage.newCreatedAt); // Today's date
      console.log(archer.newDimensions); // { length: 1, width: 2, height: 4 }
      console.log(swordsman.newHealthPoints); // 15
      console.log(mage.newName); // Bruce
      console.log(swordsman.newTeam); // The Round Table
      console.log(mage.newWeapons); // Staff of Shamalama
      console.log(archer.newLanguage); // Elvish
      console.log(archer.greet()); // Lilith offers a greeting in Elvish.
      console.log(mage.takeDamage()); // Bruce took damage.
      console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    
    
      // Stretch task: 
      // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
      // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
      // * Create two new objects, one a villain and one a hero and fight it out with methods!