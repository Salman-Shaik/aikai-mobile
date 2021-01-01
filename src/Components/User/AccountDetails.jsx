import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import _ from "lodash";
import React, { useEffect, useState } from "react";

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
import { fetchDetails, updateUser } from "../../lib/fetches";
import { LanguagesSection } from "./LanguagesSection";

import base64 from "base-64";

export const AccountDetails = ({ updateLocation }) => {
  const [name, updateName] = useState("");
  const [username, updateUserName] = useState("");
  const [age, updateAge] = useState("0");
  const [explicitFlag, setExplicitFlag] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("user-key").then((value) => {
      updateUserName(base64.decode(value));
    });
    fetchDetails(updateName, updateAge, setExplicitFlag, setLanguages);
  }, []);

  const isCredentialsValid = () => {
    return (
      !_.isUndefined(username) &&
      !_.isUndefined(name) &&
      !_.isUndefined(age) &&
      !_.isEmpty(username) &&
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

  const onUpdate = () => {
    if (edit) {
      if (isCredentialsValid()) {
        const body = { name, username, age, explicitFlag, languages };
        updateUser(body, setError, setSuccess, updateLocation);
      } else {
        setError(true);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.accountDetails}>
      <ScrollView contentContainerStyle={styles.accountDetailsPage}>
        <Text style={styles.header}>Account Details</Text>
        <View style={styles.editFlag}>
          <Text style={styles.explicitLabel}>Edit: </Text>
          <Switch
            trackColor={{ false: "#ffefd5", true: "#ffefd5" }}
            thumbColor={edit ? "#4CE990" : "#5b5a5a"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => setEdit(value)}
            value={edit}
            style={styles.switch}
          />
        </View>
        <View style={styles.userInput}>
          <Text style={!error ? styles.label : styles.errorLabel}>
            Full Name
          </Text>
          <TextInput
            value={name}
            editable={edit}
            style={
              !error
                ? !success
                  ? styles.credentials
                  : styles.successCredentials
                : styles.errorCredentials
            }
            onChangeText={onNameChange}
            blurOnSubmit
          />
        </View>
        <View style={styles.ageAndFlag}>
          <View style={styles.ageInput}>
            <Text style={!error ? styles.ageLabel : styles.ageErrorLabel}>
              Age
            </Text>
            <TextInput
              editable={edit}
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
            editable={false}
            value={username}
            style={
              !error
                ? !success
                  ? styles.credentials
                  : styles.successCredentials
                : styles.errorCredentials
            }
            blurOnSubmit
          />
        </View>
        <LanguagesSection
          isSelected={isSelected}
          updateLanguages={updateLanguages}
          editFlag={edit}
        />
        <LinearGradient
          colors={["#f9e866", "#fada51", "#fbcc3b", "#fdbe23", "#ffae00"]}
          style={styles.updateButton}
        >
          <TouchableOpacity onPress={onUpdate}>
            <Text style={styles.updateText}>Update</Text>
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
  accountDetails: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  accountDetailsPage: {
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
  editFlag: {
    marginTop: 29,
    width: (deviceWidth * 25) / 100,
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
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
  },
});
