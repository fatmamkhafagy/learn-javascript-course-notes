 2. `examples.js`

```js
// Example: Declared but undefined
let favoriteSandersonCharacter;
console.log(typeof favoriteSandersonCharacter); // "undefined"

// Example: Undeclared (will throw an error)
try {
  console.log(favoriteRothfussCharacter); // ReferenceError
} catch (error) {
  console.log("Error:", error.message);
}

// const must be assigned a value immediately
// const favoriteSandersonCharacter; // ❌ SyntaxError

const favoriteMistbornCharacter = undefined;
console.log(favoriteMistbornCharacter); // undefined
