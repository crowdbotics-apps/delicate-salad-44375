import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const user = {
    firstName: 'John',
    profilePhoto: 'https://tinyurl.com/42evm3m3'
  };
  const child = {
    avatar: 'https://tinyurl.com/42evm3m3',
    tasks: ['Task 1', 'Task 2', 'Task 3']
  };
  return <SafeAreaView style={_styles.dVFreTtF}>
      <View style={_styles.UgTAUCNh}>
        <Text>Welcome {user.firstName}</Text>
        <Image source={{
        uri: user.profilePhoto
      }} style={_styles.IchTfbVM} />
        <TouchableOpacity>
          <Text>Notification</Text>
        </TouchableOpacity>
        <Button title="Logout" onPress={() => {}} />
      </View>

      <ScrollView style={_styles.kfvwivfd}>
        <View style={_styles.qlTZbdGI}>
          <Image source={{
          uri: child.avatar
        }} style={_styles.xWYMqXwY} />
          <View>
            <Text>Morning</Text>
            <Text>Afternoon</Text>
            <Text>Evening</Text>
            <Text>All day</Text>
          </View>
        </View>

        <View>
          {child.tasks.map((task, index) => <TouchableOpacity key={index}>
              <Text>{task}</Text>
            </TouchableOpacity>)}
        </View>

        <Button title="Assign Task" onPress={() => {}} />

        <View style={_styles.BVkxxDUv}>
          <Button title="Home" onPress={() => {}} />
          <Button title="Calendar" onPress={() => {}} />
          <Button title="Payment History" onPress={() => {}} />
          <Button title="Reward" onPress={() => {}} />
          <Button title="Explore" onPress={() => {}} />
          <Button title="Settings" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  dVFreTtF: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  UgTAUCNh: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  IchTfbVM: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  kfvwivfd: {
    margin: 20
  },
  qlTZbdGI: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  xWYMqXwY: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  BVkxxDUv: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  }
});