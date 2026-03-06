import React from "react";
import { View, Text, Button } from "react-native";
import { Task } from "../models/Task";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
      }}
    >
      <Text
        style={{
          textDecorationLine: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </Text>

      <View style={{ flexDirection: "row", gap: 5 }}>
        <Button title="✔" onPress={() => onToggle(task.id)} />

        <Button title="X" onPress={() => onDelete(task.id)} />
      </View>
    </View>
  );
}
