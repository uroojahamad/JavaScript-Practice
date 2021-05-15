const person = {
    firstName : 'Shad',
    lastName : 'Mirza',
    hobbies : ['Gaming', 'Sketching', 'Reading'],
    address : {
        street : '5544/2264 Hasrat Town Balaganj',
        city : 'Lucknow',
        state : 'UP',
        pincode : 226003
    }
}

console.log(person)

console.log(person.firstName, person.lastName);
console.log(`My favourite hobby is ${person.hobbies[0]}`);
console.log(`I am from ${person.address.city}`, person.address.state);

person.email = 'iamshadmirza@gmail.com'
console.log(person)

// Destructuring 
const { firstName, lastName, address: { city } } = person;
console.log(firstName)
console.log(city)