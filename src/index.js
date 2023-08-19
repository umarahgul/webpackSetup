import './style.css';
import {
  todoList,
  populateList,
  curdFunctionality,
  retrieveTodoListFromLocalStorage,
} from './curd.js';


document.addEventListener('DOMContentLoaded', () => {
  const storedTodoList = retrieveTodoListFromLocalStorage();
  todoList.push(...storedTodoList);

  curdFunctionality();
});
document.addEventListener('DOMContentLoaded', populateList);