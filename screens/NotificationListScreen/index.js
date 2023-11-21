import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const notifications = [{
  id: '1',
  title: 'Routine Reminders',
  type: 'parent'
}, {
  id: '2',
  title: 'Task Assignment',
  type: 'parent'
}, {
  id: '3',
  title: 'Task Approval Reminder',
  type: 'parent'
}, {
  id: '4',
  title: 'Achievement Unlocked',
  type: 'parent'
}, {
  id: '5',
  title: 'Weekly Progress Summary',
  type: 'parent'
}, {
  id: '6',
  title: 'Routine Reminders',
  type: 'kid'
}, {
  id: '7',
  title: 'Task Assignment',
  type: 'kid'
}, {
  id: '8',
  title: 'Task Completion Acknowledgment',
  type: 'kid'
}, {
  id: '9',
  title: 'Achievement Unlocked',
  type: 'kid'
}, {
  id: '10',
  title: 'Points Earned Notification',
  type: 'kid'
}];

const NotificationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={notifications} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  content: {
    padding: 10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    padding: 10,
    textAlign: 'center'
  }
});
export default NotificationScreen;