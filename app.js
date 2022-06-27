/*
Will soon be adding local storage and a filter to easily load and filter 
through saved task. You can add, remove, and completely clear task on the task form.
Task items will be re-done with smaller boxes and delete link will be properly positioned.
*/

// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter'); // Adding a filter soon
const taskInput = document.querySelector('#task');



// Load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
    // Add Task Event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', deleteItem);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    
}

// Add Task
function addTask(e){

    // Will still add a blank task even after the alert. This will be fixed
    if(taskInput.value === '') {
        alert('Add a task')
    } else {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item border border-dark p-3 flex-end';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item fs-3';
        // Add icon html
        link.innerHTML = '<i class="bi bi-x"></li>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    }

    e.preventDefault();
}

// Delete task
function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        console.log('delete item');
        if(confirm('Are you sure you wish to delete this task?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear task
function clearTasks(){  

    if(confirm('Are you sure?')){
        while(taskList.firstChild)
        {
           taskList.removeChild(taskList.firstChild); 
        }
    }

}