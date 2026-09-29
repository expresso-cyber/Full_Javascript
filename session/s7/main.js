// let num = 1;
// while (num <= 10) {
//   console.log(`num => ${num}`);
//   num++;
// }

// let nextNum = 1;
// do {
//   console.log(`Number ${nextNum}`);
//   nextNum++;
// } while (nextNum <= 10);

// for(let i = 1; i<=100;){
//     console.log(`Hey ${i}`)
//     i++
// }

// let btn = document.getElementById("btn");
// btn.style.padding = "20px";
// btn.style.backgroundColor = "lightblue";
// btn.style.color = "black";

// function increment() {
//   let increment = document.getElementById("text");
// }

// Question 1

function printOneToTen() {
    console.log("     Q1) -----------------------------------------------------")
    let i = 1
    while (i <= 10) {
        console.log(i)
        i++
    }
}

printOneToTen()



function printTenToOne() {
    console.log("    Q2) -----------------------------------------------------")
    let i = 10
    while (i >= 1) {
        console.log(i)
        i = i - 1
    }
}

printTenToOne()


function printHello() {
    console.log("   Q3) -----------------------------------------------------")
    let i = 1
    do {
        console.log("Hello Everyone (", i, ")")
        i++
    } while (i <= 10)
}

printHello()


// Q4) 
function printOneToFifty() {
    console.log("   Q4) -----------------------------------------------------")
    let i = 1
    for (i; i <= 50;) {
        if (i % 2 == 0) {
            console.log("Q4) even => (", i, ")")
        }
        i++
    }
}

printOneToFifty()

// Q5) 
function OddOneToFifty() {
    console.log("   Q5) -----------------------------------------------------")
    let i = 1
    for (i; i <= 50;) {
        if (i % 2 !== 0) {
            console.log("Q4) odd => (", i, ")")
        }
        i++
    }
}

OddOneToFifty()


// Q6) 
function table() {
    console.log("   Q6) -----------------------------------------------------")
    let n = 5
    for (let i = 1; i <= 10;) {
        console.log(`${n} * ${i} = ${n * i}`)
        i++
    }
}

table()

// 7) 
function printTableByInput(n) {
    // let n = document.getElementById("text")
    // let n = Number(prompt("Enter Number => "))
    for (let i = 1; i <= 10;) {
        console.log(`${n} * ${i} = ${n * i}`)
        i++
    }
}

printTableByInput(34)

//8 
function sumOfNaturalNum() {
    console.log("   Q8) -----------------------------------------------------")
    let n = 100
    let sum = 0
    for (let i = 1; i <= n;) {
        sum += i
        i++
    }
    console.log("Sum of N natural number => ", sum)
}

sumOfNaturalNum()

// 9 
function sumOfNaturalEvenNum() {
    console.log("   Q9) -----------------------------------------------------")
    let n = 50
    let sum = 0
    let i = 1;
    while (i <= n) {
        if (i % 2 == 0) {
            sum += i
        }
        i++
    }
    console.log("Sum of N natural even number => ", sum)
}

sumOfNaturalEvenNum()

// 10)
function isDivisble() {
    console.log("   Q10) -----------------------------------------------------")
    let n = 100
    let sum = 0
    count = 0
    for (let i = 1; i <= n;) {
        if (i % 3 == 0) {
            count++
            // console.log(i)
        }
        i++
    }
    console.log(count)
    // console.log("Number Divisible by 3 => ",i)
}

isDivisble()

// 11)
function guessNumber() {
    console.log("   Q11) -----------------------------------------------------")
    let num = 29
    let guessNum;
    do {
        guessNum = Number(prompt("Guess the Number between 1-50"))
        if (guessNum === num) {
            console.log("Correct")
        } else {
            console.log("Try again")
        }
    } while (guessNum !== num)

}

guessNumber()