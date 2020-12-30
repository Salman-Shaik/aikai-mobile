import { faBookmark, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  fetchWatchList,
  removeFromWatchList,
  setWatched,
} from "../lib/fetches";

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
      fetchWatchList(setWatchList);
    } else {
      updateLocation("Login");
    }
  }, []);

  return (
    <View style={styles.watchlist}>
      <Text style={styles.header}>WatchList</Text>
      <ScrollView contentContainerStyle={styles.watchlistSections}>
        {createSectionedPosters(watchList)}
      </ScrollView>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  watchlist: {
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
  iconContainer: {
    height: 70,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    backgroundColor: "rgba(34,34,34,0.1)",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 2,
    paddingRight: 2,
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
