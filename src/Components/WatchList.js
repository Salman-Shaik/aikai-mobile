import { faBookmark, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  fetchWatchList,
  removeFromWatchList,
  setWatched,
} from "../lib/fetches";
import { watchListStyles as styles } from "../Stylesheets/Styles";
import { Spinner } from "./Misc/Spinner/Spinner";

const Poster = ({ id, imagePath, onRemove, onWatched }) => {
  return (
    <View style={styles.posterContainer} key={id}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
        style={styles.background}
      >
        <View style={styles.iconContainer}>
          <Pressable onPress={onRemove}>
            <FontAwesomeIcon
              icon={faBookmark}
              color={"#7cfc00"}
              size={25}
              secondaryColor={"#222222"}
              secondaryOpacity={0.4}
            />
          </Pressable>
          <Pressable onPress={onWatched}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              color={"#7cfc00"}
              size={25}
              secondaryColor={"#222222"}
              secondaryOpacity={0.4}
            />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export const WatchList = ({ updateLocation, isUserLoggedIn }) => {
  const [watchList, setWatchList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const onRemove = (id) => {
    setWatchList([]);
    removeFromWatchList(id, () => fetchWatchList(setWatchList));
  };

  const onWatched = (id) => {
    setWatchList([]);
    setWatched(id, () => fetchWatchList(setWatchList));
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
          onRemove={() => onRemove(id)}
          onWatched={() => onWatched(id)}
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
      fetchWatchList(setWatchList, setLoaded);
    } else {
      updateLocation("Login");
    }
  }, []);

  return (
    <View style={styles.watchlist}>
      {!loaded ? (
        <Spinner />
      ) : (
        <>
          <Text style={styles.header}>WatchList</Text>
          <ScrollView contentContainerStyle={styles.watchlistSections}>
            {createSectionedPosters(watchList)}
          </ScrollView>
        </>
      )}
    </View>
  );
};
