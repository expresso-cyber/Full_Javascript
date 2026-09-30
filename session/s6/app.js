/* ==========================================================================
   SESSION 5: OBJECTS, NESTED STRUCTURES & ARRAY/OBJECT PRACTICE QUESTIONS
   ========================================================================== */

console.log("=== SESSION 5: ADVANCED OBJECTS & ARRAY PRACTICE ===");

// ==========================================================================
// 1. ARRAY OF OBJECTS & NESTED STRUCTURES
// ==========================================================================

/* 
 * CONCEPT: Array of Objects
 * 
 * Simple Words Definition: 
   A list (array) where every item inside is a detailed object containing key-value pairs.
 * 
 * Interview Prep Definition: 
   A composite data structure combining ordered collection mechanics (Array indexing) 
   with structured entity representations (Key-Value Object mapping). 
   Elements are accessed via array subscript notation followed by object property accessor dot/bracket notation.
 */

// Line 1: Declare an array containing two student/user objects
const arr = [
    {
        id: 1,
        name: "name1"
    },
    {
        id: 2,
        name: "name2",
        address: [
            "address1",
            "address2"
        ]
    }
];

// Line 2: Extract references to array elements by index
let dataOf = arr[0];  // First object in array
let dataOf1 = arr[1]; // Second object in array

// Line 3: Print individual stored object references
console.log("First element object:", dataOf);
console.log("Second element object:", dataOf1);

// Line 4: Print complete array of objects
console.log("Array of objects => ", arr);

// Line 5: Access properties of the first object using bracket notation
console.log("First Object data using key => ", dataOf["id"], dataOf["name"]);

// Line 6: Access properties & nested array of the second object using dot and bracket notation
console.log("Second Object data using key & dot => ", dataOf1["id"], dataOf1["name"], dataOf1.address);


// ==========================================================================
// 2. OBJECTS WITH DUPLICATE KEYS (NUANCE & BEHAVIOR)
// ==========================================================================

/* 
 * CONCEPT: Duplicate Property Keys in Object Literals
 * 
 * Simple Words Definition: 
   If you write the same property name twice inside an object, JavaScript keeps ONLY the last one you wrote.
 * 
 * Interview Prep Definition: 
   ES6+ strict mode and standard execution dictate that when duplicate keys are specified in an object literal, 
   the final key definition overwrites any previous definitions for that key during parsing.
 */

// Line 7: Declare object with duplicate keys ('id' and 'name')
const obj = {
    id: 1,
    name: "abc",
    id: 2,      // Overwrites id: 1 -> id becomes 2
    name: "def", // Overwrites name: "abc" -> name becomes "def"
    address: [
        "abc",
        "def"
    ]
};

// Line 8: Printing obj outputs { id: 2, name: 'def', address: [...] }
console.log("Object with overwritten duplicate keys:", obj);

// Line 9: Accessing overwritten key values
console.log("obj.name => ", obj.name);       // Output: "def"
console.log("obj.address => ", obj.address); // Output: ["abc", "def"]


// ==========================================================================
// 3. 15 PRACTICE QUESTIONS & SOLVED BUGS
// ==========================================================================

console.log("\n--- Practice Questions ---");

// --- Question 1: Access First and Last Array Element ---
/*
 * CONCEPT: Array Indexing & Length Property
 * Formula for last element: array[array.length - 1]
 */
let studentName = ["Rohan", "Ajay", "Vijay", "Roshan", "Rahul"];
let len = studentName.length;

console.log("Q1) Entire Array:", studentName);
console.log("Q1) First Element:", studentName[0]);       // "Rohan"
console.log("Q1) Last Element:", studentName[len - 1]); // "Rahul"


// --- Question 2: Add Elements to Array using push() ---
/*
 * CONCEPT: Array.prototype.push()
 * Appends one or more items to the end of an array.
 */
let fruits = ["Apple", "Banana"];
fruits.push("Mango", "Orange");
console.log("Q2) Updated Fruits Array => ", fruits);


// --- Question 3: Remove Last Element using pop() ---
/*
 * CORRECTION NOTE: 
 * Fixed bug in original code where 'fruits.pop()' was erroneously printed instead of 'removedVal'.
 */
let nums = [1, 2, 3, 4, 5];
let removedVal = nums.pop(); // Removes 5

console.log("Q3) Removed Value => ", removedVal); // Output: 5
console.log("Q3) Updated Array => ", nums);       // Output: [1, 2, 3, 4]


// --- Question 4: Add Elements to Beginning using unshift() ---
/*
 * CONCEPT: Array.prototype.unshift()
 * Prepends elements to the start of an array.
 */
let cities = ["Mumbai", "Pune"];
cities.unshift("Delhi", "Nashik");
console.log("Q4) Cities => ", cities); // ["Delhi", "Nashik", "Mumbai", "Pune"]


// --- Question 5: Remove First Element using shift() ---
/*
 * CONCEPT: Array.prototype.shift()
 * Removes the element at index 0 and shifts remaining elements down.
 */
let stud2 = ["Ajay", "Paramveer", "Vishal", "Yash"];
stud2.shift(); // Removes "Ajay"
console.log("Q5) Updated student array => ", stud2);


// --- Question 6: Convert Array to Space-Separated String using join() ---
/*
 * CONCEPT: Array.prototype.join(separator)
 * Concatenates all array elements into a single string.
 */
let arr1 = ["HTML", "CSS", "JAVASCRIPT", "REACT"];
console.log("Q6) Converted array into single string => ", arr1.join(" "));


// --- Question 7: Convert Array to Star-Separated String using join() ---
/*
 * CORRECTION NOTE: 
 * Fixed variable reference bug where 'arr1' was called instead of 'arr2'.
 */
let arr2 = ["Rahul", "Priya", "Rohan", "Vikas"];
console.log("Q7) String with '*' separator => ", arr2.join("*"));


// --- Question 8: Merge Two Arrays using concat() ---
/*
 * CONCEPT: Array.prototype.concat()
 * Combines two or more arrays into a new array without mutating the original arrays.
 */
let a1 = ["HTML", "CSS", "JAVASCRIPT"];
let a2 = ["NODE", "EXPRESS", "MONGODB"];

let new_arr = a1.concat(a2);
console.log("Q8) Concatenated Array => ", new_arr);


// --- Question 9: Insert / Replace Elements using splice() ---
/*
 * CORRECTION NOTE:
 * Fixed invalid parameter syntax: 'splice(start, deleteCount, ...items)'. 
 * Passing strings like "Kiwi" as deleteCount coerces to 0/NaN. 
 * Correct usage uses numeric deleteCount (e.g., 0 to insert, 1 to replace).
 */
let new_fruits = ["Apple", "Banana", "Orange", "Grapes"];

// Insert "Kiwi" at index 2 without deleting any item (deleteCount = 0)
new_fruits.splice(2, 0, "Kiwi");
console.log("Q9) After Splice Insert ('Kiwi'): ", new_fruits);

// Replace item at index 2 with "Mango" (delete 1 item, insert "Mango")
new_fruits.splice(2, 1, "Mango");
console.log("Q9) After Splice Replace ('Mango'): ", new_fruits);


// --- Question 10: Delete Specific Element using splice() ---
/*
 * CONCEPT: Deleting elements with splice(startIndex, deleteCount)
 */
let remEl = ["Apple", "Banana", "Mango", "Orange"];
remEl.splice(1, 1); // Removes 1 item starting at index 1 ("Banana")
console.log("Q10) Array after deleting element at index 1 => ", remEl);


// --- Question 11: Alphabetical Sorting using sort() ---
/*
 * CONCEPT: Array.prototype.sort()
 * Sorts string elements in place according to UTF-16 code units.
 */
let names = ["Rahul", "Amit", "Neha", "Priya", "Karan"];
let new_names = names.sort();
console.log("Q11) Alphabetically Sorted Names => ", new_names);


// --- Question 12: Reverse Array using reverse() ---
/*
 * CONCEPT: Array.prototype.reverse()
 * Reverses the elements of an array in place (mutates original array).
 */
let asc = [10, 20, 30, 40, 50];
let des = asc.reverse();
console.log("Q12) Reversed Array => ", des);


// --- Question 13: Read Object Properties ---
/*
 * CONCEPT: Object Dot Notation Access
 */
let students = {
    name: "Vikas",
    age: 24,
    city: "Mumbai",
    course: "Full Stack"
};

console.log("Q13) name: ", students.name);
console.log("Q13) age: ", students.age);
console.log("Q13) city: ", students.city);
console.log("Q13) course: ", students.course);


// --- Question 14: Modify Object Property Value ---
/*
 * CONCEPT: Object Property Mutation
 */
let new_stud = {
    name: "Rahul",
    age: 25,
    city: "Pune"
};

new_stud.age = 22; // Updates age from 25 to 22
console.log("Q14) Updated Student Object => ", new_stud);


// --- Question 15: Access Nested Object Properties ---
/*
 * CONCEPT: Nested Object Property Chaining
 * Accessing nested objects via chain: object.nestedObject.property
 */
let new_obj = {
    name: "Rohan",
    age: 24,
    div: 'B',
    address: {
        city: "Mumbai",
        state: "Maharashtra",
        pincode: 401209
    }
};

console.log("Q15) name => ", new_obj.name);
console.log("Q15) city => ", new_obj.address.city);
console.log("Q15) state => ", new_obj.address.state);
console.log("Q15) pincode => ", new_obj.address.pincode);