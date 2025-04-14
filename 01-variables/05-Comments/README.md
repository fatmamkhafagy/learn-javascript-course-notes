# Lesson 05: Comments in JavaScript

In JavaScript, comments are used to add explanations or notes within the code. Comments are ignored by the JavaScript engine and do not affect the code's execution. They are helpful for documentation, debugging, and improving code readability.

##  Types of Comments

JavaScript supports two types of comments:

### 1. Single-line Comments
Used for short notes or explanations. Begin with `//`.

```js
// This is a single-line comment
let name = "Alice"; // You can also add a comment after a line of code

```
### 2. Multi-line Comments
Used for longer explanations or to temporarily disable blocks of code. Enclosed between `/*` and `*/`.
```js
/*
  This is a multi-line comment.
  It can span multiple lines.
  None of this will be executed.
*/
```
---
### Best Practices
- Use comments to explain why something is done, not just what is done.
- Avoid over-commenting obvious code.
- Keep comments updated as the code changes.
- You can temporarily disable lines of code using comments when testing or debugging.

**Common reasons to disable code temporarily:**
- To test code without deleting important parts.
- To temporarily stop certain lines if they’re not needed at the moment.
- To understand which parts of the code affect the output.
