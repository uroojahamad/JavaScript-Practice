console.log("Apply Method");

/* Apply Method : The only difference between call and apply is, how we pass the arguments
    - In call method, we pass arguments with comma separated values.
    - In Apply method, we pass arguments in form of Arrays
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

printName.call(person, "Lucknow", "Uttar Pradesh");
printName.apply(person2, ["Hyderabad", "Andhra Pradesh"]);

