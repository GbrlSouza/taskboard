import TaskService from "../services/TaskService";
import { Task } from "../models/Task";

class TaskController {
  list(): Task[] {
    return TaskService.getAll();
  }

  create(title: string): Task {
    return TaskService.add(title);
  }

  toggle(id: number) {
    TaskService.toggle(id);
  }

  delete(id: number) {
    TaskService.remove(id);
  }
}

export default new TaskController();
