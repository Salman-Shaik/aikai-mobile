import _ from 'lodash'
import React, {useEffect, useState} from "react";
import {Dimensions, RefreshControl, ScrollView, StyleSheet, Text, View} from "react-native";
import {list} from "../data/editorsChoice.json";
import {fetchShow} from "../fetches";
import {Poster} from "./Poster";

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export const Suggestions = () => {
  const getFiveFromList = list => {
    const shuffleList = _.shuffle(list);
    return shuffleList.slice(0, 5);
  };
  const [imagePaths, setImagePaths] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  const appendImagePath = (path) => {
    const paths = imagePaths;
    paths.push(path);
    setImagePaths(paths);
    if (imagePaths.length > 9) {
      setImagePaths(paths.slice(0, 8));
    }
  }

  const updateSuggestions = () => {
    const suggestions = getFiveFromList(list);
    const infoMap = suggestions.map(({id, type}) => ({id, type}));
    infoMap.forEach(({id, type}, index) => {
      fetchShow(id, type, index, appendImagePath, setRefreshing);
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setImagePaths([]);
      updateSuggestions();
    });
  }, []);

  useEffect(() => {
    updateSuggestions();
  }, []);

  return <ScrollView contentContainerStyle={styles.suggestions} refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
  }>
    <Text style={styles.header}>Suggestions</Text>
    {
      !refreshing &&
      <View style={styles.suggestedShows}>
        <View style={styles.imageSection}>
          <Poster posterPath={imagePaths[0]}/>
          <Poster posterPath={imagePaths[1]}/>
        </View>
        <View style={styles.imageSection}>
          <Poster posterPath={imagePaths[3]}/>
          <Poster posterPath={imagePaths[4]}/>
        </View>
      </View>
    }
  </ScrollView>;
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  suggestions: {
    width: deviceWidth,
    height: (deviceHeight * 82) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  header: {
    width: deviceWidth * 92 / 100,
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffefd5",
    marginTop: 20
  },
  suggestedShows: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: deviceWidth,
    height: (deviceHeight * 80) / 100,
  },
  imageSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: deviceWidth * 44 / 100,
    height: (deviceHeight * 78) / 100,
  }
});
