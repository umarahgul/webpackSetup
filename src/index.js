import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import addItem from './modules/addItem.js'


  const todoList=[
    {
      descritpion: 'wash dishes',
      completed:'false',
      index: '0'
    },
    {
      description: 'wash clothes',
      completed:'false',
      index: '1'
    }
  ];

  const populateList = () => {
   const parent= document.getElementById('populate');
    for(let x=0; x< todoList.length; x +=1)
    {
      const ulList= document.
      if (completed) 
      {
        const ulList= document.createElement('ul');
        const liList=document.createElement('li');
        liList.textContent=todoList[x].description;
        ulList.appendChild(liList);
        parent.appendChild(li);
      }  
        
    }
  }
  
  document.addEventListener('DOMContentLoaded', () =>{

    populateList();
  });
  