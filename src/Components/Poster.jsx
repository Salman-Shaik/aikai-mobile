import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

export const Poster = ({ posterPath, onClick }) => {
  const uri = { uri: `https://image.tmdb.org/t/p/original${posterPath}` };
  return (
    <Pressable onPress={onClick}>
      <Image source={uri} style={styles.poster} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 182,
    height: 273,
    borderRadius: 5,
  },
});
