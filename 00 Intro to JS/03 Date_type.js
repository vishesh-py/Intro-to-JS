// Data type in JavaScript
// There are 8 data types in JavaScript, which can be categorized into two main groups: primitive and non-primitive (or reference) data types.

// 1. Primitive Data Types:
// These are the basic data types that are immutable (cannot be changed) and are compared by their value. The primitive data types in JavaScript are:
// - Number: Represents numeric values, both integers and floating-point numbers. Example: 42, 3.14
// - String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, World!", 'JavaScript'
// - Boolean: Represents a logical value that can be either true or false. Example: true, false
// - Undefined: Represents a variable that has been declared but has not been assigned a value. Example: let x; // x is undefined
// - Null: Represents the intentional absence of any object value. Example: let y = null; // y is null
// - Symbol: Represents a unique and immutable value that can be used as an identifier for object properties. Example: const sym = Symbol('description');

// 2. Non-Primitive (Reference) Data Types:
// These are more complex data types that can hold multiple values and are compared by their reference (memory address). The non-primitive data types in JavaScript are:
// - Object: Represents a collection of key-value pairs, where each key is a string (or symbol) and the value can be of any data type. Example: const obj = { name: "John", age: 30 };
// - Array: Represents an ordered list of values, which can be of any data type. Example: const arr = [1, 2, 3, "four", true];
// - Function: Represents a reusable block of code that can be called with arguments and can return a value. Example: function add(a, b) { return a + b; }

// Example Number :

console.log(42); // Output: 42
console.log(3.14); // Output: 3.14
console.log(-7); // Output: -7

// Example String :

console.log("Hello, World!"); // Output: Hello, World!
console.log('JavaScript');

// Example Boolean :

console.log(true);
console.log(false);

//Example Undefined :

let x;
console.log(x); // Output: undefined    

//Example Null :

let y = null;
console.log(y); // Output: null

//Example Symbol :

const sym = Symbol('description');
console.log(sym); // Output: Symbol(description)    

// Example Object :

const obj = { name: "John", age: 30 };
console.log(obj); // Output: { name: 'John', age: 30 }
console.log(obj.name); // Output: John

// Example Array :

const arr = [1, 2, 3, "four", true];
console.log(arr); // Output: [ 1, 2, 3, 'four', true ]
console.log(arr[0]); // Output: 1
console.log(arr[3]); // Output: four

// Example Function :

function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8    

// We will study array, fucntion, object in detail in upcoming modules.