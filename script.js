const form = document.querySelector('#taskForm');
const task = form['task'];
const list = document.querySelector('#list');

// Eventlisteners
form.addEventListener('submit', addTaskToList);

// Functions
function addTaskToList(event) {

    event.preventDefault();
    list.innerHTML += 
    `
        <li>
            ${task.value} 
        <button class="deleteBtn">X</button>
        </li>
    `
    form.reset();
    // const taskItem = list.querySelector('li:last-of-type');
    // taskItem.addEventListener('click', changeBackGround);

    // const deleteBtn = document.querySelector('.deleteBtn:last-of-type');
    // console.log(deleteBtn);
    // deleteBtn.addEventListener('click', deleteTask);

    // get all tasks and listen for click
    const taskList = list.querySelectorAll('li');
    taskList.forEach(li => li.addEventListener('click',
    changeBackGround));

    // get all delete buttons and listen for click
    const deleteBtns = list.querySelectorAll('.deleteBtn');
    deleteBtns.forEach(btn => btn.addEventListener('click', 
    deleteTask));
}

function changeBackGround(event) {
    event.target.classList.toggle('completed');
    //event.stopPropagation();
}

function deleteTask(event) {
    console.log('hej!');

    // these two do the same thing - remove the button:
    //event.target.remove();
    //console.log(this.remove());

    
    // removes both task and button:
    event.target.parentNode.remove();
    //event.stopPropagation();
}

