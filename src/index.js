import './style.css';
/* eslint-disable import/no-cycle */
import options from './assets/options.png';
import {
  curdFunctionality,
  removeVal,
  saveTodoListToLocalStorage,
  retrieveTodoListFromLocalStorage,
} from './curd.js';

export const todoList = [];

export const populateList = () => {
  const parent = document.getElementById('populate');
  parent.innerHTML = '';
  const ulList = document.createElement('ul');
  ulList.classList.add('ulList');
  const storedTodoList = retrieveTodoListFromLocalStorage();
  for (let x = 0; x < todoList.length; x += 1) {
    if (todoList[x].completed === false) {
      const divContainer = document.createElement('div');
      divContainer.classList.add('divContainer');
      divContainer.setAttribute('id', `id${x}`);
      const divSmall = document.createElement('div');
      divSmall.classList.add('divSmall');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      const liList = document.createElement('li');
      liList.classList.add('liList');

      liList.textContent = todoList[x].description;
      const option = document.createElement('img');
      option.classList.add('three-dots');
      option.src = options;
      removeVal(option, divContainer, x);

      divSmall.appendChild(checkbox);
      divSmall.appendChild(liList);
      divContainer.appendChild(divSmall);
      divContainer.appendChild(option);
      ulList.appendChild(divContainer);
    }
  }
  parent.appendChild(ulList);
  // saveTodoListToLocalStorage();
};

document.addEventListener('DOMContentLoaded', populateList);

document.addEventListener('DOMContentLoaded', () => {
  // Retrieve todoList from local storage
  retrieveTodoListFromLocalStorage();
  curdFunctionality();
});
