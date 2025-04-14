# Assignment: Message Statistics

Textio tracks the number of messages sent for different types of notifications. Between the comments, create:

- A variable `totalMessagesSent` that stores the total number of messages sent.
- A variable `averageMessagesSent` that stores the average number of messages sent across all types.

## Given:

```js
const promoMessages = 12;
const reminderMessages = 15;
const welcomeMessages = 8;
const supportMessages = 5;

// don't touch above this line

// Your code here

// don't touch below this line

console.log("Total messages:", totalMessagesSent);
console.log("Average messages:", averageMessagesSent);
```
---
### Solution
```js
const totalMessagesSent = promoMessages + reminderMessages + welcomeMessages + supportMessages;
const averageMessagesSent = totalMessagesSent / 4;
```
---

