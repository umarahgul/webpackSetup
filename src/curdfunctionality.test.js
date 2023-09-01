import { curdFunctionality, todoList, removeTask } from './curd';
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
});
