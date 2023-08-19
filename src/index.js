import './style.css';
// import options from './assets/options.png';
import {
  todoList,
  populateList,
  curdFunctionality,
  retrieveTodoListFromLocalStorage,
} from './curd.js';

document.addEventListener('DOMContentLoaded', populateList);
document.addEventListener('DOMContentLoaded', () => {
  const storedTodoList = retrieveTodoListFromLocalStorage();
  todoList.push(...storedTodoList);

  curdFunctionality();
});
