# Lesson 03: let and const

In modern JavaScript, the old way of declaring variables using `var` is considered outdated and error-prone.  
Instead, we use `let` and `const` for cleaner, safer, and more predictable code.

---

## Why should we avoid `var`?

- `var` is **function-scoped**, not **block-scoped**, which means it ignores curly braces like `if {}` or `for {}`.
- Variables declared with `var` can be **redeclared**, which might lead to bugs.
- Most developers expect block scope, and `var` behaves unexpectedly.

---

### Example – Unexpected behavior of `var`:

```js
if (true) {
  var message = "Hello from inside";
}
console.log(message); // Works! Even though it was inside the if block!
```
Explanation:
Even though message was declared inside the if, it "leaks" outside because var is scoped to the whole function or global scope.

---
### Use `let` when the value might change:
```js
let score = 0;
score = 10; // Works fine
```
- `let` is block-scoped.
- The value can be reassigned.
  
 ---

### Use `const` when the value should stay the same:
```js
if (true) {
  let message = "Hi";
  const greeting = "Hello";
}

console.log(message);  // ❌ ReferenceError  
console.log(greeting); // ❌ ReferenceError
```
- `const` is block-scoped.  
- The value cannot be reassigned.
- You should use const by default unless you know the value will change.
- 
  ---
### Summary
- `let`: block-scoped, value can be reassigned.  
- `const`: block-scoped, value cannot be reassigned.  
- `var`: avoid using it – it's function-scoped and allows redeclaration.

---

### Best Practice:
Use `const` by default. Use `let` only when you plan to reassign the variable later. Avoid `var` completely in modern JavaScript.

