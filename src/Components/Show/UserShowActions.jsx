import {
  faBookmark as faUnSaved,
  faHeart as faHeartReg,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark,
  faHeart,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Pressable } from "react-native";
import {
  addToFavorites,
  addToWatchlist,
  checkIsFavorite,
  checkIsSaved,
  removeFavorite,
} from "../../lib/fetches";

export const UserShowActions = ({ id, title, posterPath }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    checkIsFavorite(id, setIsFavorite);
    checkIsSaved(id, setIsSaved);
  }, []);

  const onDislike = () => removeFavorite(id, () => setIsFavorite(false));
  const onLike = () => addToFavorites(id, title, posterPath, setIsFavorite);
  const onSaved = () => addToWatchlist(id, title, posterPath, setIsSaved);

  return (
    <View style={styles.userActions}>
      {isFavorite ? (
        <Pressable onPress={onDislike}>
          <FontAwesomeIcon icon={faHeart} color={"#fc5a69"} size={25} />
        </Pressable>
      ) : (
        <Pressable onPress={onLike}>
          <FontAwesomeIcon icon={faHeartReg} color={"#fc5a69"} size={25} />
        </Pressable>
      )}
      {isSaved ? (
        <FontAwesomeIcon icon={faBookmark} color={"#7cfc00"} size={25} />
      ) : (
        <Pressable onPress={onSaved}>
          <FontAwesomeIcon icon={faUnSaved} color={"#7cfc00"} size={25} />
        </Pressable>
      )}
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  userActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: (deviceWidth * 72) / 100,
    padding: 5,
    marginTop: 15,
    marginBottom: 8,
  },
});
