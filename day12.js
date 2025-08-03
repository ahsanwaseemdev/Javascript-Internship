// // 🔰 Program: Understanding Primitive vs Reference Types in JavaScript

// // ✅ Part 1: Primitive Type Behavior
// let lastname = "williams"; // 'lastname' is a primitive string
// let oldlastname = lastname; // 'oldlastname' is a copy of 'lastname'
// lastname = "Davis"; // Changing 'lastname' does NOT affect 'oldlastname'

// console.log(lastname, oldlastname); // Output: Davis williams

// // ✅ Part 2: Reference Type Behavior with Object.assign()
// const jessica = {
//   firstname: "jessica",
//   lastname: "williams",
//   age: 32,
// };

// // Object.assign creates a shallow copy of 'jessica' and adds a new property 'hobby'
// const marriedjessica = Object.assign(
//   {
//     hobby: "swimming",
//   },
//   jessica
// );

// // Modifying the copy
// marriedjessica.lastname = lastname; // Changing lastname to "Davis"
// marriedjessica.color = "white"; // Adding new property 'color'

// // Output both objects
// console.log(jessica); // ⚠️ Also affected due to shallow copy (shared nested values)
// console.log(marriedjessica); // Modified version with extra properties
