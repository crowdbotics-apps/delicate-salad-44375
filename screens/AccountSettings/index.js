import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, Switch, Alert } from 'react-native';

const ProfileScreen = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isPushEnabled, setPushEnabled] = useState(false);

  const toggleNotificationsSwitch = () => setNotificationsEnabled(previousState => !previousState);

  const togglePushSwitch = () => setPushEnabled(previousState => !previousState);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [{
      text: "Cancel",
      style: "cancel"
    }, {
      text: "OK",
      onPress: () => console.log("OK Pressed")
    }]);
  };

  return <SafeAreaView style={_styles.vDjgpFfE}>
      <Image style={_styles.nuEjhtZL} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Button title="Edit Profile" onPress={() => {}} />
      <Button title="Manage payments - Billing information" onPress={() => {}} />
      <View style={_styles.WdTBeAdZ}>
        <Text>Notifications</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleNotificationsSwitch} value={isNotificationsEnabled} />
      </View>
      <View style={_styles.wzpvarQr}>
        <Text>Push notification</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isPushEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={togglePushSwitch} value={isPushEnabled} />
      </View>
      <Button title="Privacy policy" onPress={() => {}} />
      <Button title="Terms and Conditions" onPress={() => {}} />
      <Button title="Change password" onPress={() => {}} />
      <Button title="Support/ Send Feedback" onPress={() => {}} />
      <Button title="Delete account" onPress={() => {}} />
      <Button title="Log out" onPress={handleLogout} />
    </SafeAreaView>;
};

export default ProfileScreen;

const _styles = StyleSheet.create({
  vDjgpFfE: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  nuEjhtZL: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  WdTBeAdZ: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10
  },
  wzpvarQr: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10
  }
});