const todoList = [
  {
    name: "make dinner",
    dueDate: "12-22-2022",
  },
  {
    name: "wash dishes",
    dueDate: "12-22-2022",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        console.log(index); //even though index gets deleted right away down below, if we click one of these buttons later on, it still has access to index. => closure.
        todoList.splice(index, 1); //this function used index from above. As soon as .forEach ends, index gets deleted.
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });

  //console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}
