import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {Footer} from "./Footer";
import { Header } from "./Header";
import {Suggestions} from "./Suggestions";

export const HomePage = () => {
  return (
    <View style={styles.homepage}>
      <Header />
      <Suggestions/>
      <Footer />
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  homepage: {
    height: deviceHeight * 1.04,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
