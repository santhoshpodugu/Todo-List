const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
renderHTML();
function renderHTML() {
  let todoHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class ="delete-button" onclick = "
        todoList.splice(${i}, 1);
        renderHTML();
        saveToStorage();
        ">Delete</button>
        `;
    todoHTML += html;
  }
  document.querySelector(".todoHTML").innerHTML = todoHTML;
}

function addTodo() {
  const todoInput = document.querySelector(".js-todo-input");
  const name = todoInput.value;
  const dateInput = document.querySelector(".dueDate");
  const dueDate = dateInput.value;

  todoList.push({ name, dueDate });
  todoInput.value = "";
  dateInput.value = "";
  renderHTML();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
