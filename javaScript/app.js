// Selectors 

const todoInput=document.querySelector('.todo-input');

const todoButton=document.querySelector('.todo-button');

const todoList=document.querySelector('.todo-list');


//function

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',checkDelete);


function addTodo(event){
//prevent form from submitting
event.preventDefault();

//create todo Div element for adding Items
const todoDiv=document.createElement('div');
todoDiv.classList.add('todo');

//create li elements to display Items
const newTodo=document.createElement('li');

newTodo.innerText=todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//check mark button
const completedButton=document.createElement('button');
completedButton.innerHTML='<i class="fas fa-check"></i>'
completedButton.classList.add("complete-button");
todoDiv.appendChild(completedButton);

//check trash button

const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-button');
todoDiv.appendChild(trashButton);

//append items
const todoList=document.querySelector(".todo-list");
todoList.appendChild(todoDiv);

//clear input
todoInput.value="";

}


//deleete the  items form todoInput

function checkDelete(e){
    const item=e.target;
if(item.classList[0]==='trash-button'){
    const todo=item.parentElement;
    todo.remove();
}

//check mark

if(item.classList[0]==='complete-button'){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
}
}