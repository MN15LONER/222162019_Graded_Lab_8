import React, { useState } from 'react';
import { SafeAreaView,View,Text,TextInput,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function TaskItem({ item, onToggle, onDelete }) {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => onToggle(item.id)} style={styles.checkBox}>
        <Text style={styles.checkBoxText}>{item.done ? 'done' : 'still-to-do'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onToggle(item.id)} style={styles.taskTextContainer}>
        <Text style={[styles.taskText, item.done && styles.taskTextDone]}>{item.text}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    const text = taskText.trim();
    if (!text) {
      alert('Please enter a task');
      return;
    }

  const newTask = {
  id: Date.now().toString(),
  text,
  done: false,
};


    setTasks(prev => [newTask, ...prev]);
    setTaskText('');
  };

  const toggleTask = id => {
    setTasks(prev => prev.map(task => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const deleteTask = id => {
    setTasks(prev => prev.filter(t => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Enter a new task"
            value={taskText}
            onChangeText={setTaskText}
            returnKeyType="done"
            onSubmitEditing={addTask}
            blurOnSubmit={false}
          />

          <TouchableOpacity style={styles.addButton} onPress={addTask} accessibilityLabel="Add task">
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TaskItem item={item} onToggle={toggleTask} onDelete={deleteTask} />
          )}
          contentContainerStyle={styles.list}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 60,
    paddingTop:60,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginRight: 8,
  },
  addButton: {
    backgroundColor: 'green',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  list: {
    paddingBottom: 40,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: 'white',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  checkBox: {
    padding: 6,
    marginRight: 8,
  },
  checkBoxText: {
    fontSize: 20,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#222',
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  deleteButton: {
    padding: 6,
    marginLeft: 8,
  },
  deleteText: {
    fontSize: 18,
  },
});
