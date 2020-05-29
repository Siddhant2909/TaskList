//Define UI Forms
const form=document.querySelector('#task-form');
const taskList =document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter =document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event Listeners

function loadEventListeners() {
    //Add task event
    form.addEventListener('submit',addTask);
    //Remove Task
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTask);
    filter.addEventListener('keyup',filterTask);
}

//Add Task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }
    // Create li element
    const li= document.createElement('li');
    //Add class
    li.className='collection-item';
    //create textnode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create link element
    const link= document.createElement('a');
    link.className='delete-item secondary content';
    //add icon html
    link.innerHTML ='<i class="fa fa-remove"></i>'
    li.appendChild(link);

    taskList.appendChild(li);
    taskInput.value ='';

    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

function clearTask(e){
    taskList.innerHTML='';
    e.preventDefault();
}

function filterTask(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!== -1){
            task.style.display='block';}
            else{
            task.style.display='none';
        }
    })
    e.preventDefault();

}


