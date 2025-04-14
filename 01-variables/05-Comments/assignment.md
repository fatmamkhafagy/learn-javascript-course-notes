# Assignment - Lesson 05: Comments in JavaScript

## 🧠 Task

The new intern on the team messed up their documentation comment. Your job is to fix the comment so that it does **not include the actual code**, only the explanation.

## 🔧 Fix the comment below:

Current version (incorrect):

```js
// Attention!
/*
  We are increasing the maximum message length from 140 to 280 characters.
  Very reluctantly, I might add.
  Users actually want to write more than 140 characters?!? Madness.
/*

const maxMessageLength = 140;
const newMaxMessageLength = 280;
console.log(
  `Textio is increasing the maximum message length from ${maxMessageLength} to ${newMaxMessageLength} characters.`,
);
```
---
###  Why it's wrong?
- The closing `*/` is missing, so everything below is treated as a comment, including the code.
---
### Your goal:
- Make sure the code is not included inside the comment block.
- Only the message above should be in the comment, and the code should run normally.
---
### Example Output (after fixing):
```js
/*
  We are increasing the maximum message length from 140 to 280 characters.
  Very reluctantly, I might add.
  Users actually want to write more than 140 characters?!? Madness.
*/

const maxMessageLength = 140;
const newMaxMessageLength = 280;
console.log(
  `Textio is increasing the maximum message length from ${maxMessageLength} to ${newMaxMessageLength} characters.`,
);
```




