import _ from "lodash";
import React, { useState } from "react";
import { BackHandler, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Favorites } from "./Favorites";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main";
import { Suggestions } from "./Suggestions";

export const Homepage = () => {
  const [showSuggestionType, setShowSuggestionType] = useState("Random");
  const [randomId, setRandomId] = useState(0);
  const [topId, setTopId] = useState(0);
  const [currentShowId, setCurrentShowId] = useState(0);
  const [currentShowType, setCurrentShowType] = useState("");
  const [screenHistory, setScreenHistory] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("Suggestions");

  const updateLocation = (route) => {
    const history = screenHistory;
    if (history.includes(route)) {
      const index = history.indexOf(route);
      history.splice(index, 1);
    }
    history.push(route);
    setScreenHistory(history);
    setCurrentScreen(route);
    console.log(history)
  };

  const isCurrentScreen = (route) => _.isEqual(currentScreen, route);

  const isCurrentScreenAny = (routes) => routes.some(isCurrentScreen);

  const gotoPreviousScreen = () => {
    const history = screenHistory;
    history.pop();
    if (_.isEmpty(history)) {
      if (!isCurrentScreen("Suggestions")) {
        setCurrentScreen("Suggestions");
        return true;
      }
      return false;
    }
    setScreenHistory(history);
    setCurrentScreen(_.last(history));
    return true;
  };

  BackHandler.addEventListener("hardwareBackPress", () => {
    if (!gotoPreviousScreen()) {
      BackHandler.exitApp();
    }
    return true;
  });

  const isHeaderCondition = isCurrentScreenAny([
    "Suggestions",
    "TvRandom",
    "MovieRandom",
    "TvTop",
    "MovieTop",
    "Favorites",
  ]);

  return (
    <ScrollView contentContainerStyle={styles.homepage}>
      {isHeaderCondition && (
        <Header
          showSuggestionType={showSuggestionType}
          setShowSuggestionType={setShowSuggestionType}
          setRandomId={setRandomId}
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          setTopId={setTopId}
          isCurrentScreen={isCurrentScreen}
          updateLocation={updateLocation}
        />
      )}
      <Main
        topId={topId}
        randomId={randomId}
        currentShowId={currentShowId}
        updateLocation={updateLocation}
        isCurrentScreen={isCurrentScreen}
        currentShowType={currentShowType}
        setCurrentShowId={setCurrentShowId}
        setCurrentShowType={setCurrentShowType}
      />
      <Footer
        isCurrentScreen={isCurrentScreen}
        updateLocation={updateLocation}
      />
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    height: deviceHeight * 1.04,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
