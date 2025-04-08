const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const markAllBtn = document.getElementById("mark-all");
const clearCompletedBtn = document.getElementById("clear-completed");
const activeCount = document.getElementById("active-count");

let todos = [];

function renderTodos() {
  list.innerHTML = "";
  let active = 0;
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = todo.text;
    if (todo.completed) {
      text.classList.add("completed");
    } else {
      active++;
    }

    text.onclick = () => {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    };

    li.appendChild(text);
    list.appendChild(li);
  });
  activeCount.textContent = `${active} items left`;
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    todos.push({ text: input.value.trim(), completed: false });
    input.value = "";
    renderTodos();
  }
});

markAllBtn.addEventListener("click", () => {
  todos = todos.map((todo) => ({ ...todo, completed: true }));
  renderTodos();
});

clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
});
