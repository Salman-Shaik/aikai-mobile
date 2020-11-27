import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>A.I.K.A.I</Text>
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
    color: "#EF3D43",
    fontSize: 30,
  },
});
