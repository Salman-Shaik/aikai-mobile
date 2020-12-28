import React, { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  poster: {
    width: 182,
    height: 273,
    borderRadius: 5,
  },
});
