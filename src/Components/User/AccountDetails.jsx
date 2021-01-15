import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import _ from "lodash";
import React, { useEffect, useState } from "react";

import {
  KeyboardAvoidingView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchDetails, updateUser } from "../../lib/fetches";
import { LanguagesSection } from "./LanguagesSection";
import { accountDetailsStyles as styles } from "../../Stylesheets/Styles";

import base64 from "base-64";
import {UserAvatars} from "./UserAvatars";

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
              disabled={!edit || age < 18}
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
        <UserAvatars editFlag={edit}/>
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
