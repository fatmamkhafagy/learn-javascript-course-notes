// Example 1: Dynamic Typing (changing types)
let value = 10;     // Number
value = "hello";    // Now it's a String
console.log(value); // "hello"

// Example 2: Weak Typing (type coercion)
let number = 10;
let text = "5";
let result = number + text;
console.log(result); // "105" (String, not a number!)


// Example 3: String Concatenation vs Numerical Addition

// Adding numbers:
let sum = 10 + 5;
console.log(sum); // 15 (Numerical addition)

// Concatenating strings:
let concatenation = "10" + "5";
console.log(concatenation); // "105" (String concatenation)

// Mixing a number with a string:
let mixedResult = 10 + "5";
console.log(mixedResult); // "105" (String concatenation, not addition)


// Example 4: Practical Example with an Array of Mixed Types
let mixedArray = [1, "2", 3];
console.log(mixedArray[0] + mixedArray[1]); // "12" (Concatenation, not addition)


// Example 5: Implicit Type Conversion (Subtraction)
let implicitConversionResult = "10" - 5;  // "10" is a string, but JavaScript converts it to a number.
console.log(implicitConversionResult);  // 5 (Number after conversion)
