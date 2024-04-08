const form = document.querySelector('#taskForm');
const task = form['task'];
const list = document.querySelector('#list');

// Functions
function addTaskToList(event) {

    event.preventDefault();
    list.insertAdjacentHTML('beforeend', 
    `
        <li class="list-group-item mb-3">
            ${task.value} 
            <button class="deleteBtn">X</button>
        </li>
    `);

    let lastChild = list.lastElementChild;
    lastChild.addEventListener('click', changeBackGround);
    lastChild.querySelector('button').addEventListener('click', deleteTask);
    
    form.reset();
}

function changeBackGround() {
    this.classList.toggle('completed');
}

function deleteTask() {
    // removes both task and button:
    this.parentNode.remove();
}

// Event listeners
form.addEventListener('submit', addTaskToList);
