import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";

export const Suggestions = ()  => {
  return <ScrollView style={styles.suggestions}>

  </ScrollView>
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  suggestions:{
    width: deviceWidth,
    height: (deviceHeight * 78) / 100,
  }
});