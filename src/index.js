import './style.css';
import {
  todoList,
  populateList,
  curdFunctionality,
  retrieveTodoListFromLocalStorage,
} from './curd.js';
import { clearCompleted } from './status.js';

document.addEventListener('DOMContentLoaded', () => {
  curdFunctionality();

  const storedTodoList = retrieveTodoListFromLocalStorage();
  todoList.push(...storedTodoList);

  const clearButton = document.querySelector('.clearAll');
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearCompleted(todoList);
  });
  populateList();
});

//document.addEventListener('DOMContentLoaded', populateList);
