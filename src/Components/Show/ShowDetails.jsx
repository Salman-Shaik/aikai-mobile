import _ from "lodash";
import React, { useEffect, useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { genres } from "../../data/genres.json";
import { fetchOtherShow } from "../../lib/fetches";
import AnimatedCircularProgress from "../Misc/AnimatedCircularProgress";
import { StreamingOn } from "./StreamingOn";
import { UserShowActions } from "./UserShowActions";
import { showDetailsStyles as styles } from "../../Stylesheets/Styles";

export const getGenreNames = (info, showType) => {
  const genre = !!info.genres && info.genres.map((g) => g.name);
  const ids = info["genre_ids"];
  if (!_.isEmpty(genre)) return genre.join(", ");
  if (_.isEmpty(ids)) return "";
  const showGenres = genres[showType];
  return ids
    .map((id) => showGenres.find((sg) => sg.id === id).name)
    .slice(0, 3)
    .join(", ");
};

const createExtras = (
  extras,
  setCurrentShowId,
  setCurrentShowType,
  updateLocation,
  type
) => {
  return extras.map((e) => {
    const id = e.id;
    const imagePath = e["poster_path"];
    return (
      <Pressable
        key={imagePath}
        onPress={() => {
          setCurrentShowId(0);
          setCurrentShowType("");
          updateLocation("Suggestions");
          setTimeout(() => {
            setCurrentShowId(id);
            setCurrentShowType(type);
            updateLocation("Show");
          }, 1);
        }}
      >
        <Image
          key={imagePath}
          defaultSource={require("../../../assets/images/fallback.jpg")}
          source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
          style={styles.image}
        />
      </Pressable>
    );
  });
};

export const ShowDetails = ({
  show,
  type,
  setCurrentShowId,
  setCurrentShowType,
  updateLocation,
}) => {
  const id = show.id;
  const title = show.name || show.title;
  const genre = getGenreNames(show, type);
  const rating = show["vote_average"];
  const description = show.overview;
  const releaseDate = show["first_air_date"] || show["release_date"];
  const year = (!!releaseDate && releaseDate.split("-")[0]) || "Y.T.A";
  const imagePath = show["poster_path"];
  const language = show["original_language"];
  const homepage = show["homepage"];

  const [recommendations, setRecommendations] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    fetchOtherShow(type, id, "recommendations", setRecommendations);
    fetchOtherShow(type, id, "similar", setSimilar);
  }, []);

  const isNetflix = () =>
    !_.isUndefined(homepage) ? homepage.includes("netflix") : false;
  const isDisneyPlus = () =>
    !_.isUndefined(homepage) ? homepage.includes("disney") : false;
  const isPrimeVideo = () =>
    !_.isUndefined(homepage)
      ? homepage.includes("amazon") || homepage.includes("primevideo")
      : false;

  const gotoHomepage = () => {
    Linking.canOpenURL(homepage).then((supported) => {
      if (supported) {
        Linking.openURL(homepage);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.showDetails}>
      <View style={styles.firstBlock}>
        <Image
          defaultSource={require("../../../assets/images/fallback.jpg")}
          source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
          key={id}
          style={styles.poster}
        />
      </View>
      <Text style={styles.title}>{`${title} (${year})`}</Text>
      <UserShowActions id={id} title={title} posterPath={imagePath} />
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
          <Text
            style={styles.language}
          >{`Language :  ${language.toUpperCase()}`}</Text>
          <Text style={styles.genre}>{genre}</Text>
        </View>
      </View>
      <View style={styles.secondBlock}>
        <Text style={styles.overviewHeader}>Overview</Text>
        <Text style={styles.description}>{description}</Text>
        {(isNetflix() || isPrimeVideo() || isDisneyPlus()) && (
          <StreamingOn
            isNetflix={isNetflix}
            isDisneyPlus={isDisneyPlus}
            isPrimeVideo={isPrimeVideo}
            gotoHomepage={gotoHomepage}
          />
        )}
        <View style={styles.extras}>
          <Text style={styles.overviewHeader}>Recommendations</Text>
          <View style={styles.recommendations}>
            {!_.isEmpty(recommendations) &&
              createExtras(
                recommendations,
                setCurrentShowId,
                setCurrentShowType,
                updateLocation,
                type
              )}
          </View>
        </View>
        <View style={styles.extras}>
          <Text style={styles.overviewHeader}>Similar</Text>
          <View style={styles.similar}>
            {!_.isEmpty(similar) &&
              createExtras(
                similar,
                setCurrentShowId,
                setCurrentShowType,
                updateLocation,
                type
              )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
