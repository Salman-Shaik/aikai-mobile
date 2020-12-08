import _ from "lodash";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SearchPage } from "./SearchPage";
import { Show } from "./Show";
import { Suggestions } from "./Suggestions";

export const HomePage = () => {
  const [selectedFooterItem, setSelectedFooterItem] = useState("HOME");
  const [selectedHeaderItem, setSelectedHeaderItem] = useState("");
  const [showSuggestionType, setShowSuggestionType] = useState("Random");
  const [randomId, setRandomId] = useState(0);
  const [topId, setTopId] = useState(0);

  const clearFooterItem = () => {
    setSelectedFooterItem(" ");
  };
  const goToHome = () => {
    setSelectedFooterItem("HOME");
    setSelectedHeaderItem("");
  };
  return (
    <ScrollView contentContainerStyle={styles.homepage}>
      {(_.isEqual(selectedFooterItem, "HOME") ||
        _.isEqual(selectedFooterItem, " ")) && (
        <Header
          selectedHeaderItem={selectedHeaderItem}
          setSelectedHeaderItem={setSelectedHeaderItem}
          showSuggestionType={showSuggestionType}
          setShowSuggestionType={setShowSuggestionType}
          setRandomId={setRandomId}
          setTopId={setTopId}
          onLogoPress={goToHome}
          clearFooterItem={clearFooterItem}
        />
      )}

      {_.isEqual(selectedFooterItem, "HOME") && <Suggestions />}
      {_.isEqual(selectedFooterItem, "SEARCH") && <SearchPage />}

      {_.isEqual(selectedHeaderItem, "TV Shows") &&
        _.isEqual(showSuggestionType, "Random") && (
          <Show id={randomId} type={"tv"} />
        )}

      {_.isEqual(selectedHeaderItem, "TV Shows") &&
        _.isEqual(showSuggestionType, "Top") && <Show id={topId} type={"tv"} />}

      {_.isEqual(selectedHeaderItem, "Movies") &&
        _.isEqual(showSuggestionType, "Random") && (
          <Show id={randomId} type={"movie"} />
        )}

      {_.isEqual(selectedHeaderItem, "Movies") &&
        _.isEqual(showSuggestionType, "Top") && (
          <Show id={topId} type={"movie"} />
        )}

      <Footer
        selectedFooterItem={selectedFooterItem}
        setSelectedFooterItem={setSelectedFooterItem}
        goToHome={goToHome}
      />
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  homepage: {
    height: deviceHeight * 1.04,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
