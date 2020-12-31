import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchUserFullName } from "../lib/fetches";

export const Menu = ({ isUserLoggedIn, updateLocation, setIsUserLoggedIn }) => {
  const [fullName, setFullName] = useState("?");

  useEffect(() => {
    if (isUserLoggedIn) fetchUserFullName(setFullName);
  }, []);

  const onLogout = async () => {
    await AsyncStorage.removeItem("user-key");
    setIsUserLoggedIn(false);
    updateLocation("Suggestions");
  };

  const onLogin = () => {
    updateLocation("Login");
  };

  return (
    <View style={styles.menu}>
      <View style={styles.profileBlock}>
        <LinearGradient
          colors={["#f14f2e", "#d82474"]}
          style={styles.profileAvatar}
        >
          {isUserLoggedIn ? (
            <Text style={styles.profileAvatarText}>
              {_.capitalize(fullName[0])}
            </Text>
          ) : (
            <Text style={styles.profileAvatarText}>?</Text>
          )}
        </LinearGradient>
        {isUserLoggedIn ? (
          <Text style={styles.username}>{`Logged in as ${fullName}`}</Text>
        ) : (
          <Text style={styles.login} onPress={onLogin}>
            Login
          </Text>
        )}
      </View>
      <View style={styles.referenceBlock}></View>
      <TouchableOpacity style={styles.button} disabled={!isUserLoggedIn}>
        <Text style={styles.buttonText}>Watch History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} disabled={!isUserLoggedIn}>
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} disabled={!isUserLoggedIn}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
      {isUserLoggedIn && (
        <TouchableOpacity style={styles.button} onPress={onLogout}>
          <Text style={styles.buttonText} onPress={onLogout}>
            Logout
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const menuHeight = (deviceHeight * 94) / 100;
const styles = StyleSheet.create({
  menu: {
    width: deviceWidth,
    height: menuHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
  profileBlock: {
    width: deviceWidth,
    height: menuHeight * 0.22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileAvatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgb(140,140,140)",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: 13,
  },
  profileAvatarText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffefd5",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffefd5",
    marginLeft: 25,
  },
  referenceBlock: {
    width: deviceWidth,
    height: menuHeight * 0.25,
    backgroundColor: "#1d1d1d",
  },
  button: {
    width: deviceWidth,
    height: menuHeight * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffefd5",
    marginLeft: 15,
  },
  login: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e90ff",
    marginLeft: 25,
  },
});
