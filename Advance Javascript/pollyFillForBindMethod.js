console.log("Pollyfill For Bind Method")
/* Pollyfill for Bind Method : 
    - Pollyfill is a sort of browser fallback, suppose browser don't have bind method, so we have to write our own bind method.
    - A pollyfill is a piece of code used to provide modern functionality to an older browser version.
*/

const person = {
    firstname: "Shad",
    lastname: "Mirza"
}

const printName = function(hometown, state, country){
    console.log(`${this.firstname} ${this.lastname} is from ${hometown} , ${state} , ${country}`);
}

//Actual Bind Method
const myName = printName.bind(person, "Varanasi", "Uttar Pradesh");
myName("India");

//Our implementation of Bind Method
Function.prototype.myBind = function(...args) {
    const obj = this;
    const params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

const myName2 = printName.myBind(person, "Varanasi", "Uttar Pradesh");
myName2("India");