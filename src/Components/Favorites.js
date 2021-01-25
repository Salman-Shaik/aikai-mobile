import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import { fetchFavorites, removeFavorite } from "../lib/fetches";
import { favoritesStyles as styles } from "../Stylesheets/Styles";

const Poster = ({ id, imagePath, onDislike }) => {
  return (
    <View style={styles.posterContainer} key={id}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
        style={styles.background}
      >
        <Pressable style={styles.iconContainer} onPress={onDislike}>
          <FontAwesomeIcon icon={faHeart} color={"#fc5a69"} size={22} />
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export const Favorites = ({ updateLocation, isUserLoggedIn }) => {
  const [favorites, setFavorites] = useState([]);

  const onDislike = (id) => {
    setFavorites([]);
    removeFavorite(id, () => fetchFavorites(setFavorites));
  };

  const createSectionedPosters = (results) => {
    const mapOfImages = results.map((r) => {
      const id = r.id;
      const imagePath = r.posterPath;
      return (
        <Poster
          key={id}
          id={id}
          imagePath={imagePath}
          onDislike={() => onDislike(id)}
        />
      );
    });
    return mapOfImages.map((m, i) => {
      if (i === 0 || i % 3 === 0) {
        return (
          <View key={i} style={styles.sectionedImages}>
            {mapOfImages.slice(i, i + 3)}
          </View>
        );
      }
    });
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      fetchFavorites(setFavorites);
    } else {
      updateLocation("Login");
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.favorites}>
      {createSectionedPosters(favorites)}
    </ScrollView>
  );
};
