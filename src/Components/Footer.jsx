import {faBars, faBookmark, faHome, faSearch, faTicketAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

export const Footer = () => {
  return <View style={styles.footer}>
    <View style={styles.iconView}>
      <FontAwesomeIcon icon={faHome} size={25} color="#ffefd5"/>
      <Text style={styles.iconText}>Home</Text>
    </View>
    <View style={styles.iconView}>
      <FontAwesomeIcon icon={faSearch} size={25} color="#ffefd5"/>
      <Text style={styles.iconText}>Search</Text>
    </View>
    <View style={styles.iconView}>
      <FontAwesomeIcon icon={faTicketAlt} size={25} color="#ffefd5"/>
      <Text style={styles.iconText}>Now Playing</Text>
    </View>
    <View style={styles.iconView}>
      <FontAwesomeIcon icon={faBookmark} size={25} color="#7cfc00"/>
      <Text style={styles.iconText}>Watchlist</Text>
    </View>
    <View style={styles.iconView}>
      <FontAwesomeIcon icon={faBars} size={25} color="#ffefd5"/>
      <Text style={styles.iconText}>More</Text>
    </View>
  </View>
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  footer: {
    width: deviceWidth,
    height: (deviceHeight * 7) / 100,
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
    justifyContent: "center"
  },
  iconText:{
    fontSize:10,
    color:"#f8f8ff"
  }
});