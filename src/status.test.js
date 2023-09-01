import { updateStatus, clearCompleted } from "./status";
import {saveTodoListToLocalStorage, todoList} from './curd'

describe("check status update nad clear completed status", () => {
    afterEach(() => {
        todoList.length = 0; // Reset todoList to an empty array
      });
    

test ('this test will check status is updated or not ' , () => {
todoList.length=0;

const initialTask =[{description: 'task1', completed: false, index:0}];
// update the completed status to true .
todoList.push(initialTask);

updateStatus(todoList, saveTodoListToLocalStorage, 0);

//asserttion
expect(todoList[0].completed).toBe(true);


});

test(' this clears all the tasks with status completed=true', () => {

todoList.length=0;
const obj1 = {description: 'task1', completed: false, index:0};
const obj2 = {description: 'task2', completed: true, index:1};
// push obj2 before obj1 in this way obj2 with completed : true is removed from the list and obj1 comes at todoList[0] 
todoList.push(obj2);
todoList.push(obj1);

clearCompleted(todoList);

//expect(todoList[0].completed).toBe(false);
expect(todoList[0].description).toBe('task1');

});


});