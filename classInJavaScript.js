console.log('Class in JavaScript');

class Person {
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    getBirthDate() {
        return `${this.dob.getDate()}/${this.dob.getMonth()}/${this.dob.getFullYear()}`;
    }
}

// Instantiate Object 
const person1 = new Person('Urooj', 'Ahmad', '13/1/1997');

console.log(person1);
console.log(person1.getFullName());
console.log(person1.getBirthDate());
