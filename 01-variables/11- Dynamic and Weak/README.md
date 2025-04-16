# Lesson 11: Dynamic and Weak Typing in JavaScript

## What You'll Learn

In this lesson, you'll learn:

- What it means that JavaScript is a **dynamically-typed** language.
- What it means that JavaScript is a **weakly-typed** language.
- The difference between string concatenation and numerical addition.
- How to avoid type coercion bugs in your code.

---

## What is Dynamic Typing?

> JavaScript is dynamically-typed, which means:

- You do **not need to declare a type** for your variables.
- The type is **determined when the code runs**, not before.
- A variable’s type can **change at any time** during the program.

### Example:

```js
let value = 10;     // Number
value = "hello";    // Now it's a String
```
---

### Why It Matters
- This flexibility makes coding faster, but it can also cause problems if you're not paying attention.
- When JavaScript lets you change a variable's type — like from a number to a string — without doing anything special, it makes writing code easier. You don’t have to define types like in other languages.
- But at the same time, if you're not focused, you might write code thinking you're adding two numbers, but in reality, you're combining a number with a string — and you end up with the wrong result (like "10050" instead of 150).

So it's a double-edged sword:
- Great for speed,
- Risky if you don’t catch the mistake.
---
 ### What is Weak Typing?
JavaScript is weakly-typed, which means:

- It will automatically convert types when mixing different data types in operations.
- You can accidentally add numbers and strings together without errors, but get unexpected results.

Example:
```js
let number = 10;
let text = "5";
let result = number + text;

console.log(result); // "105" (String, not a number!)
```
---
>JavaScript turns the number into a string and joins them.
---
##  Difference Between String Concatenation and Numerical Addition

Here’s the difference between **adding numbers** and **concatenating strings**:

- **Adding numbers**: 
    - When both operands are numbers, JavaScript performs **numerical addition**.
    - Example: `10 + 5` → `15`.

- **Concatenating strings**: 
    - When one or both operands are strings, JavaScript **concatenates** them.
    - Example: `"10" + "5"` → `"105"`.

- **Mixing a number with a string**: 
    - If one operand is a number and the other is a string, JavaScript converts the number to a string and **concatenates**.
    - Example: `10 + "5"` → `"105"` (not 15).

---

**Summary**:
- `10 + 5` = **15** (Numerical addition)
- `"10" + "5"` = **"105"** (String concatenation)
- `10 + "5"` = **"105"** (String concatenation, not addition)

Always check the types before using the `+` operator!

---
So:
- can mean add or combine + , depending on types.
- Always check variable types when using +.

---
## How to Avoid Type Coercion Bugs
- **To prevent these bugs**:
    - Always ensure your variables are the expected type before using them.
    - Convert explicitly when needed:
```js
let received = "50";
received = Number(received); // Now it's a number
```
- **Or, use type-safe inputs**:
 ```js
 let received = 50; // Already a number
```
 - **Use typeof to debug**:
```js
console.log(typeof received); // tells you if it's "number" or "string"
```
---
## Summary

- **Dynamically Typed**:  
    - Variable types are determined at runtime.
- **Weakly Typed**:  
    - JavaScript performs automatic type conversion when mixing different types (e.g., numbers and strings).
- **Common Bug**:  
    - Adding a number and a string results in string concatenation.  
    - Example: `"100" + 50` → `"10050"` (Not `150` as expected).
- **Solution**:  
    - Always check the types before performing operations.  
    - Use `Number()` to convert strings to numbers if needed.



