const API_URL = "http://localhost:5001/api/todos";

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const addTodo = async (text) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: text }),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  return response.json();
};

export const toggleTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}/toggle`, {
    method: "PATCH",
  });
  if (!response.ok) {
    throw new Error("Failed to toggle todo");
  }
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};
