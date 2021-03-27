// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(name) {
    var helloAll = 'Hello, ' + name + '!';
    if (name === true || name === false) {
        return 'Hello, World!';
    } else {
        return helloAll;
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

// isFive function
function isFive(number) {
    return number == 5;
}

// isEven function
function isEven(input) {
     if(input > 0) {
         return input % 2 === 0;
     } else
         return false;
}

// isVowel function
function isVowel(someChar) {
    if (someChar === 'a' || someChar === 'e' ||  someChar === 'i' ||  someChar === 'o' ||  someChar === 'u') {
        return true;
    } if (someChar === 'A' || someChar === 'E' ||  someChar === 'I' ||  someChar === 'O' ||  someChar === 'U') {
        return true;
    } else {
        return false;
    }
}

// add function
function add(x,y) {
    var firstNum = parseFloat(x);
    var secondNum = parseFloat(y);
    var totalAdd = firstNum + secondNum;
    var notANumber = x + y;
    if (isNaN(notANumber) === true) {
        return true;
    } else {
        return totalAdd;
    }
}

console.log(add(2, 3)); //returns (5);
console.log(add(-3, -9)); //returns (-12;)
console.log(add("5", 6) );//returns (11);
console.log(add("-4", "10")); //returns (6);
console.log(add("banana", "split")); //returns (NaN);
console.log(add(2, "apples")); //returns (NaN);
console.log(add());//returns (NaN);