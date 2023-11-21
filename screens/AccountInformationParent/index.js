import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    fullName: '',
    maritalStatus: '',
    children: '',
    relationship: '',
    gender: '',
    phoneNumber: '',
    email: ''
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  return <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => {}} />
      <TextInput style={styles.input} placeholder="Full Name" value={profile.fullName} editable={isEditMode} onChangeText={text => setProfile({ ...profile,
      fullName: text
    })} />
      <TextInput style={styles.input} placeholder="Marital Status" value={profile.maritalStatus} editable={isEditMode} onChangeText={text => setProfile({ ...profile,
      maritalStatus: text
    })} />
      <TextInput style={styles.input} placeholder="No of Children" value={profile.children} editable={isEditMode} onChangeText={text => setProfile({ ...profile,
      children: text
    })} />
      <TextInput style={styles.input} placeholder="Relationship to children" value={profile.relationship} editable={isEditMode} onChangeText={text => setProfile({ ...profile,
      relationship: text
    })} />
      <TextInput style={styles.input} placeholder="Gender" value={profile.gender} editable={isEditMode} onChangeText={text => setProfile({ ...profile,
      gender: text
    })} />
      <TextInput style={styles.input} placeholder="Phone Number" value={profile.phoneNumber} editable={isEditMode} onChangeText={text => setProfile({ ...profile,
      phoneNumber: text
    })} />
      <TextInput style={styles.input} placeholder="Email" value={profile.email} editable={isEditMode} onChangeText={text => setProfile({ ...profile,
      email: text
    })} />
      {isEditMode ? <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity> : <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#007BFF',
    marginTop: 20,
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
export default ProfileScreen;