/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes){
        this.newCreatedAt = attributes.createdAt;
        this.newName = attrs.name;
        this.newDimensions = attrs.dimensions;
    }

    destroy(){
        return `${this.newName} was removed from the game.`
      }
  };


  class CharacterStats extends GameObject {
      constructor(attributes) {
        this.newHealthPoints = attributes.healthPoints
        super(attributes);
      }
      takeDamage(){
        return (`${this.newName} took damage.`);
      }
    }  

