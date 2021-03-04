import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { userAvatarStyles as styles } from "../../Stylesheets/Styles";

export const UserAvatars = ({ editFlag }) => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("avatar").then((value) => {
      !!value && setSelectedAvatar(value);
    });
  }, []);

  const updateAvatar = (avatar) => {
    if (!!editFlag) {
      AsyncStorage.setItem("avatar", avatar).then(() => {
        setSelectedAvatar(avatar);
      });
    }
  };

  const AvatarBlock = ({ keyword, source, isSelected }) => {
    return (
      <Pressable
        onPress={() => updateAvatar(keyword)}
        style={isSelected ? styles.selectedAvatar : styles.avatar}
      >
        <Image source={source} style={styles.avatarImage} />
      </Pressable>
    );
  };

  return (
    <View style={styles.userAvatars}>
      <Text style={styles.title}>Choose An Avatar</Text>
      <View style={styles.rowOfAvatars}>
        {
          <AvatarBlock
            keyword="Man-guy"
            source={require("../../../assets/images/Man-guy.png")}
            isSelected={selectedAvatar === "Man-guy"}
          />
        }
        {
          <AvatarBlock
            keyword="Man-Moustache"
            source={require("../../../assets/images/Man-Moustache.png")}
            isSelected={selectedAvatar === "Man-Moustache"}
          />
        }
        {
          <AvatarBlock
            keyword="Man-beard"
            source={require("../../../assets/images/Man-beard.png")}
            isSelected={selectedAvatar === "Man-beard"}
          />
        }
      </View>
      <View style={styles.rowOfAvatars}>
        {
          <AvatarBlock
            keyword="Female-hairbun"
            source={require("../../../assets/images/Female-hairbun.png")}
            isSelected={selectedAvatar === "Female-hairbun"}
          />
        }
        {
          <AvatarBlock
            keyword="Female-shorthair"
            source={require("../../../assets/images/Female-shorthair.png")}
            isSelected={selectedAvatar === "Female-shorthair"}
          />
        }
        {
          <AvatarBlock
            keyword="Female-longhair"
            source={require("../../../assets/images/Female-longhair.png")}
            isSelected={selectedAvatar === "Female-longhair"}
          />
        }
      </View>
    </View>
  );
};
