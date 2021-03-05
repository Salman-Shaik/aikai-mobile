import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { list } from "../data/editorsChoice.json";
import { fetchImageFromShow } from "../lib/fetches";
import { Spinner } from "./Misc/Spinner/Spinner";
import { Poster } from "./Poster";
import { suggestionsStyles as styles } from "../Stylesheets/Styles";

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
  const [loaded, setLoaded] = useState(false);

  const appendShows = (show) => {
    const paths = shows;
    paths.push(show);
    setShows(paths);
  };

  const updateSuggestions = () => {
    const suggestions = getFromList(list);
    const infoMap = suggestions.map(({ id, type }) => ({ id, type }));
    infoMap.forEach(({ id, type }, index) => {
      fetchImageFromShow(id, type, index, appendShows, setLoaded);
    });
  };

  useEffect(() => {
    setShows([]);
    updateSuggestions();
  }, []);

  return (
    <View style={styles.suggestions}>
      <Text style={styles.header}>Suggestions</Text>
      {!loaded ? (
        <Spinner loaded={loaded} />
      ) : (
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
};
