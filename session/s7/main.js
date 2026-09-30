/* ==========================================================================
   SESSION 7: LOOPS (WHILE, DO-WHILE, FOR), DOM STYLING & PRACTICE PROBLEMS
   ========================================================================== */

console.log("=== SESSION 7: LOOPS & CONTROL FLOW ===");

// ==========================================================================
// 1. LOOPS IN JAVASCRIPT (WHILE, DO-WHILE, FOR)
// ==========================================================================

/* 
 * CONCEPT: Iteration & Control Flow Loops
 * 
 * Simple Words Definition: 
   Loops are repeating tools that run the same code block over and over again 
   until a specified stop condition becomes false.
 * 
 * Interview Prep Definition: 
   Control structures that execute statements repeatedly based on a boolean condition.
   - while loop: Pre-test loop; checks condition before executing block.
   - do...while loop: Post-test loop; executes block at least ONCE before checking condition.
   - for loop: Compact construct encapsulating initialization, condition evaluation, and final-expression update.
 */

// --- A) WHILE LOOP ---
let whileNum = 1; // Step 1: Initialization
while (whileNum <= 5) { // Step 2: Condition check
    console.log(`whileNum => ${whileNum}`); // Step 3: Body execution
    whileNum++; // Step 4: Increment / Update step
}

// --- B) DO-WHILE LOOP ---
let doNum = 1; // Step 1: Initialization
do {
    console.log(`doNum => ${doNum}`); // Executes at least once before condition check
    doNum++; // Update step
} while (doNum <= 5); // Condition check at the end

// --- C) FOR LOOP ---
// Standard syntax: for (initialization; condition; update)
for (let i = 1; i <= 5; i++) {
    console.log(`forLoop i => ${i}`);
}


// ==========================================================================
// 2. DOM INTERACTION & DYNAMIC COUNTER LOGIC
// ==========================================================================

/* 
 * CONCEPT: Interactive DOM Manipulation
 * 
 * Simple Words Definition: 
   Using JavaScript to change button colors, padding, and text numbers dynamically when clicked.
 * 
 * Interview Prep Definition: 
   Binding event handlers to DOM elements to mutate style properties and state values 
   in reaction to user input events.
 */

// Code runs conditionally if HTML element exists in browser environment
if (typeof document !== "undefined") {
    let btn = document.getElementById("btn");
    if (btn) {
        btn.style.padding = "20px";
        btn.style.backgroundColor = "lightblue";
        btn.style.color = "black";
    }
}

// Completed Increment Counter Function
let countValue = 0;
function increment() {
    if (typeof document !== "undefined") {
        let textElement = document.getElementById("text");
        if (textElement) {
            countValue++;
            textElement.innerText = `Count: ${countValue}`;
        }
    }
}


// ==========================================================================
// 3. PRACTICE QUESTIONS & BUG FIXES
// ==========================================================================

console.log("\n--- Practice Questions ---");

// --- Question 1: Print Numbers 1 to 10 using While Loop ---
function printOneToTen() {
    console.log("Q1) -----------------------------------------------------");
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
printOneToTen();


// --- Question 2: Print Numbers 10 to 1 using While Loop ---
function printTenToOne() {
    console.log("Q2) -----------------------------------------------------");
    let i = 10;
    while (i >= 1) {
        console.log(i);
        i = i - 1; // Decrement step
    }
}
printTenToOne();


// --- Question 3: Print Message 10 Times using Do-While Loop ---
function printHello() {
    console.log("Q3) -----------------------------------------------------");
    let i = 1;
    do {
        console.log("Hello Everyone (", i, ")");
        i++;
    } while (i <= 10);
}
printHello();


// --- Question 4: Print Even Numbers from 1 to 50 using For Loop ---
/*
 * Style Note: Moved increment expression `i++` into the `for` loop header 
 * to follow standard JavaScript loop conventions.
 */
function printOneToFifty() {
    console.log("Q4) -----------------------------------------------------");
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log("Q4) even => (", i, ")");
        }
    }
}
printOneToFifty();


// --- Question 5: Print Odd Numbers from 1 to 50 using For Loop ---
/*
 * Correction Note: Fixed console.log string prefix from "Q4) odd" to "Q5) odd".
 */
function OddOneToFifty() {
    console.log("Q5) -----------------------------------------------------");
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log("Q5) odd => (", i, ")");
        }
    }
}
OddOneToFifty();


// --- Question 6: Multiplication Table of 5 ---
function table() {
    console.log("Q6) -----------------------------------------------------");
    let n = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
table();


// --- Question 7: Multiplication Table of Dynamic Parameter 'n' ---
function printTableByInput(n) {
    console.log(`Q7) Table of ${n} ----------------------------------------`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
printTableByInput(34);


// --- Question 8: Sum of First N (100) Natural Numbers ---
function sumOfNaturalNum() {
    console.log("Q8) -----------------------------------------------------");
    let n = 100;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("Sum of N natural numbers => ", sum); // 5050
}
sumOfNaturalNum();


// --- Question 9: Sum of First N (50) Even Natural Numbers ---
function sumOfNaturalEvenNum() {
    console.log("Q9) -----------------------------------------------------");
    let n = 50;
    let sum = 0;
    let i = 1;
    while (i <= n) {
        if (i % 2 === 0) {
            sum += i;
        }
        i++;
    }
    console.log("Sum of N natural even numbers => ", sum); // 650
}
sumOfNaturalEvenNum();


// --- Question 10: Count Numbers Divisible by 3 between 1 and 100 ---
/*
 * Correction Note: Added 'let' keyword to 'count' variable declaration to 
 * prevent accidental creation of an implicit global variable in strict mode.
 */
function isDivisble() {
    console.log("Q10) -----------------------------------------------------");
    let n = 100;
    let count = 0; // Fixed: Explicit variable declaration
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            count++;
        }
    }
    console.log("Total numbers divisible by 3 (between 1 and 100):", count); // 33
}
isDivisble();


// --- Question 11: Number Guessing Game using Do-While Loop ---
/*
 * Environment Note: Wrapped prompt execution inside environment check 
 * to allow safe script execution without crashing in non-browser runtime engines.
 */
function guessNumber() {
    console.log("Q11) -----------------------------------------------------");
    let targetNum = 29;
    let guessNum;

    if (typeof prompt !== "undefined") {
        do {
            guessNum = Number(prompt("Guess the Number between 1-50:"));
            if (guessNum === targetNum) {
                console.log("Correct! You guessed the right number:", targetNum);
            } else {
                console.log("Incorrect guess. Try again!");
            }
        } while (guessNum !== targetNum);
    } else {
        console.log("Prompt API is unavailable in this execution environment.");
    }
}
guessNumber();