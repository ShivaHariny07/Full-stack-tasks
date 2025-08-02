// 1. Functional Programming Concepts
function divide(a, b) {
  return a / b;
}
const digits = [10, 5];
const extendedDigits = [...digits, 2];
console.log("Original digits:", digits);        // [10, 5]
console.log("Extended digits:", extendedDigits);  // [10, 5, 2]

// 2. Event Loop and Asynchronous JavaScript
console.log('Start');
setTimeout(() => {
  console.log('End - setTimeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Middle - Promise');
});
console.log('Just after start');

// 3. JavaScript Data Types & Type Coercion
console.log(typeof 42);          // number
console.log(typeof null);        // object (quirk)
console.log('' == false);        // true
console.log('' === false);       // false
console.log(Boolean(0));         // false
console.log(Boolean("Shiva"));  // true

// 4. Error Handling (try/catch/finally)
try {
  let output = unsafeOperation();
} catch (err) {
  console.log("Handled Error:", err.message);
} finally {
  console.log("Finished error handling");
}
function unsafeOperation() {
  throw new Error("Unexpected failure!");
}

// 5. Object Property Shorthand & Computed Property Names
const brand = "Adidas", cost = 1200;
const item = { brand, cost };
console.log(item); // { brand: "Adidas", cost: 1200 }

const dynamicKey = "offer";
const promo = {
  [dynamicKey]: "20%"
};
console.log(promo); // { offer: "20%" }

// 6. Spread and Rest Operators in Depth
const drinks1 = ["Coffee", "Tea"];
const drinks2 = ["Juice", "Water"];
const allDrinks = [...drinks1, ...drinks2];
console.log(allDrinks); // ["Coffee", "Tea", "Juice", "Water"]

function addTax(rate, ...prices) {
  return prices.map(price => price + price * rate);
}
console.log(addTax(0.1, 50, 100, 200)); // [55, 110, 220]

// 7. Template Literals & Tagged Templates
const name = "Shiva Hariny";
const welcomeMsg = `Hello ${name},\nEnjoy exploring JavaScript!`;
console.log(welcomeMsg);

function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) =>
    acc + str + (values[i] ? `**${values[i].toUpperCase()}**` : ''), '');
}
const taggedResult = highlight`Mastering ${'js'} is really ${'awesome'}`;
console.log(taggedResult); // Mastering **JS** is really **AWESOME**
