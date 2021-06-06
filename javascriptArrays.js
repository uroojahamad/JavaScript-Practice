console.log('Arrays in JavaScript')

// const fruits = ['apples', 'mangoes', 'melons', 'banana', 'grapes'];
// console.log(fruits);

// //Adding element to last index of array
// fruits.push('oranges');
// console.log(fruits);

// Adding element to starting index of array
// fruits.unshift('strawberries');
// console.log(fruits)

// console.log(fruits.indexOf('melons'));

// fruits[3] = 'peaches';
// console.log(fruits);


const todoList = [
    {
        id : 1,
        task : 'Finish JavaScript Tutorials',
        isCompleted : true
    },
    {
        id : 2,
        task : 'Do some handson activity',
        isCompleted : false
    },
    {
        id : 3,
        task : 'Play COD Mobile',
        isCompleted : true
    }
];

// console.log(todoList);
// console.log(todoList[2].task,todoList[2].isCompleted);

// Standard for loop
// for(let i = 0; i < todoList.length; i++)
// {
//     console.log(todoList[i].task);
// }

// for of loop
// for (let todo of todoList)
// {
//     console.log(todo.isCompleted);
// }

/* High order Array Methods
    1. forEach : looping through an array
    2. map : create a new array from existing array
    3. filter : create a new array based on some conditions
*/

// forEach : arrayName.forEach(function(iteratorName){})
// todoList.forEach(function(todo){
//     console.log(todo.task);
// });

// map : returns an array 
// const todoID = todoList.map(function(todo){
//     return todo.id;
// });
// console.log(todoID);

// filter
const todoCompleted = todoList.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompletedTask = todoList.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.task;
});
console.log(todoCompletedTask);