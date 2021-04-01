import {
  faBars,
  faBookmark,
  faHome,
  faPlay,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View } from "react-native";
import { footerStyles as styles } from "../Stylesheets/Styles";

export const Footer = ({ isCurrentScreen, updateLocation }) => {
  const isHome = isCurrentScreen("Suggestions");
  const isSearch = isCurrentScreen("Search");
  const isNowPlaying = isCurrentScreen("NowPlaying");
  const isWatchList = isCurrentScreen("WatchList");
  const isMore = isCurrentScreen("Menu");

  const onHome = () => updateLocation("Suggestions");
  const onSearch = () => updateLocation("Search");
  const onNowPlaying = () => updateLocation("NowPlaying");
  const onWatchlist = () => updateLocation("WatchList");
  const onMenu = () => updateLocation("Menu");

  const Icon = ({ icon, iconSize, color, onPress, textStyle, text }) => {
    return (
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          color={color}
          onPress={onPress}
        />
        <Text style={textStyle} onPress={onPress}>
          {text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.footer}>
      <Icon
        icon={faHome}
        iconSize={27}
        color={isHome ? "gray" : "#ffefd5"}
        onPress={onHome}
        textStyle={isHome ? styles.selectedIconText : styles.iconText}
        text={"Home"}
      />
      <Icon
        icon={faSearch}
        iconSize={25}
        color={isSearch ? "gray" : "white"}
        onPress={onSearch}
        textStyle={isSearch ? styles.selectedIconText : styles.iconText}
        text={"Search"}
      />
      <Icon
        icon={faPlay}
        iconSize={25}
        color={isNowPlaying ? "gray" : "#e56363"}
        onPress={onNowPlaying}
        textStyle={isNowPlaying ? styles.selectedIconText : styles.iconText}
        text={"Now Playing"}
      />
      <Icon
        icon={faBookmark}
        iconSize={25}
        color={isWatchList ? "gray" : "#7cfc00"}
        onPress={onWatchlist}
        textStyle={isWatchList ? styles.selectedIconText : styles.iconText}
        text={"Watchlist"}
      />
      <Icon
        icon={faBars}
        iconSize={26}
        color={isMore ? "gray" : "#ffefd5"}
        onPress={onMenu}
        textStyle={isMore ? styles.selectedIconText : styles.iconText}
        text={"More"}
      />
    </View>
  );
};
