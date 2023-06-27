const person = {
    firstname: "Nick",
    lastname: "Kingston",
    favoriteColor: "Green"
}

const {firstname: nickname, lastname: surname, favoriteColor: bestColor} = person

//console.log(nickname)
//console.log(surname)
//console.log(bestColor)

//console.log(person.firstname)
//console.log(person["lastname"])

//const color = "favoriteColor"

//console.log(person[color])

const meal = {
    appetizer: 'spinach dip',
    entree: 'Rollatino',
    dessert: 'tiramisu',
    drink: 'boba milk tea'
}

const {dessert} = meal 
const {appetizer, entree} = meal 
const {drink: myFavoriteTea} = meal 

/* for (plate in meal) {
    console.log(`The key is ${plate} and the value is ${meal[plate]}`)
}
*/

//console.log(dessert)
//console.log(appetizer)
//console.log(entree) 
//console.log(myFavoriteTea)


class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, I'm ${this.name} the ${this.breed} and I'm ${this.age}`);
    }
}

let catsnack = new Dog("Catsnack", "Pitbull", 2);
let red = new Dog("Professor Redlington", "some kind of doodle", 4);
let henri = new Dog("Henri King of the Cosmos", "DSH", 16);

//console.log(catsnack.name);
catsnack.greeting();
red.greeting();
for (let attr in henri) {
    console.log(henri[attr]);
}

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel){
        super(name, breed, age)

        this.trainingLevel = trainingLevel
    }

    piddle(){
        console.log(`${this.name} has peed on the floor`)
    }

    levelUp(num) {
        this.trainingLevel += num 
    }
    
}