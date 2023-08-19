import bin from './assets/recyclebin.png';
import { todoList } from './index.js';
import options from './assets/options.png';
export const todoList = [];

const liList = document.createElement('li');
export const populateList = () => {
  const parent = document.getElementById('populate');
  parent.innerHTML = '';
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

      
      liList.classList.add('liList');
      liList.setAttribute('id', `descp${x}`);
      

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
};

export const removeVal = (optionElement, divContainer, x) => {
    // Your implementation
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
  





export const saveTodoListToLocalStorage = () => {
  // Your implementation
  localStorage.setItem('todoList', JSON.stringify(todoList));
};


export function editDescp(x) {
  // Your implementation
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