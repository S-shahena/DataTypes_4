# DataTypes_4
About Lesson
Introduction
Think of JavaScript data types like real-world objects. Some things are simple, like a single book or a number (primitive types). Others are more complex, like a bookshelf that holds multiple books or a recipe with many ingredients (non-primitive types).

In JavaScript, data types are grouped into Primitive and Non-Primitive types. Let’s break this down step by step.

Primitive Data Types
Primitive data types are the simplest, most basic building blocks of data. They are immutable (cannot be changed directly) and hold a single value.

Here are the 7 Primitive Data Types:

Number: For numeric values (integers and decimals).

let age = 25; // Example of a number
console.log(age + 5); // Output: 30
String: For text. Always enclosed in quotes.

let name = "Alice";
console.log("Hello, " + name); // Output: Hello, Alice
Boolean: True or false values.

let isLoggedIn = false;
console.log(isLoggedIn); // Output: false
Undefined: A variable that has been declared but not assigned a value.

let x;
console.log(x); // Output: undefined
Null: Represents “nothing” or “empty”. It’s explicitly assigned.

let noValue = null;
console.log(noValue); // Output: null
Symbol: A unique identifier, often used in advanced programming.

let uniqueKey = Symbol("id");
console.log(uniqueKey); // Output: Symbol(id)
BigInt: For numbers larger than the maximum safe integer.

let bigNumber = 123456789012345678901234567890n; // Use 'n' at the end
console.log(bigNumber); // Output: 123456789012345678901234567890n
Non-Primitive Data Types
Non-Primitive data types (also called reference types) are more complex. They can hold multiple values or a collection of data.

Here are the main non-primitive types:

Object: Used to store key-value pairs.

let person = {
    name: "Alice",
    age: 25,
};
console.log(person.name); // Output: Alice
Array: An ordered list of items.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple
Function: A block of reusable code.

function greet() {
    console.log("Hello!");
}
greet(); // Output: Hello!