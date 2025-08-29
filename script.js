function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${task} <span onclick="removeTodo(this)">❌</span>`;
  
  document.getElementById("todoList").appendChild(li);
  input.value = ""; // clear input
}

function removeTodo(element) {
  element.parentElement.remove();
}
