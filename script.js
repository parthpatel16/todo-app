document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-todo-btn');
  const inputField = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  addButton.onclick = function() {
      const task = inputField.value;
      if (task) {
          const listItem = document.createElement('li');
          listItem.textContent = task;
          todoList.appendChild(listItem);
          inputField.value = ''; // Clear the input field
      } else {
          alert('Please enter a task.');
      }
  };
});
