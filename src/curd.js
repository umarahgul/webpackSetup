const curdFunctionality = () => {

    const val = document.getElementById('inputVal');
    val.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const newItem = {
          description: val.value,
          completed: false,
          index: todoList.length, // Set the index to the next available index
        };
        todoList.push(newItem);
        val.value = '';
        populateList();
      }
    });
    

}

export default curdFunctionality;