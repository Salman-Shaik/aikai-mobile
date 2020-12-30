import React from "react";
import { Dimensions, Image, StyleSheet, View, Pressable } from "react-native";
import { NavigationMenu } from "./NavigationMenu";

export const Header = ({
  showSuggestionType,
  setShowSuggestionType,
  setRandomId,
  setTopId,
  setCurrentShowId,
  setCurrentShowType,
  isCurrentScreen,
  updateLocation,
}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => updateLocation("Suggestions")}>
        <Image
          style={styles.logo}
          source={require("../../../public/logo.png")}
        />
      </Pressable>
      <NavigationMenu
        showSuggestionType={showSuggestionType}
        setShowSuggestionType={setShowSuggestionType}
        setRandomId={setRandomId}
        setTopId={setTopId}
        setCurrentShowId={setCurrentShowId}
        setCurrentShowType={setCurrentShowType}
        isCurrentScreen={isCurrentScreen}
        updateLocation={updateLocation}
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
