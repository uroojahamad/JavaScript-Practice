console.log("Recursion");

const user ={
    name : "Urooj",
    address: {
        personal: {
            area: "Balaganj", 
            city: "Lucknow"
        },
        office:{
            city: "Gurugram",
            area: {
                landmark: "Info Tech City"
            }
        }
    }
}

let finalObj = {};

let recursive = (object, parent) => {
    for (let key in object) {
        if (typeof object[key] === "Object") {
            recursive = (object[key], parent+"_"+key)
        }
        else{
            finalObj[parent+"_"+key] = object[key];
        }
    }
    return finalObj;
}

console.log(recursive(user, "user"))

