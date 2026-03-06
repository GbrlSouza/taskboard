import React, { useState } from "react";
import { View } from "react-native";
import TaskController from "../controllers/TaskController";
import TaskFormView from "./TaskFormView";
import TaskItem from "../components/TaskItem";
import { Task } from "../models/Task";

export default function TaskListView() {
  const [tasks, setTasks] = useState<Task[]>(TaskController.list());

  function refresh() {
    setTasks([...TaskController.list()]);
  }

  function handleAdd(title: string) {
    TaskController.create(title);
    refresh();
  }

  function toggle(id: number) {
    TaskController.toggle(id);
    refresh();
  }

  function remove(id: number) {
    TaskController.delete(id);
    refresh();
  }

  return (
    <View>
      <TaskFormView onAdd={handleAdd} />

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggle}
          onDelete={remove}
        />
      ))}
    </View>
  );
}
