import React, {useState} from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import {NavigationMenu} from "./NavigationMenu";

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../../public/logo.png")} onPress={() => setSelectedItem("")}/>
      <NavigationMenu selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
    </View>
  );
};
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  header: {
    width: deviceWidth,
    height: (deviceHeight * 10) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 24,
    backgroundColor: "rgba(29,29,29,0.2)"
  },
  logo: {
    height: 120,
    width: 120,
    alignSelf: "center"
  },
});
