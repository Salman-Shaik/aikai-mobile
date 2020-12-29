import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { login } from "../../fetches";

export const LoginPage = ({
  setIsUserLoggedIn,
  setGotoLoginPage,
  goToHome,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isCredentialsValid = () => {
    return (
      !_.isUndefined(username) &&
      !_.isUndefined(password) &&
      !_.isEmpty(username) &&
      !_.isEmpty(password)
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
        goToHome,
        AsyncStorage.setItem
      );
    } else {
      setError(true);
    }
  };

  const onUsernameChange = (text) => {
    if (_.isEmpty(text)) {
      setError(true);
    } else {
      setError(false);
    }
    setUsername(text);
  };

  const onPasswordChange = (text) => {
    if (_.isEmpty(text)) {
      setError(true);
    } else {
      setError(false);
    }
    setPassword(text);
  };

  return (
    <KeyboardAvoidingView style={styles.loginPage}>
      <Text style={styles.header}>Welcome Back</Text>
      <View style={styles.userInput}>
        <Text style={!error ? styles.label : styles.errorLabel}>
          Username/Email
        </Text>
        <TextInput
          label="Username/Email"
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
      </View>
      <View style={styles.userInput}>
        <Text style={!error ? styles.label : styles.errorLabel}>Password</Text>
        <TextInput
          label="Password"
          value={password}
          secureTextEntry={true}
          style={
            !error
              ? !success
                ? styles.credentials
                : styles.successCredentials
              : styles.errorCredentials
          }
          onChangeText={onPasswordChange}
          blurOnSubmit
        />
      </View>
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
    marginTop: 5,
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
