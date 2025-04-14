# Assignment – Fix the Scope Bug

In this exercise, you'll practice using `let` and `const` correctly to avoid unexpected behavior caused by `var`.

---

## The Bug

The following code sends **two birthday messages** instead of one birthday message and one welcome message.

Can you find out why?

```js
var messageText = "Welcome to Textio!";
var isBirthday = true;

if (isBirthday) {
  var messageText = "Happy Birthday!";
  console.log("Sending birthday message...");
  console.log("messageText:", messageText);
}

console.log("Sending welcome message...");
console.log("messageText:", messageText);
```
---
### Your Task
- Replace var with let or const where appropriate.
- Make sure:
- The birthday message appears only inside the if block.
- The welcome message remains unchanged outside the block.
---
### Challenge – Think About It!
- Why did the bug happen in the first place?
- What’s the difference between var and let when it comes to block scope?
- Try changing isBirthday to false — what output do you get then?
> Write your thoughts, or test your answers in an online JavaScript editor.

---

### Solution 
```js
let messageText = "Welcome to Textio!"; // This variable is scoped to the outer block
const isBirthday = true; // We use const here because this value doesn't change

if (isBirthday) {
  let messageText = "Happy Birthday!"; // This is a new variable scoped only to this block
  console.log("Sending birthday message..."); // Expected output
  console.log("messageText:", messageText);   // Output: "Happy Birthday!"
}

console.log("Sending welcome message...");     // This happens after the if block
console.log("messageText:", messageText);      // Output: "Welcome to Textio!"
```
### Explanation:
- let and const are block-scoped, which means the variable inside the if block does not affect the one outside it.
- var is function-scoped, so declaring it inside a block still affects the variable outside the block (which caused the bug).
- Using let inside the if block creates a completely separate variable, so the original welcome message remains untouched.

> Now you're thinking like a developer — spotting small bugs caused by scope issues is a big step toward writing clean code!
