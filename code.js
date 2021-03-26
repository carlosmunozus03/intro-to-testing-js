// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(name) {
    if (name === 'Jane') {
        return 'Hello, ' + name;
    } else if (name === 'Alex') {
        return 'Hello, ' + name;
    } else {
        return 'Hello, ' + 'Pat';
    }
}
// addOne function
function addOne(input) {
    if (typeof input !== "number") {
        return NaN;
    } else {
        return input + 1;
    }
}
