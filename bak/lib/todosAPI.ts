const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const newTask = await res.json();
  return newTask;
};

export const editTodo = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const updatedTask = await res.json();
  return updatedTask;
};

export const deleteTodo = async (taskId: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${taskId}`, {
    method: 'DELETE',
  });
};
