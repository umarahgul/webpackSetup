import "./style.css";
import {
  todoList,
  populateList,
  curdFunctionality,
  retrieveTodoListFromLocalStorage,
} from "./curd.js";
import { clearCompleted } from "./status";

document.addEventListener("DOMContentLoaded", () => {
  curdFunctionality();

document.addEventListener('DOMContentLoaded', () => {
  const storedTodoList = retrieveTodoListFromLocalStorage();
  todoList.push(...storedTodoList);

  const clearButton = document.querySelector(".clearAll");
  clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    clearCompleted(todoList);
  });
});
document.addEventListener('DOMContentLoaded', populateList);
}