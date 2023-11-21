import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, Image, TouchableOpacity, ScrollView, FlatList, CheckBox } from 'react-native';

const ScreenComponent = () => {
  const user = {
    nickname: 'John',
    avatar: 'https://tinyurl.com/42evm3m3',
    coins: 100
  };
  const tasks = ['Lay your bed', 'Homework', 'Clean out cat litter box', 'Brush your teeth', 'Pick up your toys'];
  return <SafeAreaView style={_styles.bSonlibA}>
      <View style={_styles.SvFCkXGr}>
        <Text>Welcome {user.nickname}</Text>
        <Image source={{
        uri: user.avatar
      }} style={_styles.DOmHOhaj} />
        <Text>{user.coins} coins</Text>
        <Button title="Customize Avatar" onPress={() => {}} />
        <TouchableOpacity onPress={() => {}}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.cikLXzlw} />
        </TouchableOpacity>
        <Button title="Logout" onPress={() => {}} />
      </View>
      <ScrollView>
        <View style={_styles.GCXsIctN}>
          <Text>Calendar Display Section</Text>
          <Text>Task Title</Text>
          <Text>Description</Text>
          <Button title="Done" onPress={() => {}} />
          <Button title="Back" onPress={() => {}} />
        </View>
        <View style={_styles.JgoVFPYx}>
          <Text>Task Tracker</Text>
          <FlatList data={tasks} keyExtractor={item => item} renderItem={({
          item
        }) => <View style={_styles.JljbtIdI}>
                <CheckBox value={false} onValueChange={() => {}} />
                <Text>{item}</Text>
              </View>} />
          <Button title="Upload photo" onPress={() => {}} />
        </View>
      </ScrollView>
      <View style={_styles.MwmlGcvl}>
        <Button title="Home" onPress={() => {}} />
        <Button title="Wallet" onPress={() => {}} />
        <Button title="Explore" onPress={() => {}} />
        <Button title="Reward" onPress={() => {}} />
        <Button title="Settings" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  bSonlibA: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  SvFCkXGr: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  DOmHOhaj: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  cikLXzlw: {
    width: 30,
    height: 30
  },
  GCXsIctN: {
    padding: 20
  },
  JgoVFPYx: {
    padding: 20
  },
  JljbtIdI: {
    flexDirection: "row",
    alignItems: "center"
  },
  MwmlGcvl: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20
  }
});