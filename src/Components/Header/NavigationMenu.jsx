import { Picker } from "@react-native-picker/picker";
import _ from "lodash";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export const NavigationMenu = ({
  selectedItem,
  setSelectedItem,
  showSuggestionType,
  setShowSuggestionType,
  setRandomId,
  setTopId,
  setCurrentShowId,
  setCurrentShowType,
  clearFooterItem,
}) => {
  const onTv = () => {
    setRandomId(_.random(1, 60));
    setTopId(_.random(1, 22));
    setCurrentShowId(0);
    setCurrentShowType("");
    clearFooterItem();
    setSelectedItem("TV Shows");
  };

  const onMovie = () => {
    setRandomId(_.random(1, 389));
    setTopId(_.random(1, 22));
    setCurrentShowId(0);
    setCurrentShowType("");
    clearFooterItem();
    setSelectedItem("Movies");
  };

  const Favorites = () => {
    clearFooterItem();
    setCurrentShowId(0);
    setCurrentShowType("");
    setSelectedItem("Favorites");
  };

  return (
    <View style={styles.navigationMenuSection}>
      {selectedItem === "" && (
        <View style={styles.navigationMenu}>
          <Text style={styles.menuItem} onPress={onTv}>
            TV Shows
          </Text>
          <Text style={styles.menuItem} onPress={onMovie}>
            Movies
          </Text>
          <Text style={styles.menuItem} onPress={Favorites}>
            Favorites
          </Text>
        </View>
      )}
      {selectedItem === "Movies" && (
        <View style={styles.postSelectedMenu}>
          <Text style={styles.selectedMenuItem}>Movies >> </Text>
          <Picker
            selectedValue={showSuggestionType}
            onValueChange={(value) => {
              if (_.isEqual(value, "Random")) {
                setRandomId(_.random(1, 389));
              } else {
                setTopId(_.random(1, 22));
              }
              setShowSuggestionType(value);
            }}
            style={styles.picker}
          >
            <Picker.Item label="Random" value="Random" />
            <Picker.Item label="Top Rated" value="Top" />
          </Picker>
        </View>
      )}
      {selectedItem === "TV Shows" && (
        <View style={styles.postSelectedMenu}>
          <Text style={styles.selectedMenuItem}>TV Shows >> </Text>
          <Picker
            selectedValue={showSuggestionType}
            onValueChange={(value) => {
              if (_.isEqual(value, "Random")) {
                setRandomId(_.random(1, 60));
              } else {
                setTopId(_.random(1, 22));
              }
              setShowSuggestionType(value);
            }}
            style={styles.picker}
          >
            <Picker.Item label="Random" value="Random" />
            <Picker.Item label="Top Rated" value="Top" />
          </Picker>
        </View>
      )}
      {selectedItem === "Favorites" && (
        <View style={styles.postSelectedMenu}>
          <Text style={styles.selectedMenuItem}>Favorites</Text>
        </View>
      )}
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  navigationMenuSection: {
    width: deviceWidth * (80 / 100),
    height: deviceHeight * (10 / 100),
    display: "flex",
    flexDirection: "row",
    marginEnd: 16,
  },
  navigationMenu: {
    width: deviceWidth * (80 / 100),
    height: deviceHeight * (10 / 100),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  menuItem: {
    fontSize: 17,
    color: "#ffefd5",
  },
  postSelectedMenu: {
    width: deviceWidth * (80 / 100),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 34,
  },
  selectedMenuItem: {
    fontSize: 17,
    color: "#ffefd5",
    fontWeight: "bold",
  },
  picker: {
    width: 150,
    height: 40,
    color: "#ffefd5",
    backgroundColor: "#262626",
  },
});
