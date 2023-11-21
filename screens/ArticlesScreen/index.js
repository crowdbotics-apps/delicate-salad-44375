import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    title: 'Dummy Title',
    description: 'This is a short description of the dummy data.',
    imageUrl: 'https://tinyurl.com/42evm3m3',
    details: 'These are some additional details about the dummy data.',
    datePosted: '2022-01-01'
  };
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{dummyData.title}</Text>
      <Text style={styles.description}>{dummyData.description}</Text>
      <Image style={styles.image} source={{
      uri: dummyData.imageUrl
    }} />
      <Text style={styles.details}>{dummyData.details}</Text>
      <Text style={styles.datePosted}>Posted on: {dummyData.datePosted}</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  },
  details: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10
  },
  datePosted: {
    fontSize: 12,
    color: '#999'
  }
});
export default ScreenComponent;