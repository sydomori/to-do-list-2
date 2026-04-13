import {tasks} from './tasks.js';
import {completedTasks} from './tasks.js';

const nameInput = document.querySelector('#todo-input');
console.log(nameInput);
const dueDateInput = document.querySelector('#todo-date');
console.log(dueDateInput);
const descriptionInput = document.querySelector('#todo-description');
console.log(descriptionInput);
const completedTasksDiv = document.querySelector('#completed-todos');
console.log(completedTasksDiv);






function addTasks(event){
  event.preventDefault();
  
  let name = nameInput.value;
  let dueDate = dueDateInput.value;
  let description = descriptionInput.value;
  

  let task = {
    name:name,
    dueDate:dueDate,
    description:description,
    completed:false
  }
  tasks.push(task);
  console.log(tasks);

}

const form = document.querySelector('#to-do-form');
form.addEventListener('submit', addTasks);
form.addEventListener('onsubmit', renderTasks);

const tasksContainer = document.querySelector('#todo-list')

function renderTasks(){
  tasksContainer.innerHTML = '';
  let html = '';

  tasks.forEach((task)=>{
    html = `
    <div class="task-elements">
      <p class="task-name">${task.name}</p>
      <p class="task-date">${task.dueDate}</p>
      <p class="task-description">${task.description}</p>
      <button type='button' class="btn btn-danger js-delete-button">DELETE</button>
      <input class="js-checkbox form-check-input" type="checkbox" value="" id="checkDefault">
    </div>
    `
    tasksContainer.innerHTML += html;

    const deleteButtons = document.querySelectorAll('.js-delete-button');
    deleteButtons.forEach((button, index)=>{
      button.addEventListener('click',()=>{
        tasks.splice(index, 1);
        renderTasks();
      })
    })
  });
}

const addButton = document.querySelector('#addButton');

addButton.addEventListener('click',renderTasks);

renderTasks();
