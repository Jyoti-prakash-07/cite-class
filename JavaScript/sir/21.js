async function calculator() {
    let a = await add(10, 20);
    let b = sub(a, 10);
    console.log("Subtraction:", b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

calculator();
