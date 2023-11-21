import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const AvatarScreen = () => {
  const [avatar, setAvatar] = useState('https://tinyurl.com/42evm3m3');

  const handleUpload = () => {
    Alert.alert('Upload', 'Profile picture uploaded successfully!');
    setAvatar('https://tinyurl.com/42evm3m3');
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{
        uri: avatar
      }} style={styles.avatar} />
      </View>
      <Text style={styles.title}>Create Your 2D Avatar</Text>
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
        <Text style={styles.buttonText}>Upload Profile Picture</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  avatarContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20
  },
  avatar: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#4B9DFE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default AvatarScreen;