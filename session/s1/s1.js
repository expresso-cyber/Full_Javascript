/* ==========================================================================
   SESSION 1: JAVASCRIPT VARIABLES, SCOPE RULES & DATA TYPES
   ========================================================================== */

console.log("=== SESSION 1: VARIABLES & DATA TYPES ===");

// ==========================================================================
// 1. VARIABLE DECLARATION & INITIALIZATION
// ==========================================================================

/* 
 * CONCEPT: Variable Declaration
 * 
 * Simple Words Definition: 
   Telling the computer that a variable exists and giving it a name (reserving an empty box).
 * 
 * Interview Prep Definition: 
   An instruction introducing an identifier into a scope and allocating a slot for 
   it in the execution context's lexical environment prior to value evaluation.
 */

// Standalone declarations (without initialization) work only with var and let
var a; // Function-scoped (hoisted as undefined)
let b; // Block-scoped (resides in Temporal Dead Zone until initialized)


/* 
 * CONCEPT: Constant Variable Requirement
 * 
 * Simple Words Definition: 
   A 'const' variable cannot be created empty; it must be assigned a value immediately.
 * 
 * Interview Prep Definition: 
   Constants must be initialized at declaration time. Omitting initialization raises a 
   SyntaxError ("Missing initializer in const declaration") at parse time.
 */

const c = 10; // Must declare and initialize at the same time

/* 
 * CONCEPT: Variable Initialization
 * 
 * Simple Words Definition: 
   Assigning the very first value to a variable that was previously declared.
 * 
 * Interview Prep Definition: 
   The initial binding of a value to an allocated memory address during execution context setup.
 */

a = 10;
b = 20;


/* 
 * CONCEPT: Combined Declaration + Initialization
 */

var x = 70;
let y = 20;
const z = 43;


/* 
 * CONCEPT: Re-declaration vs Re-assignment
 * 
 * Simple Words Definition: 
   - Re-declaration: Creating a variable with the same name again (allowed ONLY for var).
   - Re-assignment: Changing the value inside an existing variable (allowed for var and let).
 * 
 * Interview Prep Definition: 
   - Re-declaration: Re-defining an identifier in the same lexical scope; disallowed for let/const.
   - Re-assignment: Mutating the value binding of an identifier reference; disallowed for const.
 */

// Re-declaration (Only allowed with 'var')
var x = 40;

// Re-assignment (Allowed for 'var' and 'let', but NOT 'const')
x = 66;
y = 44;


// ==========================================================================
// 2. PRIMITIVE DATA TYPES
// ==========================================================================

/* 
 * CONCEPT: Primitive Data Types
 * 
 * Simple Words Definition: 
   Basic, single values that are immutable (cannot be altered directly in memory).
 * 
 * Interview Prep Definition: 
   Data that is not an object and has no methods. Stored directly on the stack 
   by value. There are 7 primitive data types in JavaScript.
 */

// a) String: Represents textual data enclosed in quotes
let str = "Hello";

// b) Number: Handles both integers and floating-point decimal numbers
let num = 56;       // Integer
let num1 = 12.43;   // Floating-point decimal

// c) Boolean: Represents logical states (true or false)
let isReady = true;
isReady = false;

// d) Undefined: Represents a variable that has been declared but not assigned a value
let un;

// e) Null: Represents an intentional absence of any object value
// Note: typeof null returns "object" due to a historical JavaScript bug
let nullVal = null;

// f) BigInt: Used for handling arbitrarily large integers beyond Number.MAX_SAFE_INTEGER
let bigNum = 2342323534523453464575686785745n;

// g) Symbol: Guaranteed unique and immutable primitive value, often used as unique object keys
let sym = Symbol("id");


// ==========================================================================
// 3. NON-PRIMITIVE (REFERENCE) DATA TYPES
// ==========================================================================

/* 
 * CONCEPT: Non-Primitive / Reference Data Types
 * 
 * Simple Words Definition: 
   Complex data structures (like lists or collections) that store multiple values.
 * 
 * Interview Prep Definition: 
   Objects, Arrays, and Functions stored on the heap memory and accessed by memory reference. 
   They are mutable—their properties/elements can be modified even when declared with 'const'.
 */

// Array: Ordered list of values
const arr = [1, 2, 3, 4, 5, 6, 6, 7];

// Object: Collection of key-value pairs
const obj = {
    id: 4,
    key: 78
};


// ==========================================================================
// 4. INTERACTIVE TASK: PROMPT INPUT ADDITION
// ==========================================================================

/* 
 * CONCEPT: Explicit Type Casting with prompt()
 * 
 * Simple Words Definition: 
   prompt() always returns user input as text (String). We must wrap it in Number() 
   so JavaScript performs math addition instead of joining strings together.
 * 
 * Interview Prep Definition: 
   The prompt() Web API returns a String primitive. Performing arithmetic operations 
   requires explicit type coercion (e.g., Number(value)) to prevent trigger of 
   the '+' operator's string concatenation overload.
 */

if (typeof prompt !== "undefined") {
    let s = Number(prompt("Enter first number:"));
    let g = Number(prompt("Enter second number:"));

    console.log("Addition: ", s + g, "\nType of Number: ", typeof (s + g));
}