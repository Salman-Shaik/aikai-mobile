import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { fetchAiringTVShows, fetchPlayingMovies } from "../lib/fetches";

import { nowPlayingStyles as styles } from "../Stylesheets/Styles";
import { Spinner } from "./Misc/Spinner/Spinner";

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
          defaultSource={require("../../assets/images/fallback.jpg")}
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchPlayingMovies(setPlayingMovies);
    fetchAiringTVShows(setAiringShows, setLoaded);
  }, []);

  return (
    <View style={styles.nowPlaying}>
      {!loaded ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};
