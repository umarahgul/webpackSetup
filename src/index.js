import _ from 'lodash';
import './style.css';
import addItem from './modules/addItem.js'
import options from '/src/assets/options.png'


  const todoList=[
    {
      description: 'wash dishes',
      completed:false,
      index: 0
    },
    {
      description: 'wash clothes',
      completed:false,
      index: 1
    }
  ];

  const populateList = () => {
    // alert("hello world");
   const parent= document.getElementById('populate');
   const ulList= document.createElement('ul');
   ulList.classList.add('ulList');
    for(let x=0; x< todoList.length; x += 1)
    {      
      if (todoList[x].completed===false) 
      {
        const divContainer =document.createElement('div');
        divContainer.classList.add('divContainer');
        const checkbox=document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        const liList=document.createElement('li');
        liList.classList.add('liList');
      //  liList.setAttribute('id',);
        liList.textContent=todoList[x].description;
        const option=document.createElement('img');
        option.src=options;
        
        divContainer.appendChild(checkbox);
        divContainer.appendChild(liList);
        divContainer.appendChild(option);
        ulList.appendChild(divContainer);
        
      }  
      
      
    }

    parent.appendChild(ulList);
  }
  
  document.addEventListener('DOMContentLoaded', populateList);
  