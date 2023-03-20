console.log("Array elements to object ");

const names = ['Alex', 'Bob', 'Johny', 'Atta'];
console.log(`Array : [${names},]`);

function convertArrayToObject(arr){
    const obj = Object.assign({}, arr); //convert to object 

    // console.log(obj);

    let arrayObjectElements = [];

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          const innerObj = {};
          innerObj["key"] = obj[prop];
          arrayObjectElements.push(innerObj);
        }
      }
    return arrayObjectElements;

}

const result =  convertArrayToObject(names);

console.log(result);