import './style.css';

import options from './assets/options.png';
import {curdFunctionality, removeVal} from './curd.js'
import { saveTodoListToLocalStorage, retrieveTodoListFromLocalStorage } from './curd.js';
import { div } from 'prelude-ls';

export const todoList = [];

document.addEventListener('DOMContentLoaded', () => {
  // Retrieve todoList from local storage
  retrieveTodoListFromLocalStorage();

  // Populate the list
  populateList();
  curdFunctionality();
});


export const populateList = () => {
  

  const parent = document.getElementById('populate');
  parent.innerHTML = '';
  saveTodoListToLocalStorage();
  const ulList = document.createElement('ul');
  ulList.classList.add('ulList');
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
      removeVal(option,divContainer,x);

      // option.addEventListener('click', () => {
    
      //   option.style.display = 'none';
      //   const rbin = document.createElement('img');
      //   rbin.src = bin;

      //   divContainer.appendChild(rbin);

      //   rbin.addEventListener('click', () => {
      //     document.getElementById(`id${x}`).remove();
      //     rbin.style.display = 'none';
      //   });
      // });


      divSmall.appendChild(checkbox);
      divSmall.appendChild(liList);
      divContainer.appendChild(divSmall);
      divContainer.appendChild(option);
      ulList.appendChild(divContainer);
    }
  }
  parent.appendChild(ulList);
};

document.addEventListener('DOMContentLoaded', populateList);
curdFunctionality();

// const val = document.getElementById('inputVal');
// val.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') {
//     const newItem = {
//       description: val.value,
//       completed: false,
//       index: todoList.length, // Set the index to the next available index
//     };
//     todoList.push(newItem);
//     val.value = '';
//     populateList();
//   }
// });
