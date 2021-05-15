console.log("Palindrome");

const palindrome = (str) => {
    let reverseString= '';

    // 1. Reverse a given string
    for (let character of str) {
        reverseString = character + reverseString;
    }

    console.log(`Reverse String : ${reverseString}`);

    // 2. Compare the original string with reversed string to check whether it is Pallindrome or not.
    if (str === reverseString) {
        return true;
    } 
    return false;
    
}

const stringToCheckPalindrome = 'wow wow wow';
console.log(`String : ${stringToCheckPalindrome}`);
console.log(`Is Palindrome : ${palindrome(stringToCheckPalindrome)}`);

