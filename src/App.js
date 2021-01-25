import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Homepage } from "./Components/Homepage";
import { InitialPage } from "./Components/InitialPage";

export default function App() {
  let [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showLogo ? <InitialPage /> : <Homepage />}
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
