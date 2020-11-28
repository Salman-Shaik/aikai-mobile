import React from "react";
import { StyleSheet, View, Image } from "react-native";

export const InitialPage = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logoText}
        source={require("../../public/logo_text.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 2,
  },
  logoText: {
    height: 70,
    width: 230,
  },
});
