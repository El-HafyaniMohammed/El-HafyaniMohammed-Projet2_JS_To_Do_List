const form = document.getElementById('task-form');
const input = document.getElementById('inp');
const todoList = document.getElementById('todo-list');

// Charger les tâches depuis localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

// Ajouter une tâche
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please ajouter une tâche');
    return;
  }

  tasks.push(taskText);
  saveTasks();
  renderTasks();
  input.value = '';
});

// Fonction pour sauvegarder dans localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  todoList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add('list');

    const span = document.createElement('span');
    span.textContent = task;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', () => editTask(index));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function editTask(index) {
  const newTask = prompt('Modifier la tâche:', tasks[index]);
  if (newTask !== null) {
    const trimmed = newTask.trim();
    if (trimmed !== '') {
      tasks[index] = trimmed;
      saveTasks();
      renderTasks();
    } else {
      alert('La tâche ne peut pas être vide.');
    }
  }
}

function deleteTask(index) {
  if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}