

// 1) Mathematical/Arithmetic Operator

// +, -, * , /, %, **, ++, --

let a = 10
let b = 5

let res = a + b
console.log(res)


let x = 2
let y = 4

// Printing the operation of two values
console.log("Additon => ", x + y) // 6
console.log("Subtraction => ", x - y) // -2
console.log("Multiplication => ", x * y) // 8
console.log("Division => ", x / y) // 0.5
console.log("Exponential (Power) => ", x ** y) // 16
console.log("Pre-Increment => ", ++x) // 3
console.log("Post-Increment (print the value then add by 1) => ", y++) // 4
console.log("Post-Increment => (print the value of variable y after post-increment of y) ", y) // 5



// Logic of Pre-Increment and Post-Increment
// Simple Example
console.log(++x, x++) // 4 4
console.log("Value of x after pre and post Increment of simple example ==> ", x)  // 5

// Intermediate Example
console.log(x++ + y++ + ++y + y++) // 5 5 7 7
console.log("Value of x after addition of one post(x) + post(y) + pre(y) + post(y) ==> ", y) // 8



// Logic of Pre-Decrement and post-Decrement
// Do it later



// 2) Assignement operator
// +=, -=, *=, /=

let s = 30
let g = 40


// For addition 
s += g // s = s + g , 70
console.log(s)

// For Subtraction
s -= g // 30
console.log(s)


// For Multiplication
s *= g
console.log(s)

// For Division
s /= g
console.log(s) // 30
// You can see above using assignment operator in all of those the Arithmetic operation will be done first then the resultant value will be assigned to the variable using = sign




// Comparison Operators // Provide output in Bolean Values True and false
// ==, === , >, < , >=, <= , !=, !==, ?

let d = 22
let e = "22"

// ==
console.log(d == e) // == checks only value of variable, here 22 == 22 which is true


// ===
console.log(d === e) // === checks both type and value of variable, so here type of d is number and type of e is string, so 22 is not equal to "22" , therefore it is false

// > and <
console.log(d > e)
console.log(d < e)

// >= and <= 
console.log(d >= e)
console.log(d <= e)

// !=
console.log(10 != "10") // By using only != it converts the string into number then compare the value only

// !==
console.log(10 !== "10") // By using !== it doesn't convert the string, instead it compare both value and type then prints whther it is true or false.

// ? (Ternary Operator)

age = 34
let isEligible = age >= 18 ? "You can Vote" : "You are not eligible for voting"
console.log(isEligible)



// LOGICAL OPERATOR'S
// && , ||

// Do it later




// PRACTICE QUESTION'S

// Find number is Positive or negative
let c = -10
const isPositive = c >= 0 ? "Positive" : "Negative"
console.log("IsPositive: ", isPositive)


// find largest
let f = 10
let h = 20

const findlargest = f > h ? "f is greater" : "h is greater"
console.log("Largest: ", findlargest)

// Even Or odd
num = 21
const isEven = num % 2 == 0 ? "even" : "odd"
console.log("isEven: ", isEven)
