const buttons = document.getElementsByClassName("btn");        // get all buttons in array

// loop through all buttons to set active state 
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(e){

        //1. get the active button and make it inactive
        const activeBtn = document.getElementsByClassName("active")[0];
        activeBtn.classList.remove("active");
    
        //2. get the current button and make it active
        e.target.classList.add("active");
        window.localStorage.setItem('activeFilter',e.target.innerText); 
       })
}

// This event fires when the page load
// window.addEventListener('load', function(){
//     // this.localStorage === window.localStorage 
//     if(this.localStorage.getItem('Value')){
//         this.document.getElementById("enterNumber").innerText = this.localStorage.getItem('Value');
//         const activeFilter = this.localStorage.getItem('activeFilter');
//         for(let i = 0; i < buttons.length; i++){
//             if(activeFilter === buttons[i].innerText){
//                 buttons[i].classList.add('active');
//             }
//         }
//     }
//     else{
//         this.document.getElementById("button5").classList.add("active");
//     }
// });

// Anonomous Function : function without any name
// IIFE() : 
(function(){
    if(window.localStorage.getItem('value')){
        window.document.getElementById("enterNumber").innerText = window.localStorage.getItem('value');
        const activeFilter = window.localStorage.getItem('activeFilter');
        for(let i = 0; i < buttons.length; i++){
            if(activeFilter === buttons[i].innerText){
                buttons[i].classList.add('active');
            }
        }
    }
    else{
        window.document.getElementById("button5").classList.add("active");
    }
})();


// onclick function for add and subtract button
const addCount = () => {
    document.getElementById("enterNumber").innerText = getIncrementedValue();
}

const subtractCount = () => {
     document.getElementById("enterNumber").innerText = getDecrementedValue();   
}

// Function to increment value
function getIncrementedValue(){
    const activeFilter = document.getElementsByClassName("active")[0].innerText;
    const calculatedValue = parseInt(document.getElementById("enterNumber").innerText) + parseInt(activeFilter);
    window.localStorage.setItem('value',calculatedValue);
    return calculatedValue;
}

// Function to decrement value
function getDecrementedValue(){
    const activeFilter = document.getElementsByClassName("active")[0].innerText;
    const value =  parseInt(document.getElementById("enterNumber").innerText) - parseInt(activeFilter);
    
    if(value < 0){
        window.localStorage.setItem('value',0);
        return window.localStorage.getItem('value');
    }

    window.localStorage.setItem('value',value);
    return value;
}