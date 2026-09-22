/* ==========================================================================
   SESSION 2: JAVASCRIPT OPERATORS, EXPRESSIONS & PRACTICE PROBLEMS
   ========================================================================== */

console.log('=== SESSION 2: OPERATORS & LOGIC ===')

// ==========================================================================
// 1. MATHEMATICAL / ARITHMETIC OPERATORS
// ==========================================================================

/* 
 * Simple Words Definition: 
   Math symbols (+, -, *, /, %, **) used to calculate numbers, along with 
   shortcuts (++ and --) that add or subtract 1 from a variable.
 * 
 * Interview Prep Definition: 
   Unary and binary operators that take numerical operands and evaluate to 
   a single numeric value. Arithmetic operations with string operands invoke 
   implicit coercion algorithms (e.g., string concatenation with '+').
 */

// Basic Arithmetic Operations
let a = 10
let b = 5

let res = a + b
console.log('Addition result variable:', res) // 15

let x = 2
let y = 4

console.log('Addition (+):', x + y) // Output: 6
console.log('Subtraction (-):', x - y) // Output: -2
console.log('Multiplication (*):', x * y) // Output: 8
console.log('Division (/):', x / y) // Output: 0.5
console.log('Exponentiation (**):', x ** y) // 2^4 = 16

/* 
 * CONCEPT: Pre-Increment/Decrement vs. Post-Increment/Decrement
 * 
 * Simple Words Definition:
   - Pre-increment (++x): Modifies the variable FIRST, then uses the new value.
   - Post-increment (x++): Uses the current value FIRST, then modifies the variable.
 * 
 * Interview Prep Definition:
   Unary mutation operators. Pre-operators (++x / --x) mutate the variable in memory 
   and evaluate to the newly updated value. Post-operators (x++ / x--) evaluate to 
   the original primitive value before executing the side-effect mutation.
 */

// Increments
console.log('Pre-Increment (++x):', ++x) // Increments x to 3 FIRST, then prints 3
console.log('Post-Increment (y++):', y++) // Evaluates current y (4) FIRST, then increments y to 5
console.log('Value of y after post-increment:', y) // Output: 5

// Pre & Post Increment Logic Breakdown
// State before execution: x = 3, y = 5
console.log(++x, x++) // ++x makes x=4 (returns 4). x++ returns 4, then makes x=5. Output: 4 4
console.log('Value of x after pre & post increment:', x) // Output: 5

// Complex Compound Expression Breakdown:
// State before execution: x = 5, y = 5
// Expression: x++ (uses 5, x becomes 6) + y++ (uses 5, y becomes 6) + ++y (y becomes 7, uses 7) + y++ (uses 7, y becomes 8)
// Sum: 5 + 5 + 7 + 7 = 24
console.log('Compound Expression Result:', x++ + y++ + ++y + y++) // Output: 24
console.log('Value of y after expression execution:', y) // Output: 8

// Decrements
console.log('Pre-Decrement (--x):', --x) // Decrements x from 6 to 5 FIRST, then returns 5
console.log('Post-Decrement (x--):', x--) // Evaluates current x (5) FIRST, then decrements x to 4

// ==========================================================================
// 2. ASSIGNMENT OPERATORS
// ==========================================================================

/* 
 * Simple Words Definition: 
   Math shortcuts (+=, -=, *=, /=) that perform an operation and automatically 
   save the updated result back into the same variable.
 * 
 * Interview Prep Definition: 
   Operators that evaluate an expression on the right-hand side, apply an arithmetic 
   operation to the left-hand operand, and re-bind the new value to the variable.
 */

let s = 30
let g = 40

s += g // Equivalent to: s = s + g (30 + 40 = 70)
console.log('Addition Assignment (s += g):', s) // 70

s -= g // Equivalent to: s = s - g (70 - 40 = 30)
console.log('Subtraction Assignment (s -= g):', s) // 30

s *= g // Equivalent to: s = s * g (30 * 40 = 1200)
console.log('Multiplication Assignment (s *= g):', s) // 1200

s /= g // Equivalent to: s = s / g (1200 / 40 = 30)
console.log('Division Assignment (s /= g):', s) // 30

// ==========================================================================
// 3. COMPARISON OPERATORS
// ==========================================================================

/* 
 * Simple Words Definition: 
   Symbols used to compare two values, returning true or false. == checks if 
   values look identical; === checks if both value and data type match.
 * 
 * Interview Prep Definition: 
   Relational operators returning boolean predicates. Loose equality (==) executes 
   the Abstract Equality Comparison Algorithm (performing type coercion). 
   Strict equality (===) compares operands without type conversion.
 */

let d = 22
let e = '22'

// Abstract vs Strict Equality
console.log('Loose Equality (d == e):', d == e) // true (coerces string "22" to number 22)
console.log('Strict Equality (d === e):', d === e) // false (Number vs String)

// Relational Comparison
console.log('Greater Than (d > e):', d > e) // false
console.log('Less Than (d < e):', d < e) // false
console.log('Greater Than or Equal (d >= e):', d >= e) // true
console.log('Less Than or Equal (d <= e):', d <= e) // true

// Inequality
console.log("Abstract Inequality (10 != '10'):", 10 != '10') // false (coerces types; values match)
console.log("Strict Inequality (10 !== '10'):", 10 !== '10') // true (types differ)

// ==========================================================================
// 4. LOGICAL OPERATORS
// ==========================================================================

/* 
 * Simple Words Definition: 
   Used to combine multiple boolean conditions. && requires all conditions to 
   be true, || requires at least one true, and ! flips true to false.
 * 
 * Interview Prep Definition: 
   Operators used to evaluate conditional logic with short-circuiting capability. 
   Evaluation stops as soon as the final outcome is determined without checking 
   remaining operands.
 */

let hasAge = true
let hasID = false

console.log('Logical AND (&&):', hasAge && hasID) // false (both conditions must be true)
console.log('Logical OR (||):', hasAge || hasID) // true (at least one condition is true)
console.log('Logical NOT (!):', !hasID) // true (flips false to true)

// ==========================================================================
// 5. TERNARY OPERATOR & PRACTICE EXERCISES
// ==========================================================================

/* 
 * Simple Words Definition: 
   A compact one-line version of an if-else statement: (condition ? trueResult : falseResult).
 * 
 * Interview Prep Definition: 
   The only JavaScript operator accepting three operands. Unlike if-else statements, 
   the ternary operator is an expression that evaluates directly to a value.
 */

// Example: Voting Eligibility
let age = 34
let isEligible = age >= 18 ? 'You can Vote' : 'You are not eligible for voting'
console.log('Eligibility:', isEligible)

// --- SESSION 2 PRACTICE QUESTIONS ---

// Practice 1: Positive or Negative Number Check
let c = -10
const isPositive = c >= 0 ? 'Positive' : 'Negative'
console.log('Is Positive:', isPositive)

// Practice 2: Find Largest Number
let f = 10
let h = 20
const findLargest = f > h ? 'f is greater' : 'h is greater'
console.log('Largest:', findLargest)

// Practice 3: Even or Odd Number Check
let num = 21
const isEven = num % 2 === 0 ? 'even' : 'odd'
console.log('Is Even:', isEven)
