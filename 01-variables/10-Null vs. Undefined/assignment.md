# Assignment: Null vs Undefined

## Problem

Textio has lots of legacy code that checks if specific values are null. Just to be safe, the engineering team decided on a standard where variables that aren't declared with a specific value should be set to null instead of the default undefined. 

Fix the code so that each variable holds a null value.

```js
let sentMessages;
let deliveredMessages;
let failedMessages;

// don't touch below this line

console.log("Sent is null:", sentMessages === null);
console.log("Delivered is null:", deliveredMessages === null);
console.log("Failed is null:", failedMessages === null);
```
---
## Solution
To make sure each variable holds a null value instead of the default undefined, we will assign null to each of the variables.
```js
let sentMessages = null;
let deliveredMessages = null;
let failedMessages = null;

// don't touch below this line

console.log("Sent is null:", sentMessages === null); // true
console.log("Delivered is null:", deliveredMessages === null); // true
console.log("Failed is null:", failedMessages === null); // true
```
---
## Explanation
- By default, JavaScript variables are assigned undefined if they are declared but not initialized.
- In this exercise, we explicitly set each variable (sentMessages, deliveredMessages, and failedMessages) to null to match the company's coding standard.
- The comparison sentMessages === null checks if the variable is specifically null (and not undefined), ensuring that the variable holds an empty value intentionally.
---
## Conclusion
- Use null when you want to explicitly set a variable as empty or intentionally undefined.
- Avoid using undefined unless the variable has been declared but not yet assigned a value.

