/* ==========================================================================
   SESSION 3: MATH OBJECT, SPREAD OPERATOR & CONDITIONAL CONTROL FLOW
   ========================================================================== */

console.log("=== SESSION 3: MATH OBJECT, SPREAD OPERATOR & CONDITIONALS ===");

// ==========================================================================
// 1. BUILT-IN MATH OBJECT METHODS
// ==========================================================================

/* 
 * CONCEPT: The Math Object
 * 
 * Simple Words Definition: 
   A built-in toolbox in JavaScript that gives you pre-made math formulas 
   and utility functions (like rounding, generating random numbers, and finding powers).
 * 
 * Interview Prep Definition: 
   A static standard built-in namespace object (not a constructor function) 
   that exposes properties and static methods for mathematical constants and functions.
 */

// Math.random() -> Generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive)
let randomVal = Math.random();
console.log("Random Value (0 to 1):", randomVal);

// Combining Math.random() and Math.floor() to generate a random integer from 0 to 9
// Math.floor() rounds a decimal DOWN to the nearest whole integer
let randomInt = Math.floor(Math.random() * 10);
console.log("Random Integer (0 to 9):", randomInt);

// Math.sqrt(x) -> Calculates the square root of a given number x
let squareRoot = Math.sqrt(16);
console.log("Square Root of 16:", squareRoot); // 4

// Math.pow(base, exponent) -> Calculates base raised to the power of exponent (equivalent to base ** exponent)
let powerVal = Math.pow(2, 5);
console.log("2 raised to power 5:", powerVal); // 32

// Math.min(...values) -> Returns the smallest value among the provided numeric arguments
let minVal = Math.min(10, 20, 30, 32, 44, 2, 1, 5, 7, 4);
console.log("Minimum Value:", minVal); // 1

// Math.max(...values) -> Returns the largest value among the provided numeric arguments
let maxVal = Math.max(10, 20, 30, 32, 44, 2, 1, 5, 7, 4);
console.log("Maximum Value:", maxVal); // 44


// ==========================================================================
// 2. SPREAD OPERATOR WITH MATH METHODS
// ==========================================================================

/* 
 * CONCEPT: Spread Operator (...) with Functions
 * 
 * Simple Words Definition: 
   Unpacks an array of values into individual standalone items.
 * 
 * Interview Prep Definition: 
   An ES6 syntax feature that expands an iterable (like an Array) into individual 
   arguments in a function call or elements in an array literal.
 */

let numberList = [10, 20, 30, 32, 44, 2, 1, 5, 7, 4];

// Math.max/min expect individual comma-separated arguments, not a single array instance.
// Using '...numberList' unpacks the array elements into individual parameters.
let arrayMax = Math.max(...numberList);
console.log("Max using Spread Operator:", arrayMax); // 44

let arrayMin = Math.min(...numberList);
console.log("Min using Spread Operator:", arrayMin); // 1


// ==========================================================================
// 3. CONDITIONAL STATEMENTS (if / else & Ternary)
// ==========================================================================

/* 
 * CONCEPT: Conditional Statements (if / else if / else)
 * 
 * Simple Words Definition: 
   Decision-making statements used to run different blocks of code depending on whether a condition is true or false.
 * 
 * Interview Prep Definition: 
   Control flow statements that evaluate boolean expressions to determine which branch of code to execute during runtime.
 */

let checkAge = 18;

// Standard if-else statement
if (checkAge >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

/* 
 * CONCEPT: Ternary Operator
 * 
 * Simple Words Definition: 
   A one-line shortcut for writing an if-else condition: (condition ? trueResult : falseResult).
 * 
 * Interview Prep Definition: 
   An inline conditional expression accepting three operands, returning a value based on boolean evaluation.
 */

let ternaryAge = 18;
let voteEligibility = (ternaryAge >= 18) ? "You are eligible to vote" : "You are not eligible to vote";
console.log("Ternary Result:", voteEligibility);


// ==========================================================================
// 4. PRACTICE EXERCISES & BUG FIXES
// ==========================================================================

console.log("\n--- Practice Questions ---");

// --- Question 3: Voting Eligibility with Input Validation ---
let userAge = 28;

if (userAge < 0) {
    console.log("Q3: Age must be a positive number.");
} else if (userAge >= 18) {
    console.log("Q3: Eligible to Vote");
} else {
    console.log("Q3: Not eligible to vote");
}


// --- Question 4: Largest of Two Numbers (Ternary) ---
let n1 = 23;
let n2 = 34;
let largerNum = (n1 > n2) ? n1 : n2;
console.log("Q4: Larger number is ->", largerNum);


// --- Question 5: Largest of Three Numbers using Math.max() ---
let num1 = 23;
let num2 = 34;
let num3 = 56;

let largestOfThree = Math.max(num1, num2, num3);
console.log("Q5: Largest of three numbers ->", largestOfThree);


// --- Question 6: Divisibility by both 3 and 5 ---
let testNumber1 = 15;
const divA1 = 3;
const divB1 = 5;

if (testNumber1 % divA1 === 0 && testNumber1 % divB1 === 0) {
    console.log("Q6: Number is divisible by BOTH 3 and 5.");
} else if (testNumber1 % divA1 === 0 || testNumber1 % divB1 === 0) {
    console.log("Q6: Number is divisible by ONLY ONE of the numbers.");
} else {
    console.log("Q6: Number is not divisible by any of the numbers.");
}


// --- Question 7: Divisibility by 5 and 10 ---
let testNumber2 = 15;
const fNum1 = 5;
const sNum1 = 10;

if (testNumber2 % fNum1 === 0 && testNumber2 % sNum1 === 0) {
    console.log("Q7: Number is divisible by BOTH 5 and 10.");
} else if (testNumber2 % fNum1 === 0 || testNumber2 % sNum1 === 0) {
    console.log("Q7: Number is divisible by ONLY ONE of the numbers (5 or 10).");
} else {
    console.log("Q7: Number is not divisible by any of the numbers.");
}


// --- Question 8: Student Grading System ---
let marks = 99;
let total = 100;
let studentGrade = "";

if (marks >= 0 && marks <= total) {
    if (marks >= 90) {
        studentGrade = 'A+';
    } else if (marks >= 70) {
        studentGrade = 'A';
    } else if (marks >= 40) {
        studentGrade = 'B';
    } else if (marks >= 30) {
        studentGrade = 'C';
    } else {
        console.log("Q8: Student has Failed.");
    }

    if (studentGrade) {
        console.log("Q8: Student Grade is =>", studentGrade);
    }
} else if (marks < 0) {
    console.log("Q8: Marks must be positive.");
} else {
    console.log("Q8: Marks cannot be greater than total marks!");
}


// --- Question 9: Categorize Person by Age (Child, Teenager, Adult) ---
let personAge = 0;

if (personAge <= 0) {
    console.log("Q9: Age must be a positive integer.");
} else if (personAge < 12) {
    console.log("Q9: Child");
} else if (personAge <= 18) {
    console.log("Q9: Teenager");
} else {
    console.log("Q9: Adult");
}


// --- Question 10: Check if Number is between 10 and 50 ---
let n3 = 34;

if (n3 >= 10 && n3 <= 50) {
    console.log("Q10:", n3, "is within the range of 10 to 50");
} else {
    console.log("Q10:", n3, "is outside the range of 10 to 50");
}


// --- Question 11: Check Username and Password ---
let inputUsername = "admin_user";
let inputPassword = "SecurePassword123";

const validUsername = "admin_user";
const validPassword = "SecurePassword123";

if (inputUsername === validUsername && inputPassword === validPassword) {
    console.log("Q11: Username and password are correct.");
} else {
    console.log("Q11: Invalid username or password.");
}


// --- Question 12: Restricted Area Access (Age 18+ and ID) ---
let visitorAge = 20;
let hasValidID = true;

if (visitorAge >= 18 && hasValidID) {
    console.log("Q12: Access granted to restricted area.");
} else {
    console.log("Q12: Access denied. Must be 18+ and possess an ID.");
}


// --- Question 13: Check if Number is Positive and Even ---
let checkNumPositiveEven = 14;

if (checkNumPositiveEven > 0 && checkNumPositiveEven % 2 === 0) {
    console.log("Q13:", checkNumPositiveEven, "is Positive and Even.");
} else {
    console.log("Q13:", checkNumPositiveEven, "is NOT both Positive and Even.");
}


// --- Question 14: Check if Number is Negative or Odd ---
let checkNumNegOdd = -7;

if (checkNumNegOdd < 0 || checkNumNegOdd % 2 !== 0) {
    console.log("Q14:", checkNumNegOdd, "is Negative or Odd.");
} else {
    console.log("Q14:", checkNumNegOdd, "is neither Negative nor Odd (It is Positive and Even).");
}


// --- Question 15: Temperature Classification (Hot, Normal, Cold) ---
let tempCelsius = 28;

if (tempCelsius > 35) {
    console.log("Q15: Temperature Classification -> Hot");
} else if (tempCelsius >= 15) {
    console.log("Q15: Temperature Classification -> Normal");
} else {
    console.log("Q15: Temperature Classification -> Cold");
}


// --- Question 16: Ticket Type via Ternary Operator ---
let ticketAge = 10;
let ticketType = (ticketAge < 12) ? "Child Ticket" : "Adult Ticket";
console.log("Q16: Ticket Assigned ->", ticketType);


// --- Question 17: Admin Panel Access Check ---
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {
    console.log("Q17: Access granted to Admin Panel.");
} else {
    console.log("Q17: Access denied. User must be logged in AND have Admin status.");
}


// --- Question 18: Check if Passed All Subjects (Passing Marks = 35) ---
let mathMarks = 45;
let scienceMarks = 38;
let englishMarks = 50;
const passingMarks = 35;

if (mathMarks >= passingMarks && scienceMarks >= passingMarks && englishMarks >= passingMarks) {
    console.log("Q18: Student has passed all subjects.");
} else {
    console.log("Q18: Student has failed one or more subjects.");
}


// --- Question 19: Positive, Negative, or Zero Check ---
let valueToCheck = 0;

if (valueToCheck > 0) {
    console.log("Q19:", valueToCheck, "is Positive.");
} else if (valueToCheck < 0) {
    console.log("Q19:", valueToCheck, "is Negative.");
} else {
    console.log("Q19: Number is Zero.");
}


// --- Question 20: ATM Withdrawal Simulation ---
let correctPin = 4567;
let withdrawalAmount = 10000;
let accountBalance = 50000;

// Prompt execution conditional on environment availability
if (typeof prompt !== "undefined") {
    let enteredPin = Number(prompt("Enter PIN:"));

    if (enteredPin === correctPin) {
        console.log("Q20: PIN is correct.");

        if (withdrawalAmount > 0 && withdrawalAmount <= accountBalance) {
            accountBalance -= withdrawalAmount;
            console.log("Q20: Withdrawal successful! Withdrawn Amount:", withdrawalAmount);
            console.log("Q20: Remaining Balance:", accountBalance);
        } else if (withdrawalAmount > accountBalance) {
            console.log("Q20: Insufficient Balance!");
        } else {
            console.log("Q20: Invalid withdrawal amount!");
        }
    } else {
        console.log("Q20: Pin is Incorrect. Cannot Withdraw.");
    }
}