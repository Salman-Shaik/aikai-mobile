import React from "react";
import { Image, View, Pressable } from "react-native";
import { NavigationMenu } from "./NavigationMenu";
import { headerStyles as styles } from "../../Stylesheets/Styles";

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
