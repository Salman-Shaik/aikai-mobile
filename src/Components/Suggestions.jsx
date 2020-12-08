import _ from "lodash";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { list } from "../data/editorsChoice.json";
import { fetchImageFromShow } from "../fetches";
import { Poster } from "./Poster";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const createSectionedPosters = (imagePaths) => {
  const postersMap = _.shuffle(imagePaths).map((ip) => (
    <Poster key={ip} posterPath={ip} />
  ));
  return postersMap.map((p, i) => {
    if (i === 1 || i === 3) {
      return (
        <View key={i} style={styles.imageSection}>
          {postersMap.slice(i - 1, i + 1)}
        </View>
      );
    }
  });
};

export const Suggestions = () => {
  const getFromList = (list) => {
    return _.shuffle(_.shuffle(list)).slice(0, 10);
  };
  const [imagePaths, setImagePaths] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  const appendImagePath = (path) => {
    const paths = imagePaths;
    paths.push(path);
    setImagePaths(paths);
  };

  const updateSuggestions = () => {
    const suggestions = getFromList(list);
    const infoMap = suggestions.map(({ id, type }) => ({ id, type }));
    infoMap.forEach(({ id, type }, index) => {
      fetchImageFromShow(id, type, index, appendImagePath, setRefreshing);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setImagePaths([]);
      updateSuggestions();
    });
  }, []);

  useEffect(() => {
    setImagePaths([]);
    updateSuggestions();
  }, []);

  return (
    <View
      style={styles.suggestions}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.header}>Suggestions</Text>
      {!refreshing && (
        <View style={styles.suggestedShows}>
          {createSectionedPosters(imagePaths)}
        </View>
      )}
    </View>
  );
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
    alignItems: "center",
  },
  header: {
    width: (deviceWidth * 92) / 100,
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffefd5",
    marginTop: 10,
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
    width: (deviceWidth * 44) / 100,
    height: (deviceHeight * 78) / 100,
  },
});
