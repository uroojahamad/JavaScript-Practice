const addItemToList = document.getElementById("addItemToList");
const listItems = document.getElementById("listItem");

//Event Listener to add items to list
addItemToList.addEventListener("click", addItem);

const itemArray = [];
//Function to add item to list
function addItem(){
    const todoItem = document.getElementById("todoItem").value.trim();
    if(todoItem == ""){
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
        <li class="list-group-item"><button class="text" onclick="strikeItems(this)">${itemArray[items]}</span>
        <button class="deletedItem" onclick="deleteItem(this)"><i class="fa fa-trash"></i>Delete</button>
        </li> `;
    }
    document.getElementById("listItem").innerHTML = str;
}

function deleteItem(e){ 
    const itemToDelete = e.previousElementSibling.innerText;
    const isConfirm = confirm("Do you want to delete this item?");
    if(isConfirm){
        //Remove elements from an array
        for (let items in itemArray) {
            if(itemArray[items] == itemToDelete){
                itemArray.splice(items,1);
            }
        }
        const deleteTodoItem = e.parentElement;
        deleteTodoItem.remove();
    }

}

function strikeItems(e){
    e.classList.toggle("strikeText");
}