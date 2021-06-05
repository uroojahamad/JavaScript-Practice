//Event Listeners
document.getElementById("addItemToList").addEventListener("click", addItem);
document.getElementById("listItem").addEventListener("click", deleteAndStrikeItems);

let itemArray = [];

//Function to add item to list
function addItem(){
    const todoItem = document.getElementById("todoItem").value.trim();
    if(todoItem == ""){
        return alert("Value can't be blank. Add a todo item");
    }
    itemArray.unshift(todoItem);
    document.getElementById("todoItem").value = "";
    displayItemList(); 
}

//Function to Delete and Strike Items
function deleteAndStrikeItems(e){
    const tagItem = e.target;
    
    //Delete Items from List
    if(tagItem.classList.contains("deletedItem")){
        const itemToDelete = tagItem.previousElementSibling.innerText;
        
        if(confirm("Do you want to delete this item?")){
            
            //Remove elements from an array
            for (let items in itemArray) {
                if(itemArray[items] == itemToDelete){
                    console.log("true");
                    itemArray.splice(items,1);
                    console.log(itemArray);
                }
            }
            const deleteTodoItem = tagItem.parentElement;
            deleteTodoItem.remove();
        }
    }

    //Strike Text 
    if(tagItem.classList.contains("text")){
        if (tagItem.classList.contains("strikeText")) {
            return tagItem.classList.remove("strikeText");
        }
        tagItem.classList.add("strikeText");
    }
}

// Function to display List of Items 
function displayItemList(){
    let str = "";
    for (let items in itemArray) {
        str += `
        <li class="list-group-item"><span class="text">${itemArray[items]}</span>
        <button class="deletedItem"><i class="fa fa-trash"></i>Delete</button>
        </li> `;
    }
    document.getElementById("listItem").innerHTML = str;
}