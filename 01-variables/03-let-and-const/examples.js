// Example 1: Using let
let mySkillIssues = 42; // Declare a variable using let and assign it a value
mySkillIssues = 43;     // You can change the value later
console.log("Let Example:", mySkillIssues); // Output: Let Example: 43

// Example 2: Using const
const fixedSkillValue = 42; // Declare a constant that cannot be changed
// fixedSkillValue = 43; ❌ This will cause an error: Assignment to constant variable
console.log("Const Example:", fixedSkillValue); // Output: Const Example: 42

// Example 3: Scope difference between var and let/const
if (true) {
  var usingVar = "I'm using var"; // var is function-scoped, not block-scoped
}
console.log("Using var outside block:", usingVar); // ✅ This works because var ignores block scope

if (true) {
  let usingLet = "I'm using let";     // let is block-scoped
  const usingConst = "I'm using const"; // const is also block-scoped
  console.log("Inside block with let/const:", usingLet, usingConst); // ✅ Works inside the block
}

// console.log(usingLet);  ❌ ReferenceError: usingLet is not defined
// console.log(usingConst); ❌ ReferenceError: usingConst is not defined
// These won't work because let and const are only available inside their block

//  Best practice:
// Use const by default for values that don't change
// Use let only when you need to reassign the value
