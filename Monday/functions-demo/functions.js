// Create a variable that tracks Jon’s health.
let jonHealth = 100; // data-type: number

console.log(typeof jonHealth, jonHealth);

// change the above to a string.

jonHealth = String(jonHealth);
console.log(typeof jonHealth, jonHealth);

let theWinnerIs = "Jamie is the winner.";

// Strings are immuatble, so the replace method needs to be stored somewhere as the original variable will not be changed.
let newWinnerIs = theWinnerIs.replace("Jamie", "Jon");
console.log(newWinnerIs);


if (newWinnerIs.includes('Jon')) console.log(`Name has been replaced properly`);
else console.log(`Name has not been replaced properly`);

// Converting string to kebab case: "jon-is-the-winner"
let newString = newWinnerIs.toLowerCase().split(' ').join('-');
console.log(newString);

// Functions - Any declarations of functions are hoisted to the top as if though they were first.
function isJonAlive() {
    if (jonHealth > 0) console.log(`Jon is still alive with ${jonHealth} HP.`);
    else console.log(`Jon snow has been slain`);
}

// Calling the function
isJonAlive();

// function with parameters with an expression - A fucntion declared like this, as an expression, does NOT get hoisted to the top.
const surpriseAttack = attack => {
    jonHealth -= attack;
    return isJonAlive();
}
surpriseAttack(55);
surpriseAttack(55);

// Function with multiple arguments
// Let's create a function which helps 2 people greet each other

const greeting = (person1, person2) => console.log(`${person1} says hello to ${person2}`);

greeting(`Vinson`, `Melissa`);
greeting(`DJ`, `Ashley`);

// Function

function rollDice() {
    return Math.ceil(Math.random() * 6);
}

console.log(rollDice());

function mulitplyDice() {
    const temp1 = rollDice();
    const temp2 = rollDice();
    console.log(`Your first roll is ${temp1}.`);
    console.log(`Your second roll is ${temp2}.`);
    let multiple = temp1 * temp2
    return multiple;
}
console.log(`Your two dice equal:`, mulitplyDice(), `\b.`);