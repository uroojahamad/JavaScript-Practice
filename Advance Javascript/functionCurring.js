console.log("Function Curring");

/*
    - Curring is the process of taking a function with multiple arguments and turning it to sequence of fucntion each with only a single argument.
    - It can be acheived in 2 ways :- 
        i. using bind method
        ii. using closure
*/

//Using bind method
// const multiply = (x, y) => {
//     console.log(x * y);
// }

// const multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// const multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

//using Closures
const multiply = (x) =>{
    return (y) => {
        console.log(x * y)
    }
}
const multiplyByTwo = multiply(2);
multiplyByTwo(5);

const multiplyByThree = multiply(3);
multiplyByThree(5);

// const add = (a, b) =>{
//     console.log(a + b);
// }
// add(5, 5);

const add = (x) => {
    return (y) =>{
        console.log(x + y)
    }
}

// one liner for above : const add = (x) => (y) => console.log(x + y)
add(6)(6);

const sum = (a) =>{
    return (b) =>{
        return (c) =>{
            return a + b + c
        }
    }
}

console.log(sum(1)(2)(3));