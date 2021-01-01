import { LinearGradient } from "expo-linear-gradient";
import _ from "lodash";
import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { updatePassword } from "../../lib/fetches";
import { updatePasswordStyles as styles } from "../../Stylesheets/Styles";

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
