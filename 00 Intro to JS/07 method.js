// Method is javaScript function that is associated with an object.
//  It is a property of an object that holds a function definition. 
// Methods are used to perform actions on the object or to manipulate its properties.

// SYNTAX - 'example string'.methodName()   


// Converts all characters to UPPERCASE
let name = 'vishesh';
console.log(name.toUpperCase()); // VISHESH

// Converts all characters to lowercase
let college = 'GGITS';
console.log(college.toLowerCase()); // ggits

// Checks if a string starts with a given character/word
let text = 'Hello';
console.log(text.startsWith('H')); // true
console.log(text.startsWith('h')); // false

// Checks if a string ends with a given character/word
let file = 'notes.pdf';
console.log(file.endsWith('.pdf')); // true

// Checks if a string contains something
let sentence = 'I love JavaScript';
console.log(sentence.includes('Java')); // true

// Removes extra spaces from start and end
let userName = '   Vishesh   ';
console.log(userName.trim()); // Vishesh

// Replaces old text with new text
let msg = 'I love Python';
console.log(msg.replace('Python', 'JavaScript')); // I love JavaScript

// Returns character at a specific index
let word = 'Hello';
console.log(word.charAt(0)); // H
console.log(word.charAt(1)); // e

// Extracts part of a string
let course = 'JavaScript';
console.log(course.slice(0, 4)); // Java