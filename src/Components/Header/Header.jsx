import React from "react";
import { Dimensions, Image, StyleSheet, View, Pressable } from "react-native";
import { NavigationMenu } from "./NavigationMenu";

export const Header = ({
  selectedHeaderItem,
  setSelectedHeaderItem,
  showSuggestionType,
  setShowSuggestionType,
  setRandomId,
  setTopId,
  onLogoPress,
  clearFooterItem,
}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={onLogoPress}>
        <Image style={styles.logo} source={require("../../public/logo.png")} />
      </Pressable>
      <NavigationMenu
        selectedItem={selectedHeaderItem}
        setSelectedItem={setSelectedHeaderItem}
        showSuggestionType={showSuggestionType}
        setShowSuggestionType={setShowSuggestionType}
        setRandomId={setRandomId}
        setTopId={setTopId}
        clearFooterItem={clearFooterItem}
      />
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
    backgroundColor: "rgba(29,29,29,0.3)",
    marginLeft: -15,
  },
  logo: {
    height: 110,
    width: 110,
    alignSelf: "center",
  },
});
