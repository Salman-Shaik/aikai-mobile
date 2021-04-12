import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { login } from "../../lib/fetches";
import { loginPageStyles as styles } from "../../Stylesheets/Styles";
import { Spinner } from "../Misc/Spinner/Spinner";

export const LoginPage = ({ setIsUserLoggedIn, updateLocation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loaded, setLoaded] = useState(true);

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
      setLoaded(false);
      login(
        username,
        password,
        setError,
        setSuccess,
        setIsUserLoggedIn,
        setLoaded,
        updateLocation,
        AsyncStorage.setItem
      );
    } else {
      setError(true);
    }
  };

  const gotoRegister = () => updateLocation("Register");

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
      {!loaded ? (
        <Spinner loaded={loaded} />
      ) : (
        <>
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
            <Text style={!error ? styles.label : styles.errorLabel}>
              Password
            </Text>
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
          <LinearGradient
            colors={["#72ffb6", "#5ef4a2", "#4ae88e", "#33dd79", "#10d164"]}
            style={styles.loginButton}
          >
            <TouchableOpacity onPress={onLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.orText}>------------- OR -------------</Text>
          <LinearGradient
            colors={["#f9e866", "#fada51", "#fbcc3b", "#fdbe23", "#ffae00"]}
            style={styles.loginButton}
          >
            <TouchableOpacity onPress={gotoRegister}>
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
        </>
      )}
    </KeyboardAvoidingView>
  );
};
