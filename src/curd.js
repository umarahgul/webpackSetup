/* eslint-disable import/no-cycle */

import { todoList, populateList } from './index.js';
import bin from './assets/recyclebin.png';

export const saveTodoListToLocalStorage = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

// Function to retrieve the todoList from local storage
export const retrieveTodoListFromLocalStorage = () => {
  const storedTodoList = localStorage.getItem('todoList');
  if (storedTodoList) {
    return JSON.parse(storedTodoList);
  }
  return [];
};

export const curdFunctionality = () => {
  const val = document.getElementById('inputVal');

  const storedValue = localStorage.getItem('inputValue');
  if (storedValue) {
    val.value = storedValue;
  }

  val.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const newItem = {
        description: val.value,
        completed: false, // value of new object set to fasle by default
        index: todoList.length + 1, // Set the index to the next available index
      };

      todoList.push(newItem);

      alert('hello baby');
      saveTodoListToLocalStorage();
      populateList();
      val.value = '';
    }
  });
};
export const removeVal = (optionElement, divContainer, x) => {
  optionElement.addEventListener('click', () => {
    optionElement.style.display = 'none';
    const rbin = document.createElement('img');
    rbin.src = bin;

    divContainer.appendChild(rbin);

    rbin.addEventListener('click', () => {
      document.getElementById(`id${x}`).remove();
      rbin.style.display = 'none';
      todoList.splice(x, 1);

      for (let y = 0; y < todoList.length; y += 1) {
        todoList[y].index = y + 1;
      }

      saveTodoListToLocalStorage();
    });
  });
};

export function editDescp(x) {
  const newDescription = prompt(`Enter a new description: ${x}`);

  if (newDescription !== null && newDescription !== '') {
    // Update the description in the todoList array
    todoList[x].description = newDescription;

    // Re-populate the list to reflect the changes
    populateList();

    // Save the updated todoList to local storage
    saveTodoListToLocalStorage();
  }
}
