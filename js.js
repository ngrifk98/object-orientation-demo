class Dog {
    constructor(name, color){
      this.name = name;
      this.color = color;
    }

    bark(){
      console.log('Arf! I am', this.name, 'the dog!');
    }
}

let dog1 = new Dog('Freida', 'brown');
let dog2 = new Dog('Sally', 'pink');

console.log(dog1.name)  // Freida
console.log(dog2.name)  // Sally

dog1.bark()    // Arf, I'm Freida the dog!
dog2.bark()    // Arf, I'm Sally the dog!

