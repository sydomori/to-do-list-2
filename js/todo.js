const tasks = [
  {
    name:"wash dishes",
    dueDate:"13/04/2026",
    description:"wash yesterday's dishes and clean the sink",
    completed:false
  },
  {
    name:"do laundry",
    dueDate:"14/04/2026",
    description:"wash, dry and fold clothes",
    completed:false
  }
]

const nameInput = document.querySelector('#todo-input');
console.log(nameInput);
const dueDateInput = document.querySelector('#todo-date');
console.log(dueDateInput);
const descriptionInput = document.querySelector('#todo-description');
console.log(descriptionInput);





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