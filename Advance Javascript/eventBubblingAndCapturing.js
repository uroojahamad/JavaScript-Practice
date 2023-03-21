console.log("Event Bubbling and Capturing")

document.querySelector('#grandparent').addEventListener('click', ()=>{
    console.log("Grand Parent Div clicked!!");
}, true);  // Event Capturing

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log("Parent Div clicked!!");
}, false); // Event Bubbling

document.querySelector('#child').addEventListener('click', ()=>{
    console.log("Child Div clicked!!");
}, true)  // Event Capturing