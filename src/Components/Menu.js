import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
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

  const MenuButton = ({ disabled, onPress, text }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.buttonText} onPress={onPress}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  const Avatar = ({ source }) => {
    return <Image source={source} style={styles.avatarImage} />;
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
                <Avatar source={require("../../assets/images/Man-guy.png")} />
              )}
              {selectedAvatar === "Man-beard" && (
                <Avatar source={require("../../assets/images/Man-beard.png")} />
              )}
              {selectedAvatar === "Man-Moustache" && (
                <Avatar
                  source={require("../../assets/images/Man-Moustache.png")}
                />
              )}
              {selectedAvatar === "Female-hairbun" && (
                <Avatar
                  source={require("../../assets/images/Female-hairbun.png")}
                />
              )}
              {selectedAvatar === "Female-shorthair" && (
                <Avatar
                  source={require("../../assets/images/Female-shorthair.png")}
                />
              )}
              {selectedAvatar === "Female-longhair" && (
                <Avatar
                  source={require("../../assets/images/Female-longhair.png")}
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
        text="Watch History"
      />
      <MenuButton
        disabled={!isUserLoggedIn}
        onPress={onAccount}
        text="Account"
      />
      <MenuButton
        disabled={!isUserLoggedIn}
        onPress={onUpdatePassword}
        text="Update Password"
      />
      <MenuButton
        disabled={false}
        onPress={onLegalJargon}
        text="Legal Jargon"
      />
      {isUserLoggedIn && (
        <MenuButton disabled={false} onPress={onLogout} text="Logout" />
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
