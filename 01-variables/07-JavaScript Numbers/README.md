
# Lesson 7: JavaScript Numbers

In JavaScript, all numeric values are represented by a single data type: `number`.

Unlike some other programming languages (like Java, Python, or C#) that differentiate between integers and floating-point numbers, JavaScript treats **all numbers** the same — whether they are whole numbers or decimals.

---

## Key Concepts

- JavaScript only has one number type: `number`.
- This type includes both integers and floating-point values.
- Basic arithmetic operations (+, -, *, /) work as expected.

---

## Examples

```js
// Addition
2 + 1; // 3

// Subtraction
2 - 1; // 1

// Multiplication
2 * 2; // 4

// Division
3 / 2; // 1.5 (still a number)

// Check the type

console.log(typeof 5);   // "number"
console.log(typeof 5.5); // "number"
```
---
### Summary
- In JavaScript, there’s no such thing as “integers” or “floating-point numbers” as separate types like in other languages.
- All numbers are treated as the same type: number — whether it's 5 or 5.5, the type is the same.

You can perform operations like addition, subtraction, multiplication, and division normally, and the result will always be of type number.

For example:
```js
console.log(typeof 5);   // "number"
console.log(typeof 5.5); // "number"
```
Both will return "number".

---

### Extra Notes
#### 1. NaN and Infinity are also number types 
In JavaScript, even when you get weird results like NaN or Infinity, they are still treated as number type!
- NaN (Not a Number) appears when doing invalid math, like dividing a word by a number.
- Infinity appears when dividing a number by 0.
#### Example:
```js
console.log(typeof NaN);      // "number"
console.log(typeof Infinity); // "number"
```
---

#### 2. Checking if a number is an integer
You can use the built-in method Number.isInteger() to check whether a value is an integer (whole number) or not.

#### Example:
```js
console.log(Number.isInteger(5));   // true ✅
console.log(Number.isInteger(5.5)); // false ❌
```
---
Even though both values are of type number, this method helps you distinguish between whole numbers and decimals.

---

### Quick Recap
In JavaScript, there’s only one number type — called number.

There’s no difference between whole numbers and decimals. They’re both just number.

### Examples:
5 → number ✅

5.5 → number ✅

NaN → still a number ✅

Infinity → also a number ✅

### Basic Operators:
+ → addition

- → subtraction

* → multiplication

/ → division

% → modulus (gives the remainder after division)

### Type Check:
Use typeof to check the type:
```js
console.log(typeof 10); // "number"
```
---
### Check if a value is an integer:
Use Number.isInteger():

```js
Number.isInteger(10);   // true ✅
Number.isInteger(5.75); // false ❌
```
---
### Bonus Function: Check whole vs decimal
```js
function isWholeNumber(num) {
  return Number.isInteger(num) ? "Whole Number" : "Decimal";
}
```



