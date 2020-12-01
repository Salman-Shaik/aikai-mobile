import _ from "lodash";
import React, { useState } from "react";
import { Dimensions, StyleSheet, ScrollView } from "react-native";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SearchPage } from "./SearchPage";
import { Suggestions } from "./Suggestions";

export const HomePage = () => {
  const [selectedFooterItem, setSelectedFooterItem] = useState("HOME");
  const [selectedHeaderItem, setSelectedHeaderItem] = useState("");

  const clearFooterItem = () => {
    setSelectedFooterItem("");
  };
  const goToHome = () => {
    setSelectedFooterItem("HOME");
    setSelectedHeaderItem("");
  };
  return (
    <ScrollView contentContainerStyle={styles.homepage}>
      {_.isEqual(selectedFooterItem, "HOME") && (
        <Header
          selectedHeaderItem={selectedHeaderItem}
          setSelectedHeaderItem={setSelectedHeaderItem}
          onLogoPress={goToHome}
          clearFooterItem={clearFooterItem}
        />
      )}
      {_.isEqual(selectedFooterItem, "HOME") && <Suggestions />}
      {_.isEqual(selectedFooterItem, "SEARCH") && <SearchPage />}
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
