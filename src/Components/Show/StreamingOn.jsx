import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { streamingOnStyles as styles } from "../../Stylesheets/Styles";

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
