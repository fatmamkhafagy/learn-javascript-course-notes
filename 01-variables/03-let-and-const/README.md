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
**Explanation:**
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
  
---
### Common Mistakes

- Trying to reassign a `const` variable (will throw an error).
- Using `var` in modern code (can lead to unexpected bugs).
- Forgetting block scope: thinking a variable declared inside `{}` is available outside it.

---

### Best Practice:
Use `const` by default. Use `let` only when you plan to reassign the variable later. Avoid `var` completely in modern JavaScript.

---

### Quick Comparison Table:
| Keyword | Scope         | Reassignable | Redeclarable | Use Case                     |
|---------|---------------|--------------|---------------|------------------------------|
| var     | Function      | ✅ Yes       | ✅ Yes        | ❌ Avoid in modern JS        |
| let     | Block         | ✅ Yes       | ❌ No         | ✅ Use when value will change |
| const   | Block         | ❌ No        | ❌ No         | ✅ Default choice for variables |

 > Now that you understand `let` and `const`, you're ready to start writing cleaner and safer JavaScript code!

---
### Extra Tip: Can const values change?

- Use `let` when the value needs to change.
- Use `const` when the value should stay the same.

But there's a common confusion:
Even with `const`, sometimes it looks like the value is changing. So let’s clear that up:

---
### What changes with let:
The actual value changes.

```js
let score = 10;
score = 20; // ✅ Works fine
```
---
### What doesn't change with const:
You can’t reassign the variable.
```js
const age = 25;
age = 30; // ❌ Error – can't reassign a const
```
---
### But what if the value is an object?
With const, if the variable holds an object or an array,
you can change the contents, but you can’t replace the whole thing.

Example:
```js

const user = {
  name: "Ali",
  age: 25
};

user.age = 26;           // ✅ You can change a property
user.name = "Mona";      // ✅ You can change another property

user = { name: "Sara" }; // ❌ Error – can't reassign the object
```
So the object stays the same, but you can edit what’s inside.


---

### Summary Table (let vs const)

| Feature / Type           | `const` (object/array)      | `const` (primitive)        | `let`                       |
|--------------------------|-----------------------------|-----------------------------|-----------------------------|
| Can reassign value?      | ❌ No                        | ❌ No                        | ✅ Yes                      |
| Can modify inside?       | ✅ Yes (e.g., change object) | ❌ No (just a value)         | ✅ Yes                      |
| Use case                 | Default for objects/arrays   | Default for fixed values    | Use when value changes      |

----
### Example:
```js
// const primitive
const name = "Sara";
name = "Mona"; // ❌ Error

// const object
const user = { name: "Ali" };
user.name = "Mona";      // ✅ Allowed
user = { name: "Laila" } // ❌ Error – can't reassign the object

// let
let score = 10;
score = 20; // ✅ Allowed
```
