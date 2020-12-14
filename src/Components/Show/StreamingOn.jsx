import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

export const StreamingOn = ({
  isNetflix,
  gotoHomepage,
  isDisneyPlus,
  isPrimeVideo,
}) => {
  return (
    <View style={styles.streaming}>
      <Text style={styles.header}>Streaming On : </Text>
      {isNetflix() && (
        <Pressable onPress={gotoHomepage}>
          <Image
            source={require("../../../public/Netflix.png")}
            style={styles.netflix}
          />
        </Pressable>
      )}
      {isDisneyPlus() && (
        <Pressable onPress={gotoHomepage}>
          <Image
            source={require("../../../public/Disney.jpg")}
            style={styles.disney}
          />
        </Pressable>
      )}
      {isPrimeVideo() && (
        <Pressable onPress={gotoHomepage}>
          <Image
            source={require("../../../public/Prime.png")}
            style={styles.prime}
          />
        </Pressable>
      )}
    </View>
  );
};
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffefd5",
  },
  streaming: {
    marginTop: 10,
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  netflix: {
    marginTop: 10,
    marginLeft: 10,
    width: 42,
    height: 40,
  },
  disney: {
    marginTop: 10,
    marginLeft: 10,
    width: 42,
    height: 40,
    borderRadius: 50,
  },
  prime: {
    marginTop: 10,
    marginLeft: 10,
    width: 42,
    height: 40,
    borderRadius: 50,
  },
});
