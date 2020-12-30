import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { fetchAiringTVShows, fetchPlayingMovies } from "../lib/fetches";

const createPosters = (
  shows,
  type,
  setCurrentShowId,
  setCurrentShowType,
  updateLocation
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
          updateLocation("Show");
        }}
      >
        <Image
          defaultSource={require("../../public/fallback.jpg")}
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
  updateLocation,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.nowPlayingShowBlock} horizontal>
      {createPosters(
        shows,
        type,
        setCurrentShowId,
        setCurrentShowType,
        updateLocation
      )}
    </ScrollView>
  );
};

export const NowPlaying = ({
  setCurrentShowId,
  setCurrentShowType,
  updateLocation,
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
          updateLocation={updateLocation}
        />
      </>
      <>
        <Text style={styles.headingText}>Now Airing - TV Shows</Text>
        <CurrentShows
          shows={airingShows}
          type="tv"
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          updateLocation={updateLocation}
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
