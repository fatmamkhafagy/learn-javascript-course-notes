// 📁 Lesson 09: Examples for Null vs. Undefined

// Example 1: Variable declared but not assigned
// Like opening a drawer and never putting anything inside
let firstName;
console.log("firstName:", firstName); // undefined

// Example 2: Variable intentionally assigned to null
// Like putting a note inside the drawer that says "Nothing here"
let lastName = null;
console.log("lastName:", lastName); // null

// Example 3: Function that returns undefined by default
// Functions return undefined if they don’t explicitly return something
function doNothing() {}
console.log("Return value:", doNothing()); // undefined

// Example 4: Function that returns null intentionally
// Returning null to show that a user was not found
function findUser(id) {
  if (id === 0) return null; // No user found
  return { id: id, name: "User" };
}
console.log("findUser(0):", findUser(0)); // null
console.log("findUser(5):", findUser(5)); // { id: 5, name: 'User' }

// Example 5: typeof null (bug)
// JavaScript quirk: typeof null returns "object", but null is not actually an object
console.log("typeof null:", typeof null); // object

// Example 6: Equality comparison
// == checks value only, === checks both value and type
console.log(null == undefined);  // true
console.log(null === undefined); // false
