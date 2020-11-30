import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Suggestions } from "./Suggestions";

export const HomePage = () => {
  const [selectedFooterItem, setSelectedFooterItem] = useState("HOME");
  const [selectedHeaderItem, setSelectedHeaderItem] = useState("");

  const clearFooterItem = () => {
    setSelectedFooterItem("HOME");
  };
  const goToHome = () => {
    clearFooterItem();
    setSelectedHeaderItem("");
  };
  return (
    <View style={styles.homepage}>
      <Header
        selectedHeaderItem={selectedHeaderItem}
        setSelectedHeaderItem={setSelectedHeaderItem}
        onLogoPress={goToHome}
        clearFooterItem={clearFooterItem}
      />
      <Suggestions />
      <Footer
        selectedFooterItem={selectedFooterItem}
        setSelectedFooterItem={setSelectedFooterItem}
        goToHome={goToHome}
      />
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
