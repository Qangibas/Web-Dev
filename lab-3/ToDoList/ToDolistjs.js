let todoList = document.getElementById('todoList');
let taskInput = document.getElementById('newTask');
let addBtn = document.getElementById('addBtn');

function createTodoItem(text) {
    let div = document.createElement('div');
    div.className = 'todo-item';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.onclick = function() {
        div.classList.toggle('completed');
    };

    let span = document.createElement('span');
    span.textContent = text;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        div.remove();
    };

    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(deleteBtn);

    return div;
}

function addTask() {
    let text = taskInput.value.trim();
    if (text !== '') {
        todoList.appendChild(createTodoItem(text));
        taskInput.value = '';
    }
}

addBtn.onclick = addTask;

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
})