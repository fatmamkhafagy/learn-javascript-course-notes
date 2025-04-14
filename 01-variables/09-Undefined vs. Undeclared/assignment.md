# Assignment: Declared but Undefined

Your task is to make sure the following variables are declared, but not assigned a value. This will prevent `ReferenceErrors`.

##  Starter Code

```js
// your code here

// don't touch below this line
console.log("Sent is:", sentMessages);
console.log("Delivered is:", deliveredMessages);
console.log("Failed is:", failedMessages);
```
---
## Expected Output
```js
Sent is: undefined
Delivered is: undefined
Failed is: undefined
```
---
## Solution
```js
// your code here
let sentMessages;
let deliveredMessages;
let failedMessages;

// don't touch below this line
console.log("Sent is:", sentMessages);
console.log("Delivered is:", deliveredMessages);
console.log("Failed is:", failedMessages);
```


