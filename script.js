//Get references to HTML elements
const taskInput = document.getElementById('taskInput'); //input field for taskname 
const addButton = document.getElementById('addButton'); //button to add tasks
const taskList= document.getElementById('taskList'); //unordered list to display tasks

//Function to create a new task
function createTask(taskText){
    //Create a new list item (li) element
    const newTask=document.createElement('li');
    //Set the text of the task(inside the li element)
    newTask.textContent=taskText;
    //Create a remove button for the task
    const removeButton=document.createElement('button');
    removeButton.textContent='Remove';
    removeButton.classList.add('removeBtn'); //Add styling class to the button
    //Add the remove button next to the task text
    newTask.appendChild(removeButton);
    removeButton.addEventListener('click',()=>{
        taskList.removeChild(newTask); 
    });
    //Add an event listener to mark the task as completed
    newTask.addEventListener('click',()=>{
        newTask.classList.toggle('completed');//Toggle completed status
    });
    taskList.appendChild(newTask);
}
//Function to add a task when Add button is clicked
addButton.addEventListener('click',()=>{
    const taskText=taskInput.value.trim(); //Get the input value(remove extra space)
    if (taskText!==''){
        createTask(taskText)
        taskInput.value=''; //clear the input field after adding the task
    }
});
