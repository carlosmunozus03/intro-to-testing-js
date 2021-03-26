// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(name) {
    return 'Hello, ' + name + '!';
}

// addOne function
function addOne(input) {
    if (typeof input !== "number") {
        return NaN;
    } else {
        return input + 1;
    }
}

// isFive function
function isFive(number) {
    return number === 5;
}

// isEven function
function isEven(input) {
    return input % 2 === 0;
}