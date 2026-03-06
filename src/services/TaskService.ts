import { Task } from "../models/Task";
import { mockTasks } from "../mocks/tasks";

class TaskService {
  private tasks: Task[] = [...mockTasks];

  getAll(): Task[] {
    return this.tasks;
  }

  add(title: string): Task {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    this.tasks.push(newTask);

    return newTask;
  }

  toggle(id: number) {
    const task = this.tasks.find((t) => t.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }

  remove(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}

export default new TaskService();
