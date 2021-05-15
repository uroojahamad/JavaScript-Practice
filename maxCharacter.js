console.log('Max Character');

const maxChar = (str) => {

    const character = {};       // Create empty object 
    
    //for-of loop is used to iterate over arrays and string
    // Here in the below loop char represent the element of string/array
    
    // Convert String to Object
    for (let char of str) {
        if (!character[char]) {
            character[char] = 1;
        } else {
            character[char] ++;  
        }
    }

    // for-in loop is used to iterate over objects{key : value}
    // Here in the below loop char represents key in an object and character[char] represent the value assigned to that key in an object 
    
    //Looping through character object.
    let max = 0;
    let maxChar = '';
    for (let char in character) {
        if (character[char] > max) {
            max = character[char];
            maxChar = char;
        }
    }

    // return character;
    return `Max. Occurence : ${max} Max. Character in String : ${maxChar}`;
}

function maxCharacter(){
    const string = "abcccccccccddd";
    console.log(`String : ${string}`);
    console.log(maxChar(string));
}

const showCode = () => {
    document.getElementById('showCode').innerText = `
    const maxChar = (str) => {

       const character = {};       // Create empty object 
        
        // Convert String to Object
        for (let char of str) {
            if (!character[char]) {
                character[char] = 1;
            } else {
                character[char] ++;  
            }
        }
    
        //Looping through character object.
        let max = 0;
        let maxChar = '';
        for (let char in character) {
            if (character[char] > max) {
                max = character[char];
                maxChar = char;
            }
        }
        return \`Max. Occurence : \${max} Max. Character in String : \${maxChar}\`;
    } `
}

