import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, TextInput } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.KhosTXSr}>
      <ScrollView>
        <View style={_styles.eOTCvGiy}>
          <Text style={_styles.lDRQYpuP}>Welcome, User's Nickname</Text>
          <Image style={_styles.mZmFgGEY} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={_styles.gQLnoiOM}>Virtual dollars: 1000</Text>
          <Text style={_styles.eRpSEkzp}>Earnings summary/History</Text>
          <Text style={_styles.OCGBkXkr}>Rewards</Text>
          <Button title="Withdraw tokens or coins to wallet" onPress={() => {}} />
          <Button title="Redeem" onPress={() => {}} />
          <Text style={_styles.KacFduKY}>Activities</Text>
          <Text style={_styles.porLVGUK}>Movie Night</Text>
          <Text style={_styles.ZEyTdjKm}>30 Minutes Extra Electronic Time</Text>
          <Text style={_styles.aQiIumvu}>Family Game</Text>
          <Text style={_styles.rEkqwWmX}>Choose Dinner</Text>
          <TextInput style={_styles.WEMJCAeA} placeholder="Input reward" />
          <Button title="Save" onPress={() => {}} />
          <Button title="Redeem" onPress={() => {}} />
          <Button title="Wallet" onPress={() => {}} />
          <Button title="Home Screen" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  KhosTXSr: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  eOTCvGiy: {
    padding: 20
  },
  lDRQYpuP: {
    fontSize: 24,
    fontWeight: "bold"
  },
  mZmFgGEY: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20
  },
  gQLnoiOM: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  eRpSEkzp: {
    fontSize: 16,
    marginTop: 10
  },
  OCGBkXkr: {
    fontSize: 16,
    marginTop: 10
  },
  KacFduKY: {
    fontSize: 16,
    marginTop: 10
  },
  porLVGUK: {
    fontSize: 16,
    marginTop: 10
  },
  ZEyTdjKm: {
    fontSize: 16,
    marginTop: 10
  },
  aQiIumvu: {
    fontSize: 16,
    marginTop: 10
  },
  rEkqwWmX: {
    fontSize: 16,
    marginTop: 10
  },
  WEMJCAeA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  }
});