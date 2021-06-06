console.log('Constructor Function In JavaScript');

// Constructor Function
// function Person(firstName, lastName, dob)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Creating Prototype of above function and creating function
function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
};

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};


// Instantiate Object
const person1 = new Person('Shad', 'Mirza', '3/18/1997');
const person2 = new Person('Urooj', 'Ahmad', '1/13/1998');

console.log(person1);
console.log(person1.getBirthYear());
console.log(person2.getFullName());
