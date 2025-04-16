// Example 1: Simple if statement
let age = 18; // Declare a variable 'age' and assign it the value 18

if (age >= 18) { // Check if age is greater than or equal to 18
  console.log("You are allowed to vote"); // If true, print this message
} else {
  console.log("You are not allowed to vote"); // If false, print this message instead
}

// Example 2: Using else if to handle multiple conditions
let height = 5; // Declare a variable 'height' and assign it the value 5

if (height > 6) { // Check if height is greater than 6
  console.log("You are super tall!"); // If true, print this message
} else if (height > 4) { // If not, check if height is greater than 4
  console.log("You are tall enough!"); // If true, print this message
} else {
  console.log("You are not tall enough!"); // If both conditions are false, print this message
}

// Example 3: Conditional with comparison operator (<=)
let messageLen = 10; // Length of the message
let maxMessageLen = 20; // Maximum allowed length

if (messageLen <= maxMessageLen) { // Check if message length is less than or equal to max
  console.log("Message sent"); // If true, the message is sent
} else {
  console.log("Message not sent"); // If false, the message is not sent
}
