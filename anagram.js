console.log("Analgrams");

const str1 = "Hello";
console.log(`String 1 : ${str1}`);
const str2 = "oellh";
console.log(`Sring 2 : ${str2}`);

function buildCharMap(str){
    
    const character = {};
    const s1 = str.replace(/[^\w]/g, '').toLowerCase();


    for (let char of s1) {
        if (!character[char]) {
            character[char] = 1;
        } else {
            character[char] ++;  
        }
    }

    return character;

}

console.log(buildCharMap(str1));
console.log(buildCharMap(str2));