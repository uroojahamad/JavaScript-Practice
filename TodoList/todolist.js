const addBtn = document.getElementById("addItemToList"); 
const listItems = document.getElementById("listItem");
const completedListItems = document.getElementById("completedListItem");

let itemArray = [];
let completedItemArray = [];

//Event Listener to add items to list
addBtn.addEventListener("click", addItem);

//Function to add item to list
function addItem(){
    const todoItem = document.getElementById("todoItem").value.trim();
    if(todoItem === ""){
        alert("Value can't be blank. Add a todo item");
        document.getElementById("todoItem").value = "";
        return ;
    }
    itemArray.unshift(todoItem);
    document.getElementById("todoItem").value = "";
    displayItemList(); 
}

// Function to display List of Items 
function displayItemList(){
    let str = "";
    for (let items in itemArray) {
        str += `
            <li class="list-group-item">
                <button class="text" onclick="markItemAsCompleted(this)">
                    ${itemArray[items]}
                </button>
                <button class="deletedItem" onclick="deleteItem(this)">
                    <i class="fa fa-trash"></i>
                    Delete
                </button>
            </li> 
        `;
    }
    listItems.innerHTML = str;
}

function deleteItem(e){ 
    const itemToDelete = e.previousElementSibling.innerText;
    const isConfirm = confirm("Do you want to delete this item?");
    if(isConfirm){
        //Remove elements from an array
        // for (let items in itemArray) {
        //     if(itemArray[items] == itemToDelete){
        //         itemArray.splice(items,1);
        //     }
        // }
        const filteredArray = itemArray.filter(item =>{
            return item !== itemToDelete;
        });

        itemArray = filteredArray;
        const deleteTodoItem = e.parentElement;
        deleteTodoItem.remove();
    }

}

//Completed List 

function markItemAsCompleted(e){
//    console.log(e);

    const itemValue = e.innerText;
    // console.log(itemValue);
    //Remove elements from an array
    // for (let items in itemArray) {
    //     if(itemArray[items] == itemValue){
    //         console.log("true");
    //         itemArray.splice(items,1);
    //         completedItemArray.unshift(itemValue);
    // }
    
    const filteredArray = itemArray.filter(item => {
        return item !== itemValue;
    });

    itemArray = filteredArray;

    // completedItemArray.unshift(itemValue);
   
    completedItemArray = [itemValue, ...completedItemArray];
    // const completedItem = e.parentElement;
    // completedItem.remove();
    // console.log(completedItemArray);
    e.parentElement.remove();

    displayCompletedItems();

    }

//display completed list 
function displayCompletedItems(){
    let str = "";
    for (let items in completedItemArray) {
        str += `
            <li class="list-group-item">
                <button class="text strikeText" onclick="moveToItemList(this)">
                    ${completedItemArray[items]}
                </button>
            </li> 
        `;
    }
    completedListItems.innerHTML = str;
}

//Function to move completd item to itemlist
function moveToItemList(e){
    console.log(e);
   
    const itemValue = e.innerText;
    console.log(itemValue);
    //Remove elements from an array
    // for (let items in completedItemArray) {
    //     if(completedItemArray[items] == itemValue){
    //         console.log("true");
    //         completedItemArray.splice(items,1);
    //         itemArray.push(itemValue);
    //     }
    // }

    const filteredArray = completedItemArray.filter(item =>{
       return item !==  itemValue;
    });

    completedItemArray = filteredArray;
    itemArray = [...itemArray,itemValue];

    // const completedItem = e.parentElement;
    // completedItem.remove();
    console.log(itemArray);
    e.parentElement.remove();

    displayItemList();
} 


/*
 * We are running display item function when we are changing array.
 * kya changes kaise hua step by step : imperative
 * kya change hoga and kb hoga : declarative(React principle): render
 */