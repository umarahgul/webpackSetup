import { curdFunctionality, todoList, removeTask } from './curd.js';
import 'text-encoding';

describe(' Add 1 item and remove 1 item from the list ', () => {
  // Mock the DOM for testing curdFunctionality
  document.body.innerHTML = `
    <input id="inputVal" />
    <!-- Other elements -->
  `;

  // Mock getElementById to return a dummy element
  document.getElementById = jest.fn().mockReturnValue(document.createElement('div'));

  // Set up input element and add event listener
  const inputElement = document.getElementById('inputVal');
  curdFunctionality();

  afterEach(() => {
    todoList.length = 0; // Reset todoList to an empty array
  });

  test('this function adds an element to the list', () => {
    const mockTask = 'New Task';
    inputElement.value = mockTask;

    // Create a mock Enter keypress event
    const enterKeyEvent = new KeyboardEvent('keypress', { key: 'Enter' });

    // Trigger the Enter keypress event on the input element
    inputElement.dispatchEvent(enterKeyEvent);

    // Retrieve the updated todoList from localStorage
    const updatedTodoList = JSON.parse(localStorage.getItem('todoList'));

    // Check if the new task was correctly added to the todoList array
    expect(updatedTodoList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          description: mockTask,
          completed: false,
          index: expect.any(Number),
        }),
      ]),
    );
  });

  test('this function removes an element from the list', () => {
    // Mock data to add a task to the list
    todoList.length = 0;

    // Mock the DOM elements
    const initialTask = { description: 'Task 1', completed: false, index: 1 };
    todoList.push(initialTask);
    removeTask(0);
    expect(todoList.length).toBe(0); // The item should be removed from todoList
  });
});
