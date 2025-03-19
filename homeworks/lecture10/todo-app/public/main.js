function handleCheck(ele) {
  const id = ele.dataset.id;
  fetch(`/api/todos/${id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Refresh the page to show updated status
      window.location.reload();
    })
    .catch((err) => {
      console.error("Error updating todo:", err);
      alert("Failed to update todo");
    });
}

function handleSubmit() {
  const todo = document.querySelector("#todo").value;
  if (!todo) return alert("Please enter a todo");

  fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Todo created:", data);
      window.location.reload();
    })
    .catch((err) => {
      console.error("Error creating todo:", err);
      alert("Failed to create todo");
    });
}

// Add function to delete todo
function handleDelete(id) {
  if (!confirm("Are you sure you want to delete this todo?")) return;

  fetch(`/api/todos/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Todo deleted:", data);
      window.location.reload();
    })
    .catch((err) => {
      console.error("Error deleting todo:", err);
      alert("Failed to delete todo");
    });
}

document.querySelector("#todo").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSubmit();
  }
});
