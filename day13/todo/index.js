const todoForm= document.getElementById('todoForm');
const todo=document.getElementById('todo');

console.log(todoForm,todo)

const addTodo=(e)=>{
    e.preventDefault();

    const ul= document.querySelector('ul');
    const li= document.createElement('li');
    const text= document.createTextNode(todo.value);
    if(todo.value.trim()==""){
        alert("Please enter any value");
    }
    else{
        li.appendChild(text);
    ul.appendChild(li);
        todo.value="";
    }

}
todoForm.addEventListener('submit',addTodo);