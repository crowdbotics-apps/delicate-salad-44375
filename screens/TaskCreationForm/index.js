import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, StyleSheet, Picker } from 'react-native';

const TaskScreen = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');
  const [points, setPoints] = useState('');
  const [child, setChild] = useState('');
  const children = ['Child 1', 'Child 2', 'Child 3'];
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Task Assignment</Text>
      <TextInput style={styles.input} placeholder="Task Description" onChangeText={setTask} value={task} />
      <TextInput style={styles.input} placeholder="Due Date" onChangeText={setDueDate} value={dueDate} />
      <TextInput style={styles.input} placeholder="Time" onChangeText={setTime} value={time} />
      <TextInput style={styles.input} placeholder="Points or Token to be rewarded" onChangeText={setPoints} value={points} />
      <Picker selectedValue={child} style={styles.picker} onValueChange={itemValue => setChild(itemValue)}>
        {children.map((child, index) => <Picker.Item key={index} label={child} value={child} />)}
      </Picker>
      <Button title="Submit" onPress={() => alert('Task Submitted')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10
  },
  picker: {
    width: '80%',
    height: 50,
    marginBottom: 20
  }
});
export default TaskScreen;