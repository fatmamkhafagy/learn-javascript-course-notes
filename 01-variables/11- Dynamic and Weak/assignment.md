 ## Assignment – Fix the Type Error
 ### Task
There is a bug in the following code caused by automatic type coercion (mixing number and string).
```js
let totalSentMessages = 100;
let totalReceivedMessages = "50";  // Problem: totalReceivedMessages is a string

// don't touch below this line
const totalMessages = totalSentMessages + totalReceivedMessages;

console.log("Total messages:", totalMessages);  // This will produce "10050" (string concatenation)

// EXERCISE: Type Coercion Bug Fix

// The problem is that totalReceivedMessages is a string, not a number.
// This is causing the sum to be incorrect, as JavaScript will treat it as a string when performing the addition.

// Step 1: Declare the totalSentMessages variable as a number (it's already correct here)
let totalSentMessages = 100;  // The total sent messages is correctly declared as a number

// Step 2: totalReceivedMessages is initially a string (this causes the bug)
let totalReceivedMessages = "50";  // This is a string, so adding it to a number will result in string concatenation instead of addition

// Step 3: Solution - Convert totalReceivedMessages to a number
totalReceivedMessages = Number(totalReceivedMessages);  // Convert the string "50" to the number 50 using Number()

// Step 4: Calculate totalMessages using the corrected value for totalReceivedMessages
const totalMessages = totalSentMessages + totalReceivedMessages;  // Now the result will be 100 + 50 = 150

// Step 5: Display the results to confirm the fix
console.log("Total sent messages:", totalSentMessages);  // Output: 100 (This remains unchanged)
console.log("Total received messages:", totalReceivedMessages);  // Output: 50 (Now correctly a number)
console.log("Total messages:", totalMessages);  // Output: 150 (Correct sum after the fix)
```
---
## Explanation of the Code:
1- Problem: The initial issue is that `totalReceivedMessages` is a string (`"50"`), which leads to string concatenation when added to `totalSentMessages` (a number). This results in the incorrect output of `"10050"` instead of a correct sum.  
2- Solution: We used `Number()` to convert `totalReceivedMessages` to a number so the addition will be correct.  
3- Expected Output After Fix: 
  - Total sent messages: `100`
  - Total received messages: `50`
  - Total messages: `150`
