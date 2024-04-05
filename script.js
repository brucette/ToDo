const list = document.querySelector('#list');
const taskList = list.querySelectorAll('li');
const form = document.querySelector('#taskForm');
const task = form['task'];
//console.log({list.innerHTML});
taskList.forEach(li => console.log(li.innerHTML));

function addTaskToList(event) {
    event.preventDefault();
    list.innerHTML += `
    <li>${task.value}</li>`
    console.log(taskList);
    form.reset();
}

function changeBackGround(event) {
    //console.log(event.target.value);
    event.target.classList.toggle('text-decoration-line-through');
    event.target.classList.toggle('bg-success');
}
// add event listeners

taskList.forEach(li => li.addEventListener('click', (e) =>
//(e) => console.log('som', e.target)));
//e.target.classList.toggle('bg-success')));
changeBackGround(e)));


document.querySelectorAll('p')
.forEach(p=>p.addEventListener('click', (e)=>
    console.log('Working', e.target)));

form.addEventListener('submit', addTaskToList);