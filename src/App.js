import React, { useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Homepage } from "./Components/Homepage";
import SplashScreen from "react-native-splash-screen";
export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
