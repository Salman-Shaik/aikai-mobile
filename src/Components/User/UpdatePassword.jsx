import { LinearGradient } from "expo-linear-gradient";
import _ from "lodash";
import React, { useState } from "react";

import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { updatePassword } from "../../lib/fetches";

export const UpdatePassword = ({ updateLocation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isCredentialsValid = () => {
    return (
      !_.isUndefined(oldPassword) &&
      !_.isUndefined(newPassword) &&
      !_.isEmpty(oldPassword) &&
      !_.isEmpty(newPassword) &&
      !_.isEqual(oldPassword, newPassword)
    );
  };

  const onUpdate = () => {
    if (isCredentialsValid()) {
      updatePassword(
        oldPassword,
        newPassword,
        updateLocation,
        setError,
        setSuccess
      );
    } else {
      setError(true);
    }
  };

  const onCredentialChange = (text, updateMethod) => {
    if (_.isEmpty(text)) {
      setError(true);
    } else {
      setError(false);
    }
    updateMethod(text);
  };

  const onOldPasswordChange = (text) =>
    onCredentialChange(text, setOldPassword);
  const onNewPasswordChange = (text) =>
    onCredentialChange(text, setNewPassword);

  return (
    <KeyboardAvoidingView style={styles.updatePassword}>
      <Text style={styles.header}>Update Password</Text>
      <View style={styles.userInput}>
        <Text style={!error ? styles.label : styles.errorLabel}>
          Old Password
        </Text>
        <TextInput
          value={oldPassword}
          secureTextEntry={true}
          style={
            !error
              ? !success
                ? styles.credentials
                : styles.successCredentials
              : styles.errorCredentials
          }
          onChangeText={onOldPasswordChange}
          autoFocus
          blurOnSubmit
        />
      </View>
      <View style={styles.userInput}>
        <Text style={!error ? styles.label : styles.errorLabel}>
          New Password
        </Text>
        <TextInput
          value={newPassword}
          secureTextEntry={true}
          style={
            !error
              ? !success
                ? styles.credentials
                : styles.successCredentials
              : styles.errorCredentials
          }
          onChangeText={onNewPasswordChange}
          blurOnSubmit
        />
      </View>
      <LinearGradient
        colors={["#f9e866", "#fada51", "#fbcc3b", "#fdbe23", "#ffae00"]}
        style={styles.updateButton}
      >
        <TouchableOpacity onPress={onUpdate}>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  updatePassword: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 60,
    marginLeft: 20,
    color: "#e3eeff",
    fontWeight: "bold",
  },
  credentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginTop: 5,
  },
  updateButton: {
    width: (deviceWidth * 90) / 100,
    padding: 10,
    marginTop: 40,
    borderRadius: 8,
  },
  updateText: {
    fontSize: 25,
    color: "#222222",
    fontWeight: "bold",
    textAlign: "center",
  },
  errorCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#ff0000",
    backgroundColor: "#fadbdb",
    marginTop: 5,
  },
  errorLabel: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fd7f7f",
  },
  successCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 5,
  },
  label: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#e3eeff",
  },
  userInput: {
    width: (deviceWidth * 90) / 100,
    marginTop: 40,
  },
});
