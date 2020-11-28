import {Picker} from "@react-native-picker/picker";
import React, {useState} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

export const NavigationMenu = ({selectedItem, setSelectedItem}) => {
  const [showSuggestionType, setShowSuggestionType] = useState("Random");

  return (
    <View style={styles.navigationMenuSection}>
      {selectedItem === "" && (
        <View style={styles.navigationMenu}>
          <Text
            style={styles.menuItem}
            onPress={() => setSelectedItem("TV Shows")}
          >
            TV Shows
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => setSelectedItem("Movies")}
          >
            Movies
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => setSelectedItem("Favorites")}
          >
            Favorites
          </Text>
        </View>
      )}
      {selectedItem === "TV Shows" && (
        <View style={styles.postSelectedMenu}>
          <Text style={styles.selectedMenuItem}>TV Shows</Text>
          <Picker
            selectedValue={showSuggestionType}
            onValueChange={(value) => setShowSuggestionType(value)}
            style={styles.picker}
          >
            <Picker.Item label="Random" value="Random"/>
            <Picker.Item label="Top Rated" value="Top"/>
          </Picker>
        </View>
      )}
      {selectedItem === "Movies" && (
        <View style={styles.postSelectedMenu}>
          <Text style={styles.selectedMenuItem}>Movies</Text>
          <Picker
            selectedValue={showSuggestionType}
            onValueChange={(value) => setShowSuggestionType(value)}
            style={styles.picker}
          >
            <Picker.Item label="Random" value="Random"/>
            <Picker.Item label="Top Rated" value="Top"/>
          </Picker>
        </View>
      )}
      {selectedItem === "Favorites" && (
        <View style={styles.postSelectedMenu}>
          <Text style={styles.selectedMenuItem}>TV Shows</Text>
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
    justifyContent: "space-around",
  },
  menuItem: {
    fontSize: 18,
    color: "#ffefd5",
  },
  postSelectedMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  selectedMenuItem: {
    fontSize: 18,
    color: "#ffefd5",
    fontWeight: "bold",
  },
  picker: {
    width: 40,
    height: 10,
  },
});
