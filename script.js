const list = document.querySelector('#list');
const taskList = list.querySelectorAll('li');
const form = document.querySelector('#taskForm');
const task = form['task'];

function addTaskToList(event) {
    event.preventDefault();
    list.innerHTML += `
    <li>${task.value}</li>`

    form.reset();
}

function changeBackGround(event) {
    console.log(event.target);
    //.classList()
}
// add event listeners
taskList.forEach(li => {
    li.addEventListener('click', changeBackGround)
});

form.addEventListener('submit', addTaskToList);