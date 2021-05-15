// Main function to print FizzBuzz Problem
const fizzBuzz = () => {
    let i;
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else if (i % 3 == 0) {
            console.log('Fizz');
        }
        else {
            console.log(i);
        }
    }
}

const fizzBuzzBtn = () => {
    console.log("FizzBuzz Problem");
    document.getElementById("problem").innerText = "Fizz Buzz";
    document.getElementById("question").innerText = "Write a program that print numbers from 1 to 100. But for multiples of 3 print 'Fizz' instead of the number and for the multiple of 5 print 'Buzz'. For numbers which are multiples of both 3 and 5 print 'FizzBuzz'.";
    document.getElementById("fizzBuzz").remove();
    document.getElementById("reverseString").remove();
    document.getElementById("addBtn").innerHTML = "<button id='answer' onclick='fizzBuzzAnswer()'>Answer</button><button style='margin-left:5px' onclick='showCodeFizzBuzz()'>Show Code</button>"
}

function fizzBuzzAnswer() {
    console.log(fizzBuzz());
}

const showCodeFizzBuzz = () => {
    document.getElementById('showCode').innerText =`
    const fizzBuzz = () => {
        let i;
        for (i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz');
            }
            else if (i % 5 == 0) {
                console.log('Buzz');
            }
            else if (i % 3 == 0) {
                console.log('Fizz');
            }
            else {
                console.log(i);
            }
        }
    } `
}