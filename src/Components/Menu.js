import AsyncStorage from "@react-native-async-storage/async-storage";
import {LinearGradient} from "expo-linear-gradient";
import React, {useEffect, useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {fetchUserFullName} from "../lib/fetches";
import {menuStyles as styles} from "../Stylesheets/Styles";

export const Menu = ({isUserLoggedIn, updateLocation, setIsUserLoggedIn}) => {
  const [fullName, setFullName] = useState("?");
  const [selectedAvatar, setSelectedAvatar] = useState("");

  useEffect(() => {
    if (isUserLoggedIn) fetchUserFullName(setFullName);
    AsyncStorage.getItem("avatar").then(value => {
      !!value && setSelectedAvatar(value);
    });
  }, []);

  const onLogout = async () => {
    await AsyncStorage.removeItem("user-key");
    setIsUserLoggedIn(false);
    updateLocation("Suggestions");
  };

  const onLogin = () => updateLocation("Login");
  const onAccount = () => updateLocation("Account");
  const onUpdatePassword = () => updateLocation("ChangePassword");
  const onWatchHistory = () => updateLocation("WatchHistory");
  const onSubscription = () => updateLocation("Subscription");

  return (
    <View style={styles.menu}>
      <View style={styles.profileBlock}>
        <LinearGradient
          colors={["#f14f2e", "#d82474"]}
          style={styles.profileAvatar}
        >
          {isUserLoggedIn ? (
            <>
              {(selectedAvatar === "Man-guy") && <Image source={require("../../assets/images/Man-guy.png")} style={styles.avatarImage}/>}
              {(selectedAvatar === "Man-beard") && <Image source={require("../../assets/images/Man-beard.png")} style={styles.avatarImage}/>}
              {(selectedAvatar === "Man-Moustache") && <Image source={require("../../assets/images/Man-Moustache.png")} style={styles.avatarImage}/>}
              {(selectedAvatar === "Female-hairbun") && <Image source={require("../../assets/images/Female-hairbun.png")} style={styles.avatarImage}/>}
              {(selectedAvatar === "Female-shorthair") &&
              <Image source={require("../../assets/images/Female-shorthair.png")} style={styles.avatarImage}/>}
              {(selectedAvatar === "Female-longhair") && <Image source={require("../../assets/images/Female-longhair.png")} style={styles.avatarImage}/>}
            </>
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
      <TouchableOpacity
        style={styles.button}
        disabled={!isUserLoggedIn}
        onPress={onWatchHistory}
      >
        <Text style={styles.buttonText} onPress={onWatchHistory}>
          Watch History
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        disabled={!isUserLoggedIn}
        onPress={onAccount}
      >
        <Text style={styles.buttonText} onPress={onAccount}>
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        disabled={!isUserLoggedIn}
        onPress={onSubscription}
      >
        <Text style={styles.buttonText} onPress={onSubscription}>
          Subscription
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        disabled={!isUserLoggedIn}
        onPress={onUpdatePassword}
      >
        <Text style={styles.buttonText} onPress={onUpdatePassword}>
          Update Password
        </Text>
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
