# 📝 Assignment: JavaScript Numbers

## Objective:
Practice working with JavaScript numbers, perform arithmetic operations, and understand how to check types and integer values.

---

## Tasks:

1. **Basic Operations**
   - Create two variables: `a = 10`, `b = 3`
   - Perform and log the following operations:
     - Addition (`a + b`)
     - Subtraction (`a - b`)
     - Multiplication (`a * b`)
     - Division (`a / b`)
     - Modulus (`a % b`) — to get the remainder

2. **Type Checking**
   - Use `typeof` to check the type of the following values:
     - `20`
     - `20.5`
     - `NaN`
     - `Infinity`

3. **Integer Check**
   - Use `Number.isInteger()` to check if the following are integers:
     - `42`
     - `7.25`
     - `Infinity`

4. **Extra Challenge (Optional)**
   - Write a function called `isWholeNumber` that takes a number and returns `"Whole Number"` if it's an integer, or `"Decimal"` if it's not.

---

## Example Output:

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a / b); // 3.333...

console.log(typeof NaN);      // "number"
console.log(Number.isInteger(7.25)); // false

// Bonus function
function isWholeNumber(num) {
  return Number.isInteger(num) ? "Whole Number" : "Decimal";
}
```
---
```js
// lesson7-solution.js

// 1. Basic Operations
let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1

console.log("---");

// 2. Type Checking
console.log("typeof 20:", typeof 20);         // "number"
console.log("typeof 20.5:", typeof 20.5);     // "number"
console.log("typeof NaN:", typeof NaN);       // "number"
console.log("typeof Infinity:", typeof Infinity); // "number"

console.log("---");

// 3. Integer Check
console.log("Is 42 an integer?", Number.isInteger(42));       // true
console.log("Is 7.25 an integer?", Number.isInteger(7.25));   // false
console.log("Is Infinity an integer?", Number.isInteger(Infinity)); // false

console.log("---");

// 4. Extra Challenge - Function to check whole or decimal number
function isWholeNumber(num) {
  return Number.isInteger(num) ? "Whole Number" : "Decimal";
}

// Testing the function
console.log("Check 10:", isWholeNumber(10));     // Whole Number
console.log("Check 5.75:", isWholeNumber(5.75)); // Decimal
