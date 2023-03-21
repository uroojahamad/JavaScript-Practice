console.log("Event Deligation");

document.querySelector("#categories").addEventListener("click", (e) =>{
    console.log("Parent category clicked");
    console.log(e.target.id);
})


 document.querySelector("#forms").addEventListener("keyup", (e) =>{
    console.log(e)
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
 })