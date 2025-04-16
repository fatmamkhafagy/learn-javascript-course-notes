##  Assignment: Fix the Conditional Bug

###  Instructions:

There is a small bug in the code below.  
Your task is to fix the conditional so that the program **only sends the message** if the message length is **less than or equal to** the allowed maximum length.

---

###  Starter Code:

```js
let messageLen = 10;
let maxMessageLen = 20;

console.log(
  "Trying to send a message of length:",
  messageLen,
  "and a max length of:",
  maxMessageLen,
);

// don't touch above this line

if (messageLen > maxMessageLen) {
  console.log("Message sent");
} else {
  console.log("Message not sent");
}
```
---
## What Should Happen:
- If messageLen is less than or equal to maxMessageLen, it should log:
```mathematica
Message sent
```
- Otherwise, it should log:

```mathematica

Message not sent
```
---
## Hint:
You need to change the condition on the if statement to match the requirement above.

---
## Solution
 Only check the solution after trying the assignment yourself!
```js
let messageLen = 10;
let maxMessageLen = 20;

console.log(
  "Trying to send a message of length:",
  messageLen,
  "and a max length of:",
  maxMessageLen,
);

// don't touch above this line

if (messageLen <= maxMessageLen) {
  console.log("Message sent");
} else {
  console.log("Message not sent");
}
```
 > Now the message is only sent if its length is less than or equal to the maximum.




