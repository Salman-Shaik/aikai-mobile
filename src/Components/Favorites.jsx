import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import React, {useEffect, useState} from "react";
import {Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, View} from "react-native";
import {fetchFavorites, removeFavorite} from "../fetches";

const Poster = ({id, imagePath, onDislike}) => {
  return (
    <View style={styles.posterContainer} key={id}>
      <ImageBackground source={{uri: `https://image.tmdb.org/t/p/original${imagePath}`}} style={styles.background}>
        <Pressable style={styles.iconContainer} onPress={onDislike}>
          <FontAwesomeIcon icon={faHeart} color={"#fc5a69"} size={22}/>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export const Favorites = ({
                            setGotoLoginPage,
                            isUserLoggedIn,
                          }) => {
  const [favorites, setFavorites] = useState([]);

  const onDislike = (id) => {
    setFavorites([]);
    removeFavorite(id,()=>fetchFavorites(setFavorites));
  };

  const createSectionedPosters = (
    results
  ) => {
    const mapOfImages = results.map((r) => {
      const id = r.id;
      const imagePath = r.posterPath;
      return <Poster key={id} id={id} imagePath={imagePath} onDislike={() => onDislike(id)}/>
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
      setGotoLoginPage(true);
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.favorites}>
      {createSectionedPosters(
        favorites
      )}
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  favorites: {
    width: deviceWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  sectionedImages: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 6,
    paddingBottom: 6,
  },
  iconContainer: {
    marginTop: 5,
    marginLeft: 6,
  },
  posterContainer: {
    display: "flex",
    flexDirection: "row",
    width: 120,
    height: 180,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    width: 120,
    height: 180,
  }
});
