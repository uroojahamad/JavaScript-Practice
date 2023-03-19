console.log("Call Apply Bind Method");

//Example 1: 
const person = {
    firstName: "Urooj",
    lastName: "Ahmad",
    // printName: function() {
    //     console.log(`${this.firstName} ${this.lastName}`)
    // }
}
// person.printName();

const person2 = {
    firstName: "Minhaj",
    lastName: "Ahmad",
}

/* Call Method : Using call method we can do "Function Borrowing".
We can borrow function from other object and use it wth data of another object.
Or we can use a particular function with different data objects
*/

//Borrow Function from one object and use with data of other object
// person.printName.call(person2);

// Use a particular function with different data objects
const printName = function() {
    console.log(`${this.firstName} ${this.lastName}`)
}
printName.call(person)
printName.call(person2)

