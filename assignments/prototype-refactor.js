/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attrs){
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    }

    destroy(){
        return `${this.name} was removed from the game.`
      }
  };



