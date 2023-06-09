/* 
JavaScript Operators.
JavaScript operators are symbols that are used to perform operations on operands. For example: +, -, *, / etc.
JavaScript Operators are classified into following categories.
1. Arithmetic Operators
2. Comparison (Relationsl) Operators
3. Bitwise Operators
4. Logical Operators 
5. Assignment Operators
6. Special Operators
7. Ternary/Conditional Operator
*/

// 1. Arithmetic Operators
// Arithmetic operators are used to perform arithmetic/mathematical operations on operands. For example: +, -, *, / etc.

// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

// Example
var a = 10;
var b = 20;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a % b); // 10
console.log(++a); // 11
console.log(--b); // 19

// 2. Comparison (Relationsl) Operators
// Comparison operators are used to compare two operands. For example: ==, !=, >, < etc.

// Operator	Description
// ==	Equal to
// ===	Equal value and equal type
// !=	Not equal
// !==	Not equal value or not equal type
// >	Greater than
// <	Less than
// >=	Greater than or equal to
// <=	Less than or equal to

// Example
var a = 10;
var b = 20;

console.log(a == b); // false

var c = "10";
console.log(a == c); // true
console.log(a === c); // false

console.log(a != b); // true
console.log(a !== b); // true

console.log(a > b); // false
console.log(a < b); // true

console.log(a >= b); // false
console.log(a <= b); // true

// 3. Bitwise Operators
// Bitwise operators are used to perform bitwise operations on operands. For example: &, |, ^ etc.

// Operator	Description
// &	Bitwise AND
// |	Bitwise OR
// ^	Bitwise XOR
// ~	Bitwise NOT
// <<	Left shift
// >>	Right shift
// >>>	Zero fill right shift

// Example
var a = 10; // Binary: 1010
var b = 20; // Binary: 10100

console.log(a & b); // 0
console.log(a | b); // 30
console.log(a ^ b); // 30
console.log(~a); // -11
console.log(a << b); // 10485760
console.log(a >> b); // 0
console.log(a >>> b); // 0


// 4. Logical Operators
// Logical operators are used to combine conditional statements. For example: &&, ||, ! etc.

// Operator	Description
// &&	Logical AND
// ||	Logical OR
// !	Logical NOT

// Example
var a = 10;
var b = -20;

console.log(a > 0 && b > 0); // false
console.log(a > 0 || b > 0); // true
console.log(!(a > 0)); // false

// 5. Assignment Operators
// Assignment operators are used to assign values to variables. For example: =, +=, -= etc.

// Operator	Description
// =	Assign
// +=	Add and assign
// -=	Subtract and assign
// *=	Multiply and assign
// /=	Divide and assign
// %=	Modulus and assign


// Example
var a = 10;
var b = 20;

console.log(a); // 10
console.log(b); // 20

a += b;
console.log(a); // 30

a -= b;
console.log(a); // 10

a *= b;
console.log(a); // 200

a /= b;
console.log(a); // 10

a %= b;
console.log(a); // 10


// 6. Special Operators
// Special operators are used to perform special tasks. For example: delete, typeof etc.

// Operator	Description
// delete	Delete an object
// typeof	Returns the type of an object
// instanceof	Returns true if an object is an instance of an object type

// Example
var a = 10;
var b = 20;

console.log(delete a); // false
console.log(typeof a); // number
console.log(a instanceof Number); // false

// 7. Ternary/Conditional Operator
// Ternary operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

// Syntax
// condition ? expr1 : expr2

// Example
var age = 20;
var type = (age >= 18) ? "Adult" : "Child";
console.log(type); // Adult

// Example
var age = 10;
var type = (age >= 18) ? "Adult" : "Child";
console.log(type); // Child

