import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { searchShow } from "../lib/fetches";
import {
  noResultStyles,
  searchPageStyles as styles,
} from "../Stylesheets/Styles";
import { Spinner } from "./Misc/Spinner/Spinner";

const createSectionedPosters = (results, setCurrentShowId, updateLocation) => {
  const mapOfImages = results.map((r) => {
    const id = r.id;
    const imagePath = r["poster_path"];
    return (
      <Pressable
        key={imagePath}
        onPress={() => {
          setCurrentShowId(id);
          r.setCurrentShowType();
          updateLocation("Show");
        }}
      >
        <Image
          key={imagePath}
          defaultSource={require("../../assets/images/fallback.jpg")}
          source={{ uri: `https://image.tmdb.org/t/p/original${imagePath}` }}
          style={styles.image}
        />
      </Pressable>
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

export const SearchPage = ({
  setCurrentShowId,
  setCurrentShowType,
  updateLocation,
}) => {
  const [searchQuery, setSearchQuery] = useState("Search...");
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const onChange = (text) => {
    const placeholder = "Search...";
    setMovieResults([]);
    setTvResults([]);
    if (text.includes(placeholder)) {
      setSearchQuery(text.replace(placeholder, ""));
    } else {
      setSearchQuery(text);
    }
  };

  const onSearch = () => {
    if (!searchQuery.includes("Search...")) {
      setLoaded(false);
      const callback = () => {
        setLoaded(true);
      };
      searchShow(setMovieResults, searchQuery, "movie", setCurrentShowType);
      searchShow(setTvResults, searchQuery, "tv", setCurrentShowType, callback);
    }
  };

  const results = movieResults.concat(tvResults).sort((a, b) => {
    const aTitle = a.name || a.title;
    const bTitle = b.name || b.title;
    return aTitle === searchQuery
      ? -1
      : bTitle === searchQuery
      ? 1
      : aTitle > bTitle
      ? -1
      : 1;
  });

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.searchPage}>
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
      {!loaded ? (
        <Spinner />
      ) : (
        <View style={styles.searchResults}>
          <Text
            style={noResultStyles.noResults}
          >{`${results.length} results found for ${searchQuery}`}</Text>
          {createSectionedPosters(results, setCurrentShowId, updateLocation)}
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};
