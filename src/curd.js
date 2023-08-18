import {todoList, populateList} from './index.js'
import bin from './assets/recyclebin.png';

export const curdFunctionality = () => {

    const val = document.getElementById('inputVal');
    val.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const newItem = {
          description: val.value,
          completed: false,    // value of new object set to fasle by default
          index: todoList.length, // Set the index to the next available index
        };
        todoList.push(newItem);
        val.value = '';
        populateList();
      
      }
    });
    
}

export const removeVal = (optionElement,divContainer, x) => {
    //const option = divContainer.querySelector('.three-dots');
    optionElement.addEventListener('click', () => {
    
        optionElement.style.display = 'none';
        const rbin = document.createElement('img');
        rbin.src = bin;

        divContainer.appendChild(rbin);

        rbin.addEventListener('click', () => {
          document.getElementById(`id${x}`).remove();
          rbin.style.display = 'none';
          todoList.splice(x,1);
// Deleting a task should update all remaining items' indexes, so they represent the current list order
// and are unique(i.e. if you're deleting the first task index 1 from the list, the index of the next task(2) should set to 1)..
for (let y=0; y<todoList.length; y += 1)
{
     todoList[y].index=y;
     
}

        });
      });

    }     
    
    // Function to save the todoList to local storage
export const saveTodoListToLocalStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };
  
  // Function to retrieve the todoList from local storage
  export const retrieveTodoListFromLocalStorage = () => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      todoList = JSON.parse(storedTodoList);
    }
  };


