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
    },

]

// Storing the first array in the vaiable dataOf
let dataOf = arr[0]
let dataOf1 = arr[1]

console.log(dataOf)
console.log(dataOf1)

// Get data from the array of objects
console.log("array of object => ", arr)

// get the first object data in array object using the object key and array index
console.log("first Object data using array index and key => ", dataOf["id"], dataOf["name"])
// get the second object data in array object using the object key and array index
console.log("Second Object data using array index and key", dataOf1["id"], dataOf1["name"], dataOf1.address)

console.log(arr[1])

const obj = {
    id: 1,
    name: "abc",
    id: 2,
    name: "def",
    address: [
        "abc",
        "def"
    ]
}
// Get data from object
console.log(obj)

// access the object data using its key
console.log(obj.name)

// access the array inside object
console.log(obj.address)


// 15 Practice Questions

// Question 1

let studentName = ["Rohan", "Ajay", "Vijay", "Roshan", "Rahul"]
let len = studentName.length
console.log("Q1) ", studentName)
console.log("Q1) ", studentName[0])
console.log("Q1) ", studentName[len - 1])


// Question 2

let fruits = ["Apple", "Banana"]
fruits.push("Mango", "Orange")
console.log("Q2) Fruits => ", fruits)


// Question 3
let nums = [1, 2, 3, 4, 5]
let removedVal = nums.pop()
console.log("Q3) Removed Value => ", fruits.pop())
console.log("Q3) Updated value => ", nums)

// Question 4
let cities = ["Mumbai", "Pune"]
cities.unshift("Delhi", "Nashik")
console.log("Q4) Cities => ", cities)

// Question 5
let stud2 = ["Ajay", "Paramveer", "Vishal", "Yash"]
stud2.shift()
console.log("Q5) Updated student array => ", stud2)

// Question 6
let arr1 = ["HTML", "CSS", "JAVASCRIPT", "REACT"]
console.log("Q6) Converted array into single string => ", arr1.join(" "))

// Question 7
let arr2 = ["Rahul", "Priya", "Rohan", "Vikas"]
console.log("Q7) Converted array into single string with * in-between => ", arr1.join("*"))

// Question 8
let a1 = ["HTML", "CSS", "JAVASCRIPT"]
let a2 = ["NODE", "EXPRESS", "MONGODB"]

let new_arr = a1.concat(a2)
console.log("Q8) Added two array => ", new_arr)

// Question 9
let new_fruits = ["Apple", "Banana", "Orange", "Grapes"]
new_fruits.splice(2, "Kiwi", "Kiwi")
new_fruits.splice(2, "Mango", "Mango")
console.log("Q9) ", new_fruits)

// Question 10
let remEl = ["Apple", "Banana", "Mango", "Orange"]
remEl.splice(1, 1)
console.log("Q10) => ", remEl)


// Question 11

let names = ["Rahul", "Amit", "Neha", "Priya", "Karan"]
let new_names = names.sort()
console.log("Question 11 => ", new_names)

// Question 12
let asc = [10, 20, 30, 40, 50]
console.log("Q12) ", asc.reverse())

// Question 13
let students = {
    name: "Vikas",
    age: 24,
    city: "Mumbai",
    course: "Full Stack"
}
console.log("Q13) => name: ", students.name)
console.log("Q13) => age: ", students.age)
console.log("Q13) => city: ", students.city)
console.log("Q13) => course: ", students.course)

// Question 14
let new_stud = {
    name: "Rahul",
    age: 25,
    city: "Pune"
}

new_stud.age = 22
console.log("Q14) => ", new_stud)


// Question 15
let new_obj = {
    name: "Rohan",
    age: 24,
    div: 'B',
    address: {
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "401209"
    }
}

console.log("Q15) name => ", new_obj.name)
console.log("Q15) city => ", new_obj.address.city)
console.log("Q15) state => ", new_obj.address.state)
console.log("Q15) pincode => ", new_obj.address.pincode)