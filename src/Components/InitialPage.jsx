import React from "react";
import { View, Image } from "react-native";
import { initialPageStyles as styles } from "../Stylesheets/Styles";
export const InitialPage = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logoText}
        source={require("../../assets/images/logo_text.png")}
      />
    </View>
  );
};
