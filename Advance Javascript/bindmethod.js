console.log("Bind Method");

/* Bind Method : 
    - It is same as call method.
    - The only difference is it binds with the object on which it is called upon and gives us the copy of a method or function which can be invoked later.
    - The bind() takes an object as an argument and returns a new function whose this refers to the object we passed as an argument.
*/

const person = {
    firstName: "Urooj",
    lastName: "Ahmad",
}

const person2 = {
    firstName: "Minhaj",
    lastName: "Ahmad",
}

const printName = function(hometown, state) {
    console.log(`${this.firstName} ${this.lastName} is from ${hometown} , ${state}`)
}

const myName = printName.bind(person, "Lucknow", "Uttar Pradesh");
console.log(myName);
myName();
