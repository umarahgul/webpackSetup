
import todoList from './curd.js'

export const statusUpdate = () => {
// create an index for array

const ind=todoList.index-1

const chk=document.createElementById(`chk${ind}`);

if (chk.checked==='true')
{
    // if the checbox is checked set the completed status o true.
    todoList[ind].completed=true;
}
 // update local storage 
 //upate display 

}

const clearAll = () => {}