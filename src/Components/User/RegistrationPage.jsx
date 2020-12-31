import {LinearGradient} from "expo-linear-gradient";
import _ from "lodash";
import React, {useState} from "react";

import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {LanguagesSection} from "./LanguagesSection";

export const RegistrationPage = ({updateLocation}) => {
  const [name, updateName] = useState("");
  const [username, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const [age, updateAge] = useState("0");
  const [explicitFlag, setExplicitFlag] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const onNameChange = (text) => {
    if (_.isEmpty(text)) {
      setError(true);
    } else {
      setError(false);
    }
    updateName(text);
  };

  const onUsernameChange = (text) => {
    if (_.isEmpty(text)) {
      setError(true);
    } else {
      setError(false);
    }
    updateUserName(text);
  };

  const onPasswordChange = (text) => {
    if (_.isEmpty(text)) {
      setError(true);
    } else {
      setError(false);
    }
    updatePassword(text);
  };

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
      const body={name,username,password,age,explicitFlag,languages}
      registerUser(body,setError,setSuccess,updateLocation);
    } else {
      setError(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.registrationPage}>
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
              trackColor={{false: "#ffefd5", true: "#ffefd5"}}
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
        <LanguagesSection
          isSelected={isSelected}
          updateLanguages={updateLanguages}
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
    </KeyboardAvoidingView>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  registrationPage: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  registrationPageDetails: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 60,
    marginLeft: 20,
    marginTop: 20,
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
  age: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginTop: 5,
  },
  errorAge: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#ff0000",
    backgroundColor: "#fadbdb",
    marginTop: 5,
  },
  ageErrorLabel: {
    width: (deviceWidth * 20) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fd7f7f",
  },
  successAge: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 5,
  },
  ageLabel: {
    width: (deviceWidth * 30) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#e3eeff",
  },
  registrationButton: {
    width: (deviceWidth * 90) / 100,
    padding: 10,
    backgroundColor: "#72ffb6",
    marginTop: 40,
    borderRadius: 8,
  },
  registerText: {
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
  explicitLabel: {
    width: (deviceWidth * 49) / 100,
    fontSize: 25,
    fontWeight: "bold",
    color: "#e3eeff",
  },
  userInput: {
    width: (deviceWidth * 90) / 100,
    marginTop: 40,
  },
  ageInput: {
    width: (deviceWidth * 20) / 100,
  },
  ageAndFlag: {
    width: (deviceWidth * 90) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  explicitFlag: {
    marginTop: 29,
    width: (deviceWidth * 70) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  orText: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    color: "#89999d",
    textAlign: "center",
    marginTop: 40,
  },
  switch: {
    transform: [{scaleX: 1.4}, {scaleY: 1.4}],
  },
  languages: {
    width: (deviceWidth * 90) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  doubleLanguageBlock: {
    width: (deviceWidth * 90) / 100,
    height: (deviceHeight * 24) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  languageBlock: {
    width: (deviceWidth * 35) / 100,
    height: (deviceHeight * 20) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "silver",
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 13,
    paddingBottom: 13,
  },
  selectedLanguageBlock: {
    width: (deviceWidth * 35) / 100,
    height: (deviceHeight * 20) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 13,
    paddingBottom: 13,
  },
  language: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  languageText: {
    width: (deviceWidth * 40) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#e3eeff",
    textAlign: "center",
  },
  title: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#e3eeff",
    marginBottom: 10,
  },
});
