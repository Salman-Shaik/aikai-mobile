import _ from "lodash";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { login } from "../../fetches";

export const LoginPage = ({ setIsUserLoggedIn, setGotoLoginPage }) => {
  const usernamePlaceholder = "Username/Email";
  const passwordPlaceholder = "Password";

  const [username, setUsername] = useState(usernamePlaceholder);
  const [password, setPassword] = useState(passwordPlaceholder);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isCredentialsValid = () => {
    return (
      !_.isUndefined(username) &&
      !_.isUndefined(password) &&
      !_.isEmpty(username) &&
      !_.isEmpty(password) &&
      !_.isEqual(username, usernamePlaceholder) &&
      !_.isEqual(password, passwordPlaceholder)
    );
  };

  const onLogin = () => {
    if (isCredentialsValid()) {
      login(
        username,
        password,
        setError,
        setSuccess,
        setIsUserLoggedIn,
        setGotoLoginPage,
        AsyncStorage.setItem
      );
    } else {
      setError(true);
    }
  };

  const onUsernameChange = (text) => {
    if (text.includes(usernamePlaceholder)) {
      setUsername(text.replace(usernamePlaceholder, ""));
    } else {
      setUsername(text);
    }
    setError(false);
  };

  const onPasswordChange = (text) => {
    if (text.includes(passwordPlaceholder)) {
      setPassword(text.replace(passwordPlaceholder, ""));
    } else {
      setPassword(text);
    }
    setError(false);
  };

  return (
    <KeyboardAvoidingView style={styles.loginPage}>
      <Text style={styles.header}>Welcome Back</Text>
      <TextInput
        value={username}
        style={
          !error
            ? !success
              ? styles.credentials
              : styles.successCredentials
            : styles.errorCredentials
        }
        onChangeText={onUsernameChange}
        autoFocus
        blurOnSubmit
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        style={!error ? styles.credentials : styles.errorCredentials}
        onChangeText={onPasswordChange}
        blurOnSubmit
      />
      <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  loginPage: {
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
    marginTop: 40,
  },
  loginButton: {
    width: (deviceWidth * 90) / 100,
    padding: 10,
    backgroundColor: "#72ffb6",
    marginTop: 40,
    borderRadius: 8,
  },
  loginText: {
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
    marginTop: 40,
  },
  successCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 40,
  },
});
