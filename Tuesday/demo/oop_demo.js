// OOP Demo

let person = {
    firstName: "Michael",
    lastName: "Scott",
    age: 34
};

// console.log(person.firstName);

let meal = {
    appetizer: 'cheese sticks',
    entree: 'chicken parm',
    dessert: 'ice cream',
    drink: 'coke'
};

let {dessert} = meal;
// console.log(dessert);

let {entree, appetizer} = meal;
// console.log(entree);
// console.log(appetizer);

let {dessert: sweets} = meal;
// console.log(sweets);

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal;
// console.log(myAppetizer);
// console.log(myEntree);
// console.log(myDessert);
// console.log(myDrink);

// for (let key in meal) {
//     console.log(`${key} is ${meal[key]}`);
// }

// for (let objectKey in person) {
//     console.log(`${objectKey} is ${person[objectKey]}`);
// }

person.job = `Web Developer`;
// console.log(person);

person.pets = [`chicken`, `duck`, `hamster`];

// console.log(person);

person.pets.push(`dog`);
// console.log(person);
// console.log(person.pets[1]);

// console.log(person);

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
}

// console.log(teams);
// delete teams.teamFour;
// console.log(teams);

// cars

class Car {
    constructor (make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.miles = 0;
    }
    drive(milesToDrive) {
        this.miles += milesToDrive;
    }
}

let myCar = new Car(`Chevorlet`, `Malibu`, 2022, `Silver`);
let theirCar = new Car(`Jeep`, `Grand Cherokee`, 1991, `white`)
console.log(myCar);
console.log(theirCar);

myCar.drive(15000);
theirCar.drive(222000);

console.log(`My car's miles are now at ${myCar.miles}.`);
console.log(`Their car's miles are now at ${theirCar.miles}.`);

class Sedan extends Car {
    constructor(make, model, year, color, type) {
        super(make, model, year, color);
        this.type = type;
        this.passengerCount = 5;
    }
}

let vinsonsCar = new Sedan (`Tesla`, `Model 3`, `2025`, `Matte Black`, `Electric`);
console.log(vinsonsCar);

vinsonsCar.drive(100);
console.log(`Vinson's car's miles are now at ${vinsonsCar.miles}.`);