export const updateStatus = (
  todoList,
  saveTodoListToLocalStorage,
  dataIndex
) => {
  todoList[dataIndex].completed = true;
  const updatedTodoListJSON = JSON.stringify(todoList);

  // Save the updated JSON string to local storage
  localStorage.setItem("todoList", updatedTodoListJSON);
  // update in local storage
};

export const clearCompleted = (todoList) => {
  const filteredArray = todoList.filter((obj) => obj.completed === false);
  const maxIndex = filteredArray.length;
  for (let i = 0; i < maxIndex; i += 1) {
    filteredArray[i].index = i + 1;
  }
  localStorage.setItem("toDoList", JSON.stringify(filteredArray));
  window.location.reload();
};
