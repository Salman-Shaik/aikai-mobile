import {
  faBars,
  faBookmark,
  faHome,
  faSearch,
  faTicketAlt,
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

  return (
    <View style={styles.footer}>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={faHome}
          size={27}
          color={isHome ? "gray" : "#ffefd5"}
          onPress={onHome}
        />
        <Text
          style={isHome ? styles.selectedIconText : styles.iconText}
          onPress={onHome}
        >
          Home
        </Text>
      </View>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={faSearch}
          size={25}
          color={isSearch ? "gray" : "white"}
          onPress={onSearch}
        />
        <Text
          style={isSearch ? styles.selectedIconText : styles.iconText}
          onPress={onSearch}
        >
          Search
        </Text>
      </View>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={faTicketAlt}
          size={30}
          color={isNowPlaying ? "gray" : "#e56363"}
          onPress={onNowPlaying}
        />
        <Text
          style={isNowPlaying ? styles.selectedIconText : styles.iconText}
          onPress={onNowPlaying}
        >
          Now Playing
        </Text>
      </View>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={faBookmark}
          size={25}
          color={isWatchList ? "gray" : "#7cfc00"}
          onPress={onWatchlist}
        />
        <Text
          style={isWatchList ? styles.selectedIconText : styles.iconText}
          onPress={onWatchlist}
        >
          Watchlist
        </Text>
      </View>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={faBars}
          size={26}
          color={isMore ? "gray" : "#ffefd5"}
          onPress={onMenu}
        />
        <Text
          style={isMore ? styles.selectedIconText : styles.iconText}
          onPress={onMenu}
        >
          More
        </Text>
      </View>
    </View>
  );
};
