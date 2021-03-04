import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Favorites } from "./Favorites";
import { LegalJargon } from "./LegalJargon";
import { Menu } from "./Menu";
import { NowPlaying } from "./NowPlaying";
import { SearchPage } from "./SearchPage";
import { RandomAndTopShow } from "./Show/RandomAndTopShow";
import { Show } from "./Show/Show";
import { Subscription } from "./User/Subscription";
import { Suggestions } from "./Suggestions";
import { AccountDetails } from "./User/AccountDetails";
import { LoginPage } from "./User/LoginPage";
import { RegistrationPage } from "./User/RegistrationPage";
import { UpdatePassword } from "./User/UpdatePassword";
import { WatchHistory } from "./WatchHistory";
import { WatchList } from "./WatchList";

export const Main = ({
  isCurrentScreen,
  updateLocation,
  currentShowId,
  currentShowType,
  setCurrentShowId,
  setCurrentShowType,
  randomId,
  topId,
}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("user-key").then((value) => {
      setIsUserLoggedIn(!!value || false);
    });
  }, [setIsUserLoggedIn]);

  return (
    <>
      {isCurrentScreen("Login") && (
        <LoginPage
          setIsUserLoggedIn={setIsUserLoggedIn}
          updateLocation={updateLocation}
        />
      )}
      {isCurrentScreen("Register") && (
        <RegistrationPage updateLocation={updateLocation} />
      )}
      {isCurrentScreen("Account") && (
        <AccountDetails updateLocation={updateLocation} />
      )}
      {isCurrentScreen("ChangePassword") && (
        <UpdatePassword updateLocation={updateLocation} />
      )}
      {isCurrentScreen("Show") && (
        <Show
          id={currentShowId}
          updateLocation={updateLocation}
          type={currentShowType}
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
        />
      )}
      {isCurrentScreen("Suggestions") && (
        <Suggestions
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          updateLocation={updateLocation}
        />
      )}
      {isCurrentScreen("Search") && (
        <ScrollView>
          <SearchPage
            setCurrentShowId={setCurrentShowId}
            setCurrentShowType={setCurrentShowType}
            updateLocation={updateLocation}
          />
        </ScrollView>
      )}
      {isCurrentScreen("TvRandom") && (
        <RandomAndTopShow
          id={randomId}
          type={"tv"}
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          updateLocation={updateLocation}
        />
      )}
      {isCurrentScreen("TvTop") && (
        <RandomAndTopShow
          id={topId}
          type={"tv"}
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          updateLocation={updateLocation}
        />
      )}
      {isCurrentScreen("MovieRandom") && (
        <RandomAndTopShow
          id={randomId}
          type={"movie"}
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          updateLocation={updateLocation}
        />
      )}
      {isCurrentScreen("MovieTop") && (
        <RandomAndTopShow
          id={topId}
          type={"movie"}
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          updateLocation={updateLocation}
        />
      )}
      {isCurrentScreen("Favorites") && (
        <Favorites
          updateLocation={updateLocation}
          isUserLoggedIn={isUserLoggedIn}
        />
      )}
      {isCurrentScreen("WatchList") && (
        <WatchList
          updateLocation={updateLocation}
          isUserLoggedIn={isUserLoggedIn}
        />
      )}
      {isCurrentScreen("WatchHistory") && (
        <WatchHistory
          updateLocation={updateLocation}
          isUserLoggedIn={isUserLoggedIn}
        />
      )}
      {isCurrentScreen("NowPlaying") && (
        <NowPlaying
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          updateLocation={updateLocation}
        />
      )}
      {isCurrentScreen("LegalJargon") && <LegalJargon />}
      {isCurrentScreen("Menu") && (
        <Menu
          isUserLoggedIn={isUserLoggedIn}
          updateLocation={updateLocation}
          setIsUserLoggedIn={setIsUserLoggedIn}
        />
      )}
    </>
  );
};
