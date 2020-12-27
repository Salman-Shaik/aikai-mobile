import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { fetchAiringTVShows, fetchPlayingMovies } from "../fetches";

const createPosters = (
  shows,
  type,
  setCurrentShowId,
  setCurrentShowType,
  setSelectedFooterItem
) => {
  return shows.map((s) => {
    const title = s.name || s.title;
    const imagePath = s["poster_path"];
    const uri = { uri: `https://image.tmdb.org/t/p/original${imagePath}` };
    return (
      <Pressable
        key={s.id}
        onPress={() => {
          setCurrentShowId(s.id);
          setCurrentShowType(type);
          setSelectedFooterItem(" ");
        }}
      >
        <Image
          source={uri}
          style={styles.nowPlayingPoster}
          alt={title}
          title={title}
        />
      </Pressable>
    );
  });
};

const CurrentShows = ({
  shows,
  type,
  setCurrentShowId,
  setCurrentShowType,
  setSelectedFooterItem,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.nowPlayingShowBlock} horizontal>
      {createPosters(
        shows,
        type,
        setCurrentShowId,
        setCurrentShowType,
        setSelectedFooterItem
      )}
    </ScrollView>
  );
};

export const NowPlaying = ({
  setCurrentShowId,
  setCurrentShowType,
  setSelectedFooterItem,
}) => {
  const [playingMovies, setPlayingMovies] = useState([]);
  const [airingShows, setAiringShows] = useState([]);

  useEffect(() => {
    fetchPlayingMovies(setPlayingMovies);
    fetchAiringTVShows(setAiringShows);
  }, []);

  return (
    <View style={styles.nowPlaying}>
      <>
        <Text style={styles.headingText}>Now Playing - Movies</Text>
        <CurrentShows
          shows={playingMovies}
          type="movie"
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          setSelectedFooterItem={setSelectedFooterItem}
        />
      </>
      <>
        <Text style={styles.headingText}>Now Airing - TV Shows</Text>
        <CurrentShows
          shows={airingShows}
          type="tv"
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          setSelectedFooterItem={setSelectedFooterItem}
        />
      </>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  nowPlaying: {
    width: deviceWidth,
    height: (deviceHeight * 90.5) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 45,
  },
  headingText: {
    height: (deviceHeight * 6) / 100,
    width: (deviceWidth * 95) / 100,
    fontSize: 22,
    color: "#ffefd5",
    fontWeight: "bold",
    textAlign: "left",
  },
  nowPlayingPoster: {
    width: 182,
    height: 273,
    borderRadius: 4,
    margin: 5,
  },
  nowPlayingShowBlock: {
    flex: 1,
    height: (deviceHeight * 38) / 100,
    width: (deviceWidth * 95) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
