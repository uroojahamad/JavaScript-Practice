console.log("Reverse a Integer");

const reverseInt = (number) => {
    const reverseInt =  parseInt(
        number.toString()         // Convert Int to String
        .split('')                // Convert String to Array
        .reverse()                // Reverse elements of Array
        .join('')                 // Convert Array back to String
    );               

    return Math.sign(number) * reverseInt;
}

const number = -900;
console.log(`Number : ${number}`);
console.log(`Reverse of Number : ${reverseInt(number)}`);