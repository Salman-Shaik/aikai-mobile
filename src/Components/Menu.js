import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, Linking } from "react-native";
import { fetchUserFullName } from "../lib/fetches";
import { menuStyles as styles } from "../Stylesheets/Styles";

export const Menu = ({ isUserLoggedIn, updateLocation, setIsUserLoggedIn }) => {
  const [fullName, setFullName] = useState("?");
  const [selectedAvatar, setSelectedAvatar] = useState("");

  useEffect(() => {
    if (isUserLoggedIn) fetchUserFullName(setFullName);
    AsyncStorage.getItem("avatar").then((value) => {
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
  const onLegalJargon = () => updateLocation("LegalJargon");

  const MenuButton = ({ disabled, onPress, Text }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.buttonText} onPress={onPress}>
          {Text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.menu}>
      <View style={styles.profileBlock}>
        <LinearGradient
          colors={["#f14f2e", "#d82474"]}
          style={styles.profileAvatar}
        >
          {isUserLoggedIn ? (
            <>
              {selectedAvatar === "Man-guy" && (
                <Image
                  source={require("../../assets/images/Man-guy.png")}
                  style={styles.avatarImage}
                />
              )}
              {selectedAvatar === "Man-beard" && (
                <Image
                  source={require("../../assets/images/Man-beard.png")}
                  style={styles.avatarImage}
                />
              )}
              {selectedAvatar === "Man-Moustache" && (
                <Image
                  source={require("../../assets/images/Man-Moustache.png")}
                  style={styles.avatarImage}
                />
              )}
              {selectedAvatar === "Female-hairbun" && (
                <Image
                  source={require("../../assets/images/Female-hairbun.png")}
                  style={styles.avatarImage}
                />
              )}
              {selectedAvatar === "Female-shorthair" && (
                <Image
                  source={require("../../assets/images/Female-shorthair.png")}
                  style={styles.avatarImage}
                />
              )}
              {selectedAvatar === "Female-longhair" && (
                <Image
                  source={require("../../assets/images/Female-longhair.png")}
                  style={styles.avatarImage}
                />
              )}
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
      <MenuButton
        disabled={!isUserLoggedIn}
        onPress={onWatchHistory}
        Text="Watch History"
      />
      <MenuButton
        disabled={!isUserLoggedIn}
        onPress={onAccount}
        Text="Account"
      />
      <MenuButton
        disabled={!isUserLoggedIn}
        onPress={onUpdatePassword}
        Text="Update Password"
      />
      <MenuButton
        disabled={false}
        onPress={onLegalJargon}
        Text="Legal Jargon"
      />
      {isUserLoggedIn && (
        <MenuButton disabled={false} onPress={onLogout} Text="Logout" />
      )}
      <View style={styles.usBlock}>
        <TouchableOpacity style={styles.usButton} onPress={() => {}}>
          <Text style={styles.usButtonText} onPress={() => {}}>
            About Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.usButton}
          onPress={() => {
            Linking.openURL("mailto:lightmasters.aikai@gmail.com");
          }}
        >
          <Text
            style={styles.usButtonText}
            onPress={() => {
              Linking.openURL("mailto:lightmasters.aikai@gmail.com");
            }}
          >
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
