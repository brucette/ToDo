const form = document.querySelector('#taskForm');
const task = form['task'];
const deleteBtns = document.querySelectorAll('.deleteBtn');
const list = document.querySelector('#list');
//const taskList = list.querySelectorAll('li');

// Eventlisteners
form.addEventListener('submit', addTaskToList);

//taskList.forEach(li => li.addEventListener('click', (event) =>
//changeBackGround(event)));

// deleteBtns.forEach(btn => btn.addEventListener('click', (event) =>
// deleteTask(event)));


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
    // let newItem = document.createElement('li');
    // let itemText = document.createTextNode(task.value);
    // newItem.appendChild(itemText);
    // let button = document.createElement('button');
    // let buttonText = document.createTextNode('X');
    // button.appendChild(buttonText);
    // newItem.appendChild(button);
    // list.appendChild(newItem);

    form.reset();
    //console.log({deleteBtns});
    //console.log({taskList});
    const taskItem = list.querySelector('li:last-of-type');
    taskItem.addEventListener('click', changeBackGround);

    const deleteBtn = document.querySelector('.deleteBtn:last-of-type');
    console.log(deleteBtn);
    deleteBtn.addEventListener('click', deleteTask);
}

function changeBackGround(event) {
    event.target.classList.toggle('completed');
    //event.stopPropagation();
}

function deleteTask(event) {
    //event.target.remove();
   //console.log({deleteBtns});
    console.log('hej!');
    //console.log(this.remove());
    //console.log(event.target.parentNode.remove());
    //event.stopPropagation();
}

