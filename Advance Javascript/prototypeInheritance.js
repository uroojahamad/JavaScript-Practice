console.log("Prototype and Prototype Inheritance");

const object = {
    name: "Minhaj",
    city: "Lucknow",
    getIntro: function(){
        console.log(`${this.name} is from ${this.city}`)
    }
}

const object2 = {
    name: "Urooj"
}



// Prototype Inheritance : Here object2 is inheriting the propeties/ methods from object proto which is pointing to object
object2.__proto__ = object  // Now we can access the properties/ methods of object from object2
console.log(object2.__proto__)
console.log(`${object2.name} , ${object2.city}`)
object2.getIntro();


//Interview Question based on 'this' keyword
var length = 4;
function callback(){
    console.log(this.length)
}

const object3 = {
    length: 5,
    method: function(callback){
        callback()
    }
}

object3.method(callback, 1, 2)
