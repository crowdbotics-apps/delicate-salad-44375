import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, ScrollView, TouchableOpacity, DatePickerIOS } from 'react-native';

const ScreenComponent = () => {
  const [chosenDate, setChosenDate] = useState(new Date());
  return <SafeAreaView style={_styles.rIRWbYcA}>
      <View style={_styles.LGKQddll}>
        <Button title="Back" onPress={() => {}} />
      </View>
      <View style={_styles.CWfsSWuq}>
        <Text style={_styles.vTFlDmVF}>Calendar</Text>
        <Text style={_styles.afndnxEC}>{chosenDate.getFullYear()}</Text>
        <Text style={_styles.FGYMQiNj}>{chosenDate.getMonth() + 1}</Text>
        <Text style={_styles.wiGHBLBv}>{chosenDate.getDate()}</Text>
      </View>
      <View style={_styles.UqjXrXbO}>
        <Text style={_styles.xmAjPGWG}>Display Activities</Text>
        <ScrollView>
          <TouchableOpacity style={_styles.muUFdGVm}>
            <Text>Activity 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.lWIhwtto}>
            <Text>Activity 2</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={_styles.UWJxGblR}>
        <Text style={_styles.IQMDJFdS}>Available Activities</Text>
        <ScrollView>
          <TouchableOpacity style={_styles.SCcFGvya}>
            <Text>Activity 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.xorNksbJ}>
            <Text>Activity 4</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={_styles.RYAsPPKx}>
        <Text style={_styles.BibHirev}>Time</Text>
        <DatePickerIOS date={chosenDate} onDateChange={setChosenDate} mode="time" />
      </View>
      <View style={_styles.YeLZEzSg}>
        <Button title="Assign a task" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  rIRWbYcA: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  LGKQddll: {
    padding: 20
  },
  CWfsSWuq: {
    alignItems: "center"
  },
  vTFlDmVF: {
    fontSize: 24,
    fontWeight: "bold"
  },
  afndnxEC: {
    fontSize: 20
  },
  FGYMQiNj: {
    fontSize: 20
  },
  wiGHBLBv: {
    fontSize: 20
  },
  UqjXrXbO: {
    padding: 20
  },
  xmAjPGWG: {
    fontSize: 24,
    fontWeight: "bold"
  },
  muUFdGVm: {
    margin: 10,
    backgroundColor: "#ddd",
    padding: 10
  },
  lWIhwtto: {
    margin: 10,
    backgroundColor: "#ddd",
    padding: 10
  },
  UWJxGblR: {
    padding: 20
  },
  IQMDJFdS: {
    fontSize: 24,
    fontWeight: "bold"
  },
  SCcFGvya: {
    margin: 10,
    backgroundColor: "#ddd",
    padding: 10
  },
  xorNksbJ: {
    margin: 10,
    backgroundColor: "#ddd",
    padding: 10
  },
  RYAsPPKx: {
    padding: 20
  },
  BibHirev: {
    fontSize: 24,
    fontWeight: "bold"
  },
  YeLZEzSg: {
    padding: 20
  }
});