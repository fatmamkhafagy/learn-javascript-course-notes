##  Title: Conditionals

> In programming, "Conditionals" are also known as "if statements" or decision-making statements.

---

###  What This Lesson Is About

This lesson will teach you how to write code that **performs certain actions only if a specific condition is true**.

In other words, you're telling the computer:

> "If something happens, do this. If not, do something else."

---

###  What Does "Conditionals" Mean?

Simply put, it's a way for your code to **make decisions** based on what's happening in your program.

For example:
- If the user enters the correct password → log them in
- If not → show an error

---

###  Why Are Conditionals Important?

Because they help you write **smart, dynamic code** that responds to situations — not just a fixed script that runs the same way every time.

Any game, website, or app in the world uses conditionals at its core.

---

##  Syntax of `if`, `else if`, and `else`

```js
if (condition) {
  // code to run if condition is true
} else if (anotherCondition) {
  // code to run if the previous condition was false and this one is true
} else {
  // code to run if none of the above conditions are true
}

```
---
## Example:
```js
let height = 5;

if (height > 6) {
  console.log("You are super tall!");
} else if (height > 4) {
  console.log("You are tall enough!");
} else {
  console.log("You are not tall enough!");
}
```
- If `height` is greater than 6 → prints "super tall"  
- If not, but still greater than 4 → prints "tall enough"  
- Otherwise → prints "not tall enough"

---
## Common Comparison Operators
You’ll use these in your conditions:

`===`  strictly equal (same value and type)

`!==`  not equal

`<`  less than

`>`  greater than

`<=` less than or equal to

`>=` greater than or equal to

---
## Summary
- `if`, `else if`, and `else` help your program make decisions.
- Conditions use comparison operators like `>`, `===`, etc.
- You can combine conditions to make your logic smarter.

> Think like this: "If this is true, do something... if not, do something else!"


