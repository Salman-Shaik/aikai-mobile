import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { fetchWatchHistory } from "../lib/fetches";

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
      fetchWatchHistory(updateWatchedList);
    } else {
      updateLocation("Login");
    }
  }, []);

  return (
    <View style={styles.watchHistory}>
      <Text style={styles.header}>Watch History</Text>
      <ScrollView contentContainerStyle={styles.watchlistSections}>
        {createSectionedPosters(watchedList)}
      </ScrollView>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  watchHistory: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
  },
  header: {
    marginTop: 35,
    marginLeft: 15,
    height: (deviceHeight * 6) / 100,
    backgroundColor: "rgba(29,29,29,0.3)",
    fontSize: 22,
    color: "#ffefd5",
    fontWeight: "bold",
  },
  watchlistSections: {
    width: deviceWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
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
  },
});
