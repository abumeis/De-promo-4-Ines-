import { StatusBar } from "expo-status-bar";
import React from "react";
import {  View, StyleSheet } from "react-native";
import Header from './Components/Header';

import MessaageList from "./Components/MessaageList"

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <MessaageList></MessaageList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:36

  },
  
});





