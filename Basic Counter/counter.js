const txtNumber = document.getElementById("enterNumber");

// Function to clear textbox before entering value
let number;
// txtNumber.addEventListener("click", function(){
//    txtNumber.value = "";
// });

// txtNumber.addEventListener("click", function(){
//     number = txtNumber.value;
//     (number == 0) ? txtNumber.value = "" : txtNumber.value = number;
// });

// Main Function for incrementing / decrementing values
const addCount = () => {
    // number = txtNumber.value;
    // number++;
    // txtNumber.value = number;
    txtNumber.value++;
}

const subtractCount = () => {
    number = txtNumber.value;

    if (number > 0){
      return txtNumber.value--;   //early return 
    }
    
    alert("Can't decrement further");
    
}

