import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { fetchWatchHistory } from "../lib/fetches";
import { watchHistoryStyles as styles } from "../Stylesheets/Styles";
import { Spinner } from "./Misc/Spinner/Spinner";

const Poster = ({ id, imagePath }) => {
  return (
    <View style={styles.posterContainer} key={id}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
        style={styles.background}
      />
    </View>
  );
};

export const WatchHistory = ({ updateLocation, isUserLoggedIn }) => {
  const [watchedList, updateWatchedList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const createSectionedPosters = (results) => {
    const mapOfImages = results.map((r) => {
      const id = r.id;
      const imagePath = r.posterPath;
      return <Poster key={id} id={id} imagePath={imagePath} />;
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
      fetchWatchHistory(updateWatchedList, setLoaded);
    } else {
      updateLocation("Login");
    }
  }, []);

  return (
    <View style={styles.watchHistory}>
      {!loaded ? (
        <Spinner />
      ) : (
        <>
          <Text style={styles.header}>Watch History</Text>
          <ScrollView contentContainerStyle={styles.watchlistSections}>
            {createSectionedPosters(watchedList)}
          </ScrollView>
        </>
      )}
    </View>
  );
};
