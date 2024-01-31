// Initialize an empty array to store todo items
const todoList = [];

// Function to add a new item to the todo list
function addItem() {
  const newItem = prompt('Enter a new todo item:');
  if (newItem) {
    todoList.push(newItem);
    console.log(`"${newItem}" added to the todo list.`);
  } else {
    console.log('Invalid input. Todo item not added.');
  }
}

// Function to remove an item from the todo list
function removeItem() {
  const indexToRemove = prompt('Enter the index of the item to remove:');
  if (indexToRemove !== null && !isNaN(indexToRemove) && indexToRemove < todoList.length) {
    const removedItem = todoList.splice(indexToRemove, 1);
    console.log(`"${removedItem}" removed from the todo list.`);
  } else {
    console.log('Invalid index. Todo item not removed.');
  }
}

// Function to list all items in the todo list
function listItems() {
  console.log('Todo List:');
  todoList.forEach((item, index) => {
    console.log(`${index}. ${item}`);
  });
}

// Main loop for user interaction
while (true) {
  const userInput = prompt(
    'Enter a command: (add / remove / list / quit)\n(Type "quit" to exit the todo list)'
  );

  switch (userInput.toLowerCase()) {
    case 'add':
      addItem();
      break;
    case 'remove':
      removeItem();
      break;
    case 'list':
      listItems();
      break;
    case 'quit':
      console.log('Exiting the todo list.');
      // Exiting the loop if the user types 'quit'
      // This will end the script, and no more prompts will appear
      throw new Error('User quit');
    default:
      console.log('Invalid command. Try again.');
  }
}