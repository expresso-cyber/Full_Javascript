function add(a,b){
    a = document.getElementById('num1').value // taking values from input boxes
    b = document.getElementById('num2').value
    let p = document.getElementById('content')

    if (a !== '' && b !== '') {
        console.log("Addition => ",Number(a)+Number(b));
        p.textContent = "Addition => " + (Number(a) + Number(b))
    } else {
        p.textContent = "Enter numbers in fields!"
    }
}

function sub(a,b){
    a = document.getElementById('num1').value // taking values from input boxes
    b = document.getElementById('num2').value
    let p = document.getElementById('content')
    
    if (a !== '' && b !== '') {
        console.log("Subtraction => ",Number(a) - Number(b));
        p.textContent = "Subtraction => " + (Number(a) - Number(b))
    } 
    else {
        p.textContent = "Enter numbers in fields!"
    }
}

function mul(a,b){
    
    a = document.getElementById('num1').value // taking values from input boxes
    b = document.getElementById('num2').value

    let p = document.getElementById('content')
    
    
    if (a !== '' && b !== '') {
        console.log("Multiplication => ", Number(a) * Number(b));
        p.textContent = "Multiplication => " + (Number(a) * Number(b))
    }
    else {
        p.textContent = "Enter numbers in fields!"
    }
}

function divide(a,b){
    
    a = document.getElementById('num1').value // taking values from input boxes
    b = document.getElementById('num2').value

    let p = document.getElementById('content')
    
    
    if (a !== '' && b !== '') {
        console.log("Division => ", (Number(a) / Number(b)));
        p.textContent = "Division => " + (Number(a) / Number(b)).toFixed(2)
    }
    else {
        p.textContent = "Enter numbers in fields!"
    }
}

function exponent(a,b){
    
    a = document.getElementById('num1').value // taking values from input boxes
    b = document.getElementById('num2').value

    let p = document.getElementById('content')
    
    
    if (a !== '' && b !== '') {
        console.log("Exponential (Power) => ",Number(a)**Number(b));
        p.textContent = "Exponential (Power) => " + (Number(a) ** Number(b))
    }
    else {
        p.textContent = "Enter numbers in fields!"
    }
}

function remainder(a,b){
    a = document.getElementById('num1').value // taking values from input boxes
    b = document.getElementById('num2').value

    let p = document.getElementById('content')
    
    
    if (a !== '' && b !== '') {
        console.log("Remainder => ", Number(a) % Number(b));
        p.textContent = "Remainder => " + (Number(a) % Number(b))
    }
    else {
        p.textContent = "Enter numbers in fields!"
    }
}

function reset(a, b) {
    a = document.getElementById('num1') // taking values from input boxes
    b = document.getElementById('num2')

    let p = document.getElementById('content')

    if (a.value !== '' || b.value !== '') {
        a.value = null
        b.value = null

        console.log("Reset Done");
        p.textContent = "Reset Done"
    }
    else {
        p.textContent = "Fields are already Empty"
    }
}



