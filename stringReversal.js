// Main function for reversing a string
const reverse = (str) => {
    let reverseString= '';

    for(let i = str.length-1; i >= 0; i--){
        reverseString = reverseString + str[i];
    }

    // for (let character of str) {
    //     reverseString = character + reverseString;
    // }

    return reverseString;
}

const reverseStrBtn = () => {
    console.log("Reverse a String");
    document.getElementById("problem").innerText = "Reverse a String";
    document.getElementById("question").innerText = "Write a program to reverse a given string. For Eg. Input : apples || Output : selppa .";
    document.getElementById("fizzBuzz").remove();
    document.getElementById("reverseString").remove();
    document.getElementById("addBtn").innerHTML = "<button class='answer' id='answer' onclick='reverseStrAnswer()'>Answer</button><button class='showCodeBtn' id='showCodeBtn' onclick='showCodeRevereStr()'>Show Code</button>"
}

function reverseStrAnswer(){
    const stringToReverse = 'apples';
    console.log(`String : ${stringToReverse}`);
    console.log(`Reverse String : ${reverse(stringToReverse)}`);
}

const showCodeRevereStr = () => {
    document.getElementById('showCode').innerText =`
    const reverse = (str) => {
        let reverseString= '';

        for (let character of str) {
            reverseString = character + reverseString;
        }

        return reverseString;
    } `
}
