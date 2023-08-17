const addItem = () => {

const container =document.getElementById('container');
const ulContainer =document.getElementById('todolist');  

if (!ulContainer) {
    console.error("Cannot find 'todolist' element.");
    return;
  }

const newItem= document.createElement('li');
newItem.textContent="hello world";
console.log('i was called');
alert('adding item');

ulContainer.appendChild(newItem);
container.appendChild(ulContainer);
const enter=document.getElementById('enter');
enter.addEventListener('click', addItem);


}

export default addItem;