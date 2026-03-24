/*
frontend/script.js
- Controls guest mode (localStorage)
- Controls account mode (backend fetch API)
- DOM updates for tasks
*/

const authSection = document.getElementById('auth-section');
const todoSection = document.getElementById('todo-section');
const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');

let session = {
  mode: 'guest', // 'guest' or 'account'
  user: null,
  token: null
};

// localStorage helpers
function getGuestTodos() {
  return JSON.parse(localStorage.getItem('guestTodos') || '[]');
}
function saveGuestTodos(todos) {
  localStorage.setItem('guestTodos', JSON.stringify(todos));
}

// render UI
function renderTodos(todos) {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.title;
    if (todo.completed) li.style.textDecoration = 'line-through';
    // delete button etc.
    todoList.appendChild(li);
  });
}

// event handlers
document.getElementById('guest-btn').addEventListener('click', () => {
  session.mode = 'guest';
  authSection.style.display = 'none';
  todoSection.style.display = 'block';
  renderTodos(getGuestTodos());
});

document.getElementById('signup-form').addEventListener('submit', async e => {
  e.preventDefault();
  const payload = { ... };
  // fetch('/signup', ...)
});

// etc: login form, add todo, delete/update
