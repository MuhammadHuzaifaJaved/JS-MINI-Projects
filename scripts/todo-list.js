const TodoList = [];

renderTodoList();

function renderTodoList(){
    let TodoListHTML = '';
    TodoList.forEach(function(todoObject,i){
        const {name, DueDate}= todoObject;
        const html =`  
        <div> ${name}</div>
        <div class="duedate">${DueDate}</div>
        <button onclick="TodoList.splice(${i}, 1);
        renderTodoList();" class="deletebutton">Delete</button>`;
        TodoListHTML += html;
    });
   /* for(let i=0; i < TodoList.length; i++){
        const todoObject = TodoList[i];
        //const name= todoObject.name;
        //const DueDate= todoObject.DueDate;
        const {name, DueDate}= todoObject;
        const html =`  
        <div> ${name}</div>
        <div class="duedate">${DueDate}</div>
        <button onclick="TodoList.splice(${i}, 1);
        renderTodoList();" class="deletebutton">Delete</button>`;
        TodoListHTML += html;
    }
*/

document.querySelector('.js-TodoListHTML')
.innerHTML= TodoListHTML;
}
function AddTodo(){
   
    const inputElement = document.querySelector('.js-input-value');
    const name = inputElement.value;
    const dateInputElement =document.querySelector('.js-date');
    const DueDate =dateInputElement.value;

     TodoList.push(
        {
           // name: name, 
          //DueDate:DueDate
            name,
            DueDate
        }
     );
    
    inputElement.value ='';
   renderTodoList();
}