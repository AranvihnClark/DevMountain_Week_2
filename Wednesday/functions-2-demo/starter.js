////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const calculater = (num1, num2, cb) => {
  if (+num1 && +num2) return cb(+num1, +num2);
  else return `Please enter proper numbers`;
}

// console.log(calculater(2, `9`, add));
// console.log(calculater(2, `9`, multiply));

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
// Apply discount by percentage or by rate. We have to pass discount as a decimal.
const rateDiscount = (product, discount) => {
  product.displayPrice = product.displayPrice * (1 - discount);
  console.log(`${product.name}'s price is now: $${product.displayPrice}`);
}
const flatDiscount = (product, discount) => {
  product.displayPrice -= discount;
  console.log(`${product.name}'s price is now: $${product.displayPrice}`);
}

const applyDiscounts = (arr, cb, discount) => {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i], discount);
  }
}

//applyDiscounts(dogProducts, rateDiscount, .50);

// Apply discount by categories
const categoryDiscount = (arr, cb, discount, category) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].category === category) {
      cb(arr[i], discount);
    }
  }
}

// categoryDiscount(dogProducts.concat(catProducts), flatDiscount, 2, 1);
// categoryDiscount(dogProducts.concat(catProducts), rateDiscount, .25, 2);
// Apply discount by according to inventory
const inventoryDiscount = (arr, cb, discount, count) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].inventory < count) {
      cb(arr[i], discount);
    }
  }
}

inventoryDiscount(dogProducts.concat(catProducts), flatDiscount, 2, 50);

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
