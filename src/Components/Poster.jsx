import React from "react";
import { Image, Pressable } from "react-native";
import { posterStyles as styles } from "../Stylesheets/Styles";

export const Poster = ({ posterPath, onClick }) => {
  return (
    <Pressable onPress={onClick}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original${posterPath}` }}
        style={styles.poster}
        defaultSource={require("../../public/fallback.jpg")}
      />
    </Pressable>
  );
};
