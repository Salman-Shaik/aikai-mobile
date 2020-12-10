import {
  faBars,
  faBookmark,
  faHome,
  faSearch,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export const Footer = ({
  selectedFooterItem,
  setSelectedFooterItem,
  goToHome,
}) => {
  const isHome = selectedFooterItem === "HOME";
  const isSearch = selectedFooterItem === "SEARCH";
  const isNowPlaying = selectedFooterItem === "PLAYING";
  const isWatchList = selectedFooterItem === "WATCHLIST";
  const isMore = selectedFooterItem === "MORE";

  const onHome = () => {
    goToHome();
    setSelectedFooterItem("HOME");
  };

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
          onPress={() => setSelectedFooterItem("SEARCH")}
        />
        <Text
          style={isSearch ? styles.selectedIconText : styles.iconText}
          onPress={() => setSelectedFooterItem("SEARCH")}
        >
          Search
        </Text>
      </View>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={faTicketAlt}
          size={30}
          color={isNowPlaying ? "gray" : "#e56363"}
          onPress={() => setSelectedFooterItem("PLAYING")}
        />
        <Text
          style={isNowPlaying ? styles.selectedIconText : styles.iconText}
          onPress={() => setSelectedFooterItem("PLAYING")}
        >
          Now Playing
        </Text>
      </View>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={faBookmark}
          size={25}
          color={isWatchList ? "gray" : "#7cfc00"}
          onPress={() => setSelectedFooterItem("WATCHLIST")}
        />
        <Text
          style={isWatchList ? styles.selectedIconText : styles.iconText}
          onPress={() => setSelectedFooterItem("WATCHLIST")}
        >
          Watchlist
        </Text>
      </View>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          icon={faBars}
          size={26}
          color={isMore ? "gray" : "#ffefd5"}
          onPress={() => setSelectedFooterItem("MORE")}
        />
        <Text
          style={isMore ? styles.selectedIconText : styles.iconText}
          onPress={() => setSelectedFooterItem("MORE")}
        >
          More
        </Text>
      </View>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  footer: {
    width: deviceWidth,
    height: (deviceHeight * 7.7) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1d1d1d",
  },
  iconView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedIconText: {
    fontSize: 10,
    color: "grey",
    marginTop: 3,
    fontWeight: "bold",
    backgroundColor: "#222222",
  },
  iconText: {
    fontSize: 10,
    color: "#f8f8ff",
    marginTop: 3,
  },
});
