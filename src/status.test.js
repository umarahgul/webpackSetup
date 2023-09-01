import { updateStatus, clearCompleted } from './status';
import { saveTodoListToLocalStorage, todoList } from './curd';

describe('check status update nad clear completed status', () => {
  afterEach(() => {
    todoList.length = 0; // Reset todoList to an empty array
  });

  test('this test will check status is updated or not ', () => {
    todoList.length = 0;

    const initialTask = [{ description: 'task1', completed: false, index: 0 }];
    // update the completed status to true .
    todoList.push(initialTask);

    updateStatus(todoList, saveTodoListToLocalStorage, 0);

    // asserttion
    expect(todoList[0].completed).toBe(true);
  });

  
});