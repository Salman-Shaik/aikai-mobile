import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const LanguageBlock = ({ keyword, source, isSelected, updateLanguages }) => {
  const [selected, setSelected] = useState(isSelected(keyword));

  const onPress = () => {
    updateLanguages(keyword);
    setSelected(!selected);
  };

  return (
    <Pressable
      style={selected ? styles.selectedLanguageBlock : styles.languageBlock}
      onPress={onPress}
    >
      <Image style={styles.language} source={source} />
      <Text
        style={selected ? styles.selectedLanguageText : styles.languageText}
      >
        {keyword}
      </Text>
      {selected && (
        <FontAwesomeIcon icon={faCheckCircle} color={"#4CE990"} size={22} />
      )}
    </Pressable>
  );
};

export const LanguagesSection = (props) => {
  return (
    <View style={styles.languages}>
      <Text style={styles.title}>Select Preferred Languages</Text>
      <View style={styles.doubleLanguageBlock}>
        <LanguageBlock
          keyword={"English"}
          source={require("../../../public/English.png")}
          {...props}
        />
        <LanguageBlock
          keyword={"Hindi"}
          source={require("../../../public/Hindi.png")}
          {...props}
        />
      </View>
      <View style={styles.doubleLanguageBlock}>
        <LanguageBlock
          keyword={"Telugu"}
          source={require("../../../public/Telugu.png")}
          {...props}
        />
        <LanguageBlock
          keyword={"Marathi"}
          source={require("../../../public/Marathi.png")}
          {...props}
        />
      </View>
      <View style={styles.doubleLanguageBlock}>
        <LanguageBlock
          keyword={"Tamil"}
          source={require("../../../public/Tamil.png")}
          {...props}
        />
        <LanguageBlock
          keyword={"Malayalam"}
          source={require("../../../public/Malayalam.png")}
          {...props}
        />
      </View>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  languages: {
    width: (deviceWidth * 90) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  doubleLanguageBlock: {
    width: (deviceWidth * 85) / 100,
    height: (deviceHeight * 26) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageBlock: {
    width: (deviceWidth * 37) / 100,
    height: (deviceHeight * 24) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 10,
    backgroundColor: "#4a4949",
  },
  selectedLanguageBlock: {
    width: (deviceWidth * 37) / 100,
    height: (deviceHeight * 24) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 10,
    backgroundColor: "#28674b",
  },
  language: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  languageText: {
    width: (deviceWidth * 40) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#e3eeff",
    textAlign: "center",
  },
  title: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#e3eeff",
    marginBottom: 10,
  },
  selectedLanguageText: {
    width: (deviceWidth * 40) / 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CE990",
    textAlign: "center",
  },
});
