import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { Favorites } from "./Favorites";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { SearchPage } from "./SearchPage";
import { RandomAndTopShow } from "./Show/RandomAndTopShow";
import { Show } from "./Show/Show";
import { Suggestions } from "./Suggestions";
import { LoginPage } from "./User/LoginPage";

export const Homepage = () => {
  const [selectedFooterItem, setSelectedFooterItem] = useState("HOME");
  const [selectedHeaderItem, setSelectedHeaderItem] = useState("");
  const [showSuggestionType, setShowSuggestionType] = useState("Random");
  const [randomId, setRandomId] = useState(0);
  const [topId, setTopId] = useState(0);
  const [currentShowId, setCurrentShowId] = useState(0);
  const [currentShowType, setCurrentShowType] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [goToLoginPage, setGoToLoginPage] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("user-key").then((value) => {
      setIsUserLoggedIn(!!value || false);
    });
  }, []);

  const clearFooterItem = () => setSelectedFooterItem(" ");

  const goToHome = () => {
    setSelectedFooterItem("HOME");
    setSelectedHeaderItem("");
    setCurrentShowId(0);
    setCurrentShowType("");
  };

  const isHome = _.isEqual(selectedFooterItem, "HOME");
  const isHeaderCondition = isHome || _.isEqual(selectedFooterItem, " ");
  const isShowConditionTrue =
    _.isEqual(selectedFooterItem, " ") &&
    !_.isEqual(currentShowId, 0) &&
    !_.isEqual(currentShowType, "");
  const isSearch = _.isEqual(selectedFooterItem, "SEARCH");
  const isTvRandom =
    _.isEqual(selectedHeaderItem, "TV Shows") &&
    _.isEqual(showSuggestionType, "Random");
  const isTvTop =
    _.isEqual(selectedHeaderItem, "TV Shows") &&
    _.isEqual(showSuggestionType, "Top");
  const isMovieRandom =
    _.isEqual(selectedHeaderItem, "Movies") &&
    _.isEqual(showSuggestionType, "Random");
  const isMovieTop =
    _.isEqual(selectedHeaderItem, "Movies") &&
    _.isEqual(showSuggestionType, "Top");
  const isFavorites = _.isEqual(selectedHeaderItem, "Favorites");

  return (
    <ScrollView contentContainerStyle={styles.homepage}>
      {!!goToLoginPage ? (
        <LoginPage
          setIsUserLoggedIn={setIsUserLoggedIn}
          setGotoLoginPage={setGoToLoginPage}
        />
      ) : (
        <>
          {isHeaderCondition && (
            <Header
              selectedHeaderItem={selectedHeaderItem}
              setSelectedHeaderItem={setSelectedHeaderItem}
              showSuggestionType={showSuggestionType}
              setShowSuggestionType={setShowSuggestionType}
              setRandomId={setRandomId}
              setCurrentShowId={setCurrentShowId}
              setCurrentShowType={setCurrentShowType}
              setTopId={setTopId}
              onLogoPress={goToHome}
              clearFooterItem={clearFooterItem}
            />
          )}
          {isShowConditionTrue && (
            <Show
              id={currentShowId}
              type={currentShowType}
              setCurrentShowId={setCurrentShowId}
              setCurrentShowType={setCurrentShowType}
              setSelectedFooterItem={setSelectedFooterItem}
              setSelectedHeaderItem={setSelectedHeaderItem}
            />
          )}
          {isHome && (
            <Suggestions
              setCurrentShowId={setCurrentShowId}
              setCurrentShowType={setCurrentShowType}
              setSelectedFooterItem={setSelectedFooterItem}
            />
          )}
          {isSearch && (
            <ScrollView>
              <SearchPage
                setCurrentShowId={setCurrentShowId}
                setCurrentShowType={setCurrentShowType}
                setSelectedFooterItem={setSelectedFooterItem}
              />
            </ScrollView>
          )}
          {isTvRandom && (
            <RandomAndTopShow
              id={randomId}
              type={"tv"}
              setCurrentShowId={setCurrentShowId}
              setCurrentShowType={setCurrentShowType}
              setSelectedFooterItem={setSelectedFooterItem}
              setSelectedHeaderItem={setSelectedHeaderItem}
            />
          )}
          {isTvTop && (
            <RandomAndTopShow
              id={topId}
              type={"tv"}
              setCurrentShowId={setCurrentShowId}
              setCurrentShowType={setCurrentShowType}
              setSelectedFooterItem={setSelectedFooterItem}
              setSelectedHeaderItem={setSelectedHeaderItem}
            />
          )}
          {isMovieRandom && (
            <RandomAndTopShow
              id={randomId}
              type={"movie"}
              setCurrentShowId={setCurrentShowId}
              setCurrentShowType={setCurrentShowType}
              setSelectedFooterItem={setSelectedFooterItem}
              setSelectedHeaderItem={setSelectedHeaderItem}
            />
          )}
          {isMovieTop && (
            <RandomAndTopShow
              id={topId}
              type={"movie"}
              setCurrentShowId={setCurrentShowId}
              setCurrentShowType={setCurrentShowType}
              setSelectedFooterItem={setSelectedFooterItem}
              setSelectedHeaderItem={setSelectedHeaderItem}
            />
          )}
          {isFavorites && (
            <Favorites
              setGotoLoginPage={setGoToLoginPage}
              isUserLoggedIn={isUserLoggedIn}
            />
          )}
        </>
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
    flex: 1,
    height: deviceHeight * 1.04,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
