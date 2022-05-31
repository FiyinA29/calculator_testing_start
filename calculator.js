const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const modulus = (a, b) => a % b;

const even = function(a) {
    if(a % 2 == 0) {
        return(even);
    }
    else {
        return(odd);
    }
};

const odd = function(a) {
    if(a % 2 != 0) {
        return(true);
    }
    else {
        return(false);
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
