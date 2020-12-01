import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  RefreshControl,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { searchShow } from "../fetches";

const createSectionedPosters = (results) => {
  const mapOfImages = results.map((r) => {
    const imagePath = r["poster_path"];
    return (
      <Image
        key={imagePath}
        source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
        style={styles.image}
      />
    );
  });
  return mapOfImages.map((m, i) => {
    if (i === 2 || i === 5 || i === 8 || i === 11) {
      return (
        <View key={i} style={styles.sectionedImages}>
          {mapOfImages.slice(i - 2, i + 1)}
        </View>
      );
    }
  });
};

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("Search...");
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onChange = (text) => setSearchQuery(text);
  const onSearch = () => {
    setRefreshing(true);
    searchShow(setMovieResults, searchQuery, "movie");
    searchShow(setTvResults, searchQuery, "tv", setRefreshing);
  };

  const results = movieResults.concat(tvResults).sort((a, b) => {
    const aTitle = a.name || a.title;
    const bTitle = b.name || b.title;
    return aTitle > bTitle ? 1 : -1;
  });

  return (
    <KeyboardAvoidingView
      style={styles.searchPage}
      behavior={"padding"}
      refreshControl={<RefreshControl refreshing={refreshing} />}
    >
      <View style={styles.searchBar}>
        <FontAwesomeIcon
          icon={faSearch}
          size={22}
          color={"#ffefd5"}
          onPress={onSearch}
        />
        <TextInput
          value={searchQuery}
          style={styles.searchQuery}
          autoCapitalize={"sentences"}
          onChangeText={onChange}
          onSubmitEditing={onSearch}
          onEndEditing={onSearch}
          clearButtonMode="while-editing"
          autoFocus
          blurOnSubmit
          enablesReturnKeyAutomatically
        />
      </View>
      <View style={styles.searchResults}>
        {createSectionedPosters(results)}
      </View>
    </KeyboardAvoidingView>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  searchPage: {
    width: deviceWidth,
    height: (deviceHeight * 96) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchBar: {
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ffefd5",
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#4a4949",
    marginTop: 40,
  },
  searchQuery: {
    width: (deviceWidth * 80) / 100,
    fontSize: 20,
    marginLeft: 10,
    color: "#ffffff",
    padding: 2,
  },
  searchResults: {
    width: (deviceWidth * 96) / 100,
    height: (deviceHeight * 88) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  image: {
    borderRadius: 8,
    width: 108,
    height: 160,
  },
  sectionedImages: {
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 6,
    paddingBottom: 6,
  },
});
