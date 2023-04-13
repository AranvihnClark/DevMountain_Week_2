////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

// Creates a function called 'copyArrToCamelCase' where 'arr' is the value we submit to the function.
// In this example, we would take the array 'lotr'.
const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        // Taking the value of the array 'arr' at index i and storing it into a temporary variable called 'str'.
        // As noted in the above array, the first index is 'biLbO BaGGINs'.
        const str = arr[i] 

        // We are splitting the string and storing it into a second temporary variable as an array.
        // We get two strings in the array, ['biLbO', 'BaGGINs']
        const splitStr = str.split(' ') 

        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            // Taking the index x's split string in the array and storing it in the temporary variable 'word'
            // First this will affected 'biLbO'
            let word = splitStr[x] 
            
            // Lower case the split string so that we can properly evaluate it.
            // Turns 'biLbO' to 'bilbo'
            word = word.toLowerCase() 

            // Checks to see if 'x' does not equal 0. False, because x does equal 0.
            // As such, 'bilbo' does not go through the if statement - only the second index 'baggins' will got through.
            if (x !== 0) { 
                // Takes the first letter, capitalizes it, and then addes the rest of the word to complete it once more.
                // Turns 'baggins' to 'Baggins'
                word = word.charAt(0).toUpperCase() + word.slice(1) 
            }
            // Takes the once empty string and adds the word we just created onto the string.
            camelCaseStr += word // After both iterations of 'x', we arrive at 'bilbo baggins'.
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

// Creates a function via arrow function called 'copyArrToSnakeCase' where 'arr' is the value we submit to the function.
const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        // Storing 'arr' at index 'i' and storing it into the temporary variabl 'str'
        // str = 'Frodo bAGGINS'
        let str = arr[i]

        // Turning any uppercase letters in the variable 'str' and turning them lowercase.
        // str = 'frodo baggins'
        str = str.toLowerCase()

        // Splitting the variable 'str' via the method '.split(" ")' into an array of multiple strings.
        // Then stores them into the temporaray variable 'splitStr'.
        // splitstr = ['frodo', 'baggins']
        const splitStr = str.split(' ')

        // Combines both strings in array 'splitStr' via the method '.join("_")' to make one string.
        // Stores the new string in variable 'snakeCaseStr'.
        // snakeCaseStr = 'frodo_baggins'
        const snakeCaseStr = splitStr.join('_')

        // Adds the new string in variable 'snakeCaseStr' to the end of the array 'newArr'.
        // newArr = ['frodo_baggins'] // And then whatever is left in the array we sent into the function will run.
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE
// The Higher Order Function
const copyArrAndChange = (arr, cb) => {
    let results = [];
    for(let i = 0; i < arr.length; i++) {
        let newValue = cb(arr[i]);
        results.push(newValue);
    }
    return results;
}

// Callback Functions
const copyToCamelCaseCB = str => {
        const splitStr = str.split(' ');
        let camelCaseStr = '';
        for (let i = 0; i < splitStr.length; i++) {
            let word = splitStr[i];
            word = word.toLowerCase() 
            if (i !== 0) word = word.charAt(0).toUpperCase() + word.slice(1);
            camelCaseStr += word;
        }
        return camelCaseStr;
}

const copyStrToSnakeCaseCB = str => str = str.toLowerCase().split(' ').join('_');

// Proof of work
console.log(copyArrAndChange(lotr, copyToCamelCaseCB));
console.log(copyArrAndChange(lotr, copyStrToSnakeCaseCB));

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////
const numsArray = [1, 2, 3, 4, 5, 6, 7];

const multiplyByTen = (num) => num * 10;

let mappedNums = numsArray.map(multiplyByTen);

console.log(mappedNums);
/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const turnPink = () => `pink`;

// = colors.map()
// colors.map(element) takes all the elements in the 'colors' array and runs them through the function one at a time.

const mappedColors = colors.map(turnPink);

// const mappedColors = colors.map((element) => {
//     let primary = [`red`, `yellow`, `blue`];
//     let isPrimary = primary.includes(element);
//     return {
//         color: element,
//         isPrimary: isPrimary
//     }
// })

console.log(mappedColors);

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
    // This becomes the higher order function
    return names.map(name =>`Hello, ${name}`);
}

console.log(formalGreeting(formalNames));

// Call formalGreeting passing in the formalNames array


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA = places.filter(city => city.charAt(0) === `A`); // = places.filter()

console.log(placesThatStartWithA);

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    Make sure to use the arrow function in conjunction with the filter method
    Your returned value should be a single object, not an array with one object inside of it
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.
// CODE HERE
const identifier = arr => {
    // 'element => element.programmer' is checking to see if there is a 'programmer' key that exists in the project. If so, return true.
    const filtered = arr.filter(element => element.programmer)
    return filtered[0]
}

console.log(identifier(jobs));

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
    return numbers.reduce((accumulater, current) => accumulater * current);
}


// CODE HERE
console.log(productOfArray(numsToReduce));


// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]
// = expenses.reduce(//callback, //initial value)
const remaining = expenses.reduce((a, c) => a - c.amount, budget);

console.log(remaining);