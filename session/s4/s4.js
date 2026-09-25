// String Methods

let str = "I am learning Javascript learning";
// Creates a variable named 'str' and stores the string in it.
// String value: "I am learning Javascript learning"

console.log(str.length);
// .length returns the total number of characters in the string.
// Spaces are also counted.
// Output: 30

console.log(str.toLowerCase());
// Converts the entire string to lowercase.
// Output: "i am learning javascript learning"

console.log(str.toUpperCase());
// Converts the entire string to uppercase.
// Output: "I AM LEARNING JAVASCRIPT LEARNING"

console.log(str.split());
// Splits the string into an array.
// Without an argument, the entire string becomes one array element.
// Output: ["I am learning Javascript learning"]

console.log(str.indexOf("r"));
// Finds the position (index) of the first occurrence of "r".
// JavaScript uses zero-based indexing.
// Output: 8

console.log(str.lastIndexOf("m"));
// Finds the position of the last occurrence of "m".
// Output: 3

console.log(str.slice(-1));
// Extracts characters from the given position to the end.
// -1 means the last character.
// Output: "g"

console.log(str.match(/learning/g));
// Finds all occurrences of "learning" using a regular expression.
// The 'g' flag means "global", so all matches are returned.
// Output: ["learning", "learning"]

console.log(str.concat(", Great"));
// Joins another string to the end of the original string.
// Output: "I am learning Javascript learning, Great"

console.log(str.replace("learning", "hey"));
// Replaces only the FIRST occurrence of "learning".
// Output: "I am hey Javascript learning"

console.log(str.replaceAll("learning", "hey"));
// Replaces ALL occurrences of "learning".
// Output: "I am hey Javascript hey"

console.log(str.startsWith("I"));
// Checks whether the string starts with "I".
// Returns true or false.
// Output: true

console.log(str.endsWith("g"));
// Checks whether the string ends with "g".
// Returns true or false.
// Output: true

console.log(str.charAt(0));
// Returns the character at index 0.
// Index 0 is the first character.
// Output: "I"

console.log(str.isWellFormed());
// Checks whether the string contains well-formed Unicode characters.
// Normal text like this returns true.
// Output: true


// Number Checking

let a = 4;
// Creates a variable 'a' and assigns the number 4 to it.

console.log(isNaN(a));
// isNaN() checks whether a value is "Not a Number".
// Since 4 is a valid number, the result is false.
// Output: false

if (isNaN(a)) {
    // If 'a' is Not a Number, this block will execute.

    console.log("Enter a valid number");
    // Displays a message asking the user to enter a valid number.

} else {
    // If 'a' is a valid number, this block will execute.

    console.log("Valid number");
    // Displays "Valid number".
}


// Number Conversion

let num1 = "12.34abc";
// Stores the text "12.34abc" in the variable num1.
// Notice that this is a STRING, not a number.

console.log(Number(num1));
// Number() tries to convert the entire string into a number.
// "12.34abc" contains non-numeric characters, so conversion fails.
// Output: NaN

console.log(parseInt(num1));
// parseInt() reads the number from the beginning of the string.
// It stops when it encounters a character that is not part of the integer.
// Output: 12

function getData() {
    const res = document.getElementById("name").value
    console.log('res', res)

    const para1 = document.getElementsByTagName('p')
    console.log("para1 => ", para1)


}