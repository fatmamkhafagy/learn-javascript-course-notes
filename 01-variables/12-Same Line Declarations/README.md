## Lesson 12 - Same Line Declarations

### Overview
In JavaScript, you can declare multiple variables in the same line. This technique helps keep your code concise and organized, especially when variables are closely related.
### Concept
- Declaring multiple variables on the same line can save space and improve readability.
- It's useful when you're declaring constants or variables that are logically connected.  
  - It is useful to declare variables on the same line when the variables are related in meaning or function.
  - For example, when declaring variables that hold 
  values related to each other, like averageOpenRate and displayMessage in the previous example, these variables are related because they share the same context 
  (messages).

   Example: If you have two values related to each other, like:
```js
let name = "John", age = 30;
```
     These two variables are related because they store information about the same person. In this case, it makes sense to declare them on the same line since they 
     are connected.

     In summary: If the variables share the same purpose or meaning, it is appropriate to declare them on the same line.
### Example
Here’s an example of declaring multiple variables on one line:
```js
let miles = 80276, org = "Tesla";
```
---
This is the same as:

```js
let miles = 80276;
let org = "Tesla";
```
---
### Key Points
- Same Line Declarations allow you to declare multiple variables in a single line.  
- You can use `let` or `const` for this purpose.  
- It makes your code cleaner and helps group related variables together.

