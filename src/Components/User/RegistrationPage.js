import { LinearGradient } from "expo-linear-gradient";
import _ from "lodash";
import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { registerUser } from "../../lib/fetches";
import { Spinner } from "../Misc/Spinner/Spinner";
import { LanguagesSection } from "./LanguagesSection";
import { registrationPageStyles as styles } from "../../Stylesheets/Styles";
import { UserAvatars } from "./UserAvatars";

export const RegistrationPage = ({ updateLocation }) => {
  const [name, updateName] = useState("");
  const [username, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const [age, updateAge] = useState("0");
  const [explicitFlag, setExplicitFlag] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loaded, setLoaded] = useState(true);

  const isCredentialsValid = () => {
    return (
      !_.isUndefined(username) &&
      !_.isUndefined(password) &&
      !_.isUndefined(name) &&
      !_.isUndefined(age) &&
      !_.isEmpty(username) &&
      !_.isEmpty(password) &&
      !_.isEmpty(name) &&
      !_.isEmpty(age)
    );
  };

  const onCredentialChange = (text, updateMethod) => {
    if (_.isEmpty(text)) {
      setError(true);
    } else {
      setError(false);
    }
    updateMethod(text);
  };

  const onNameChange = (text) => onCredentialChange(text, updateName);
  const onUsernameChange = (text) => onCredentialChange(text, updateUserName);
  const onPasswordChange = (text) => onCredentialChange(text, updatePassword);

  const toggleSwitch = (value) => setExplicitFlag(value);

  const onAgeChange = (text) => {
    if (_.isEmpty(text) || _.isEqual(+text, 0)) {
      setError(true);
    } else {
      setError(false);
    }
    updateAge(text);
  };

  const updateLanguages = (language) => {
    const l = languages;
    if (isSelected(language)) {
      const index = l.indexOf(language);
      l.splice(index, 1);
    } else {
      l.push(language);
    }
    setLanguages(l);
  };

  const isSelected = (language) => languages.includes(language);

  const onRegister = () => {
    if (isCredentialsValid()) {
      setLoaded(false);
      const body = { name, username, password, age, explicitFlag, languages };
      registerUser(body, setError, setSuccess, setLoaded, updateLocation);
    } else {
      setError(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.registrationPage}>
      {!loaded ? (
        <Spinner loaded={loaded} />
      ) : (
        <ScrollView contentContainerStyle={styles.registrationPageDetails}>
          <Text style={styles.header}>Create Account</Text>
          <View style={styles.userInput}>
            <Text style={!error ? styles.label : styles.errorLabel}>
              Full Name
            </Text>
            <TextInput
              value={name}
              style={
                !error
                  ? !success
                    ? styles.credentials
                    : styles.successCredentials
                  : styles.errorCredentials
              }
              onChangeText={onNameChange}
              autoFocus
              blurOnSubmit
            />
          </View>
          <View style={styles.ageAndFlag}>
            <View style={styles.ageInput}>
              <Text style={!error ? styles.ageLabel : styles.ageErrorLabel}>
                Age
              </Text>
              <TextInput
                value={age}
                style={
                  !error
                    ? !success
                      ? styles.age
                      : styles.successAge
                    : styles.errorAge
                }
                onChangeText={onAgeChange}
                blurOnSubmit
              />
            </View>
            <View style={styles.explicitFlag}>
              <Text style={styles.explicitLabel}>Explicit Content</Text>
              <Switch
                disabled={age < 18}
                trackColor={{ false: "#ffefd5", true: "#ffefd5" }}
                thumbColor={explicitFlag ? "#4CE990" : "#5b5a5a"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={explicitFlag}
                style={styles.switch}
              />
            </View>
          </View>
          <View style={styles.userInput}>
            <Text style={!error ? styles.label : styles.errorLabel}>Email</Text>
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
          <UserAvatars editFlag={true} />
          <LanguagesSection
            isSelected={isSelected}
            updateLanguages={updateLanguages}
            editFlag={true}
          />
          <LinearGradient
            colors={["#f9e866", "#fada51", "#fbcc3b", "#fdbe23", "#ffae00"]}
            style={styles.registrationButton}
          >
            <TouchableOpacity onPress={onRegister}>
              <Text style={styles.registerText}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.orText}>------------- OR -------------</Text>
          <LinearGradient
            colors={["#72ffb6", "#5ef4a2", "#4ae88e", "#33dd79", "#10d164"]}
            style={styles.registrationButton}
          >
            <TouchableOpacity onPress={() => updateLocation("Login")}>
              <Text style={styles.registerText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text>A.I.K.A.I</Text>
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
};
