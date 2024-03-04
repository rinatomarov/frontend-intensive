document.addEventListener('DOMContentLoaded', function () {
    const todoColumn = document.getElementById('todo-column');
    const inProgressColumn = document.getElementById('in-progress-column');
    const doneColumn = document.getElementById('done-column');

    let draggedItem = null;

    function allowDrop(event) {
        event.preventDefault();
    }

    function drag(event) {
        draggedItem = event.target;
    }

    function drop(event) {
        event.preventDefault();
        if (event.target.classList.contains('todo-column')) {
            event.target.appendChild(draggedItem);
        }
    }

    todoColumn.addEventListener('dragover', allowDrop);
    inProgressColumn.addEventListener('dragover', allowDrop);
    doneColumn.addEventListener('dragover', allowDrop);

    todoColumn.addEventListener('drop', drop);
    inProgressColumn.addEventListener('drop', drop);
    doneColumn.addEventListener('drop', drop);

    const tasks = [
        { text: 'Task 1', status: 'todo' },
        { text: 'Task 2', status: 'in-progress' },
        { text: 'Task 3', status: 'done' }
    ];

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('todo-item');
        taskElement.draggable = true;
        taskElement.textContent = task.text;

        if (task.status === 'todo') {
            todoColumn.appendChild(taskElement);
        } else if (task.status === 'in-progress') {
            inProgressColumn.appendChild(taskElement);
        } else if (task.status === 'done') {
            doneColumn.appendChild(taskElement);
        }

        taskElement.addEventListener('dragstart', drag);
    });
});
