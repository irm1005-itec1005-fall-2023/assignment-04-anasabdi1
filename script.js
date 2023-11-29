// Variables
const appID = "app";


// DOM Elements
let appContainer = document.getElementById(appID);
const todoList = document.getElementById('todo-list');
const addTodoInput = document.getElementById('add-todo');
const addTodoButton = document.getElementById('add-todo-button');
const clearTasksButton = document.getElementById('clear-tasks-button'); 
// Functions
function inititialise() {
  if (!appContainer) {
    console.error("Error: Could not find app container");
    return;
  }

  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  console.log("App successfully initialised");
}

function addTodo() {
  const text = addTodoInput.value.trim();
  if (text !== '') {
    const todo = createTodoItem(text);
    todoList.appendChild(todo);
    addTodoInput.value = '';

    if (todoList.childElementCount === 1) {
      clearTasksButton.style.display = 'inline-block';
    }
  }
}

function createTodoItem(text) {
  const todoItem = document.createElement('section');
  todoItem.classList.add('todo-item');

  const todoCheckbox = document.createElement('input');
  todoCheckbox.type = 'checkbox';
  todoCheckbox.classList.add('checkbox');

  const todoText = document.createElement('section');
  todoText.textContent = text;
  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoText);

  const todoActions = document.createElement('section');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', function() {
    todoList.removeChild(todoItem);

    if (todoList.childElementCount === 0) {
      clearTasksButton.style.display = 'none';
    }
  });

  todoActions.appendChild(deleteButton);
  todoItem.appendChild(todoActions);

  return todoItem;
}

function clearTasks() {
  todoList.innerHTML = '';
  clearTasksButton.style.display = 'none';
}

// Inits & Event Listeners
inititialise();
addTodoButton.addEventListener('click', addTodo);
clearTasksButton.addEventListener('click', clearTasks);
