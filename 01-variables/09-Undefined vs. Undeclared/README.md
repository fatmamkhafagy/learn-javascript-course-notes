# Lesson 09: Undefined vs. Undeclared

In JavaScript, there's a difference between a variable that is **undefined** and a variable that is **undeclared**.

## Undefined

An "undefined" variable is one that **has been declared** but **has not been assigned a value** yet.

```js
let favoriteSandersonCharacter;
console.log(typeof favoriteSandersonCharacter); // "undefined"
```

## Undeclared
An "undeclared" variable is one that has never been declared at all. Trying to access it causes a ReferenceError.
```js
console.log(favoriteRothfussCharacter); // ReferenceError: favoriteRothfussCharacter is not defined
```
The error message for undeclared variables says "not defined", which can be confusing — but it actually means the variable was never declared.

---

## const with undefined
Using const without assigning a value will cause a SyntaxError:

```js
const favoriteSandersonCharacter; // ❌ SyntaxError
```
You can technically do this:

```js
const favoriteSandersonCharacter = undefined;
```
…but you can't change it afterward, so it's usually pointless.



