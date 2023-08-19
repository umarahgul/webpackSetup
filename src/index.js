import "./style.css";
import {
  todoList,
  populateList,
  curdFunctionality,
  retrieveTodoListFromLocalStorage,
} from "./curd.js";

document.addEventListener("DOMContentLoaded", populateList);
document.addEventListener("DOMContentLoaded", () => {
  const storedTodoList = retrieveTodoListFromLocalStorage();
  todoList.push(...storedTodoList);

  curdFunctionality();
});
