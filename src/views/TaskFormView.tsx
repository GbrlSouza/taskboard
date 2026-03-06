import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

interface Props {
  onAdd: (title: string) => void;
}

export default function TaskFormView({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  function handleAdd() {
    if (!title.trim()) return;

    onAdd(title);

    setTitle("");
  }

  return (
    <View style={{ marginVertical: 20 }}>
      <TextInput
        placeholder="Nova tarefa"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
        }}
      />

      <Button title="Adicionar" onPress={handleAdd} />
    </View>
  );
}
