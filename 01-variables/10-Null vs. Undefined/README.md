
# Lesson 09: Null vs. Undefined in JavaScript

## Introduction
JavaScript has **two different values** that represent "nothing":

- `undefined`: It means the variable **has no value** yet. (It's very nothing.)
- `null`: It means the variable **has a value**, but the value is intentionally empty. (It's kinda nothing.)

This is a bit confusing at first, especially if you're coming from languages like Python where you only have one thing like `None`.

---

## Real-Life Analogy
- `undefined`: You open a drawer and it's empty — because **you never put anything inside**.
- `null`: You open a drawer and there's a note inside saying "Nothing here" — you **put that note on purpose**.

---

##  Basic Examples
```js
let myName;
console.log(myName); // undefined → No value was assigned

let myAge = null;
console.log(myAge); // null → Value was assigned, but it means empty
```

---

## 🧪 typeof null (Weird Quirk)
```js
console.log(typeof null); // "object"
```
This is a **bug in JavaScript** from the early days. Technically, `null` is its own type, but `typeof null` returns `object` because of a historical issue.

---

## Equality Comparison: `==` vs `===`
| Expression | Result | Explanation |
|------------|--------|-------------|
| `5 == "5"`       | `true`  | Compares value only (type is ignored) |
| `5 === "5"`      | `false` | Compares value **and** type (strict equality) |
| `null == undefined`   | `true`  | They both mean "nothing" loosely |
| `null === undefined`  | `false` | Different types and meanings |

### Use `===` when you want to be **100% sure** the value and type match. It's more reliable.

---

## Summary
- `undefined`: Variable declared but not given a value yet.
- `null`: Variable explicitly set to be empty.
- `typeof null` returns `"object"` (a known bug).
- Use `===` for strict comparisons.
- Many teams prefer to assign `null` instead of leaving variables `undefined` for clarity.

> JavaScript is one of the few languages that makes a distinction between these two. Most of the time, they behave similarly, but **knowing the difference helps avoid bugs and confusion**.
