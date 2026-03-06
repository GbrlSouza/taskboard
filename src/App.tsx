import React from "react";
import { View, Text } from "react-native";
import TaskListView from "./views/TaskListView";

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>TaskFlow</Text>

      <TaskListView />
    </View>
  );
}
