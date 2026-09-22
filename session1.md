console.log("Hello")

// ! Variables in js

// ~ var, let , const

// ? Declaration , Declaration can be work with only two variables
var a;
let b;



// ? Note: 
const c = 10; // We cannot declare a constant variable, we have to declare + initialize, otherwise it will throw the error : "Constant variable cannot be declared"



// ? Initialization
a = 10
b = 20



// ? Declaration + Initialization
var x = 70
let y = 20
const z = 43

// ? re-declaration, we can re-declare only var variable not let, const
var x = 40


// ? re-assignment, we can re-assign var and let variable not const
x = 66
y = 44


// ! Data Types - Primitive and non- primitive

// ^ Primitive data types: Primitive data types are basic, built-in types that hold a single, simple value. They are immutable (cannot be changed once created) and stored directly by their value.

// ? a) string
let str = "Hello" // Represents textual data enclosed in quotes


// ? b) number 
// Represents both integer and floating-point numeric values
// * integer example
let num = 56 
// * floating number , i.e, Decimal Number
let num1 = 12.43


// ? c) boolean 
// Represents a logical entity with two values, true or false

let isReady = true
isReady = false

// ? d) undefined 
// Assigned to a variable that has been declared but not yet given a value.


// ? e) null
// Represents the intentional absence of any object value
let nullVal = null

// ? f) BigInt
// Used for handling arbitrarily large integers beyond the safe limit of regular numbers (e.g., 9007199254740991n)

let bigNum = 2342323534523453464575686785745n



// ^ Non-Primitive Data-types => Non-primitive data types (also called reference types) are more complex data structures that can store collections of values or functional entities. They are mutable (their internal data can be changed) and stored by reference in memory.

// ~ array , object

// arr 
const arr = [1,2,3,4,5,6,6,7]

// object
const obj = {
    id:4,
    key:78
}



// ! Task: Add two number using prompt
let s = Number(prompt("Enter Num1: "))
let g = Number(prompt("Enter Num2: "))


console.log("Addition: ", s+g + '\n', "Type of Number: " , typeof(s+g))