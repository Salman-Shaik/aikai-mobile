import React from "react";
import {Linking, Text, TouchableOpacity, View} from "react-native";
import {legalJargonStyles as styles} from "../Stylesheets/Styles";

export const LegalJargon = () => {
  const onPrivacyPolicy = () => {
    Linking.canOpenURL("https://www.aikai.co/").then((supported) => {
      if (supported) {
        Linking.openURL("https://www.aikai.co/");
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };
  return <View style={styles.legalJargon}>
    <Text style={styles.header}>Legal Jargon</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={onPrivacyPolicy}
    >
      <Text style={styles.buttonText} onPress={onPrivacyPolicy}>
        Privacy Policy
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={onPrivacyPolicy}
    >
      <Text style={styles.buttonText} onPress={onPrivacyPolicy}>
        Terms and Conditions
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={onPrivacyPolicy}
    >
      <Text style={styles.buttonText} onPress={onPrivacyPolicy}>
        Refund Policy
      </Text>
    </TouchableOpacity>
  </View>
}