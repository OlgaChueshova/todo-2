import { Database } from "../database/Database";
class TodoList {
  constructor() {
    this.database = Database.getInstance();
  }

  getTasks() {
    return this.database.read("tasks")
  }

  createTask(body) {
    return this.database.create("tasks", body);
  }

  deleteTask(id) {
    return this.database.delete('tasks', id)
  }
}

export const todoList = new TodoList(); 