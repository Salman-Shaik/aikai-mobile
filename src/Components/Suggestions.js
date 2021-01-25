import _ from "lodash";
import React, { useEffect, useState } from "react";
import { RefreshControl, Text, View } from "react-native";
import { list } from "../data/editorsChoice.json";
import { fetchImageFromShow } from "../lib/fetches";
import { Poster } from "./Poster";
import { suggestionsStyles as styles } from "../Stylesheets/Styles";


const wait = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const createSectionedPosters = (
  shows,
  setCurrentShowId,
  setCurrentShowType,
  updateLocation
) => {
  const postersMap = _.shuffle(shows).map(({ posterPath, id, type }) => (
    <Poster
      key={posterPath}
      posterPath={posterPath}
      onClick={() => {
        setCurrentShowId(id);
        setCurrentShowType(type);
        updateLocation("Show");
      }}
    />
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

export const Suggestions = ({
  setCurrentShowId,
  setCurrentShowType,
  updateLocation,
}) => {

  const getFromList = (list) => {
    return _.shuffle(_.shuffle(list)).slice(0, 10);
  };
  const [shows, setShows] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  const appendShows = (show) => {
    const paths = shows;
    paths.push(show);
    setShows(paths);
  };

  const updateSuggestions = () => {
    const suggestions = getFromList(list);
    const infoMap = suggestions.map(({ id, type }) => ({ id, type }));
    infoMap.forEach(({ id, type }, index) => {
      fetchImageFromShow(id, type, index, appendShows, setRefreshing);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setShows([]);
      updateSuggestions();
    });
  }, []);

  useEffect(() => {
    setShows([]);
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
          {createSectionedPosters(
            shows,
            setCurrentShowId,
            setCurrentShowType,
            updateLocation
          )}
        </View>
      )}
    </View>
  );
}
