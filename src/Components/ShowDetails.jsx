import _ from "lodash";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { genres } from "../data/genres.json";

export const getGenreNames = (info, showType) => {
  const genre = !!info.genres && info.genres.map((g) => g.name);
  const ids = info["genre_ids"];
  if (!_.isEmpty(genre)) return genre.join(", ");
  if (_.isEmpty(ids)) return "";
  const showGenres = genres[showType];
  console.log(ids);
  console.log(showGenres);
  return ids.map((id) => showGenres.find((sg) => sg.id === id).name).slice(0,3).join(", ");
};

export const ShowDetails = ({ show, type }) => {
  const id = show.id;
  const title = show.name || show.title;
  const genre = getGenreNames(show, type);
  const rating = show["vote_average"];
  const description = show.overview;
  const releaseDate = show["first_air_date"] || show["release_date"];
  const year = releaseDate.split('-')[0];
  const imagePath = show["poster_path"];
  const language = show["original_language"];
  const homepage = show["homepage"];
  return (
    <ScrollView contentContainerStyle={styles.showDetails}>
      <View style={styles.firstBlock}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
          key={id}
          style={styles.poster}
        />
      </View>
      <Text style={styles.title}>{`${title} (${year})`}</Text>
      <View style={styles.ratingAndMisc}>
        <AnimatedCircularProgress
          size={70}
          width={6}
          fill={rating * 10}
          tintColor="#f85149"
          duration={1000}
          rotation={0}
          lineCap={"round"}
          padding={5}
          backgroundColor="#8c1844"
        >
          {() => <Text style={styles.rating}>{`${rating * 10}%`}</Text>}
        </AnimatedCircularProgress>
        <View style={styles.languageAndGenre}>
          <Text style={styles.language}>{`Language :  ${language.toUpperCase()}`}</Text>
          <Text style={styles.genre}>{genre}</Text>
        </View>
      </View>
      <View style={styles.secondBlock}>
        <Text style={styles.overviewHeader}>Overview</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  showDetails: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  firstBlock: {
    width: (deviceWidth * 98) / 100,
    height: (deviceHeight * 43) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  ratingAndMisc: {
    width: (deviceWidth * 100) / 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#151515",
    padding: 5,
    marginTop:15,
    marginBottom:8,
  },
  poster: {
    width: 230,
    height: 350,
    borderRadius: 5,
  },
  rating: {
    color: "#ffffff",
    fontSize: 18,
  },
  title:{
    fontSize: 27,
    fontWeight: "bold",
    color: "#e3eeff",
    textAlign: "center"
  },
  genre: {
    marginTop: 8,
    fontSize: 13,
    color:"#ffefd5"
  },
  language: {
    fontSize: 18,
    color:"#ffefd5"
  },
  description: {
    width: (deviceWidth * 96) / 100,
    marginTop: 10,
    fontSize: 15,
    color:"#ffefd5",
    textAlign: "left"
  },
  secondBlock: {
    width: (deviceWidth * 96) / 100,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  languageAndGenre : {
    width: (deviceWidth * 70) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  overviewHeader : {
    fontWeight: "bold",
    fontSize: 20,
    color:"#ffefd5",
  }
});
