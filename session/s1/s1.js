console.log("Hello")

// ! Variables in js

// ~ var, let , const

// ? Declaration: Standalone declaration (without initialization) works only with var and let
// Note: A declaration is like reserving a table at a restaurant or naming a new folder on your computer.You are telling the computer, "Hey, I am creating a box. Its name is userAge. Please remember this name because I will put a value inside it later." At this stage, the box is empty—you are just claiming the name so no one else can use it.
// * Definition 1: A declaration is simply telling the computer that a variable exists and giving it a name.
// * Definition 2: A declaration is a statement that introduces an identifier (the variable name) into a program's scope and allocates a slot for it in the execution context.
var a;
let b;


// ? Note:
const c = 10; // We cannot simply declare a constant variable without initialization; we must declare + initialize at the same time, otherwise it will throw: "SyntaxError: Missing initializer in const declaration"


// ? Initialization
// * Definition: In computer programming, initialization is the process of assigning an initial (first) value to a variable, object, or data structure at the time it is created
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
let un;

// ? e) null
// Represents the intentional absence of any object value
let nullVal = null

// ? f) BigInt
// Used for handling arbitrarily large integers beyond the safe limit of regular numbers (e.g., 9007199254740991n)

let bigNum = 2342323534523453464575686785745n

// ? g) Symbol
// Used to create unique, anonymous primitive values (often as unique object keys)
let sym = Symbol("id")


// ^ Non-Primitive Data-types => Non-primitive data types (also called reference types) are more complex data structures that can store collections of values or functional entities. They are mutable (their internal data can be changed) and stored by reference in memory.

// ~ array , object

// arr 
const arr = [1, 2, 3, 4, 5, 6, 6, 7]

// object
const obj = {
    id: 4,
    key: 78
}



// ! Task: Add two number using prompt
// Note: prompt() returns a string, so Number() is needed to prevent string concatenation
let s = Number(prompt("Enter first number:"))
let g = Number(prompt("Enter second number:"))


console.log("Addition: ", s + g, "\nType of Number: ", typeof (s + g))