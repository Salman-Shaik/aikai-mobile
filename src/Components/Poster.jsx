import React from "react";
import { Image, StyleSheet } from "react-native";

export const Poster = ({ posterPath }) => {
  const uri = { uri: `https://image.tmdb.org/t/p/original${posterPath}` };
  return <Image source={uri} style={styles.poster} />;
};

const styles = StyleSheet.create({
  poster: {
    width: 182,
    height: 273,
    borderRadius: 5,
  },
});
