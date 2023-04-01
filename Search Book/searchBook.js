console.log("Search Book");


import { readFileSync } from "fs";

let data = readFileSync("data.json");
console.log(`Loading data : ${data}`);
let bookDetails = JSON.parse(data);
console.log(`Data after load : ${bookDetails}`);