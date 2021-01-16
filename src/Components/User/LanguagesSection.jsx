import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { languageSectionStyles as styles } from "../../Stylesheets/Styles";

const LanguageBlock = ({
  keyword,
  source,
  isSelected,
  updateLanguages,
  editFlag,
}) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(isSelected(keyword) || false);
  });
  const onPress = () => {
    if (editFlag) {
      updateLanguages(keyword);
      setSelected(!selected);
    }
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
          source={require("../../../assets/images/English.png")}
          {...props}
        />
        <LanguageBlock
          keyword={"Hindi"}
          source={require("../../../assets/images/Hindi.png")}
          {...props}
        />
      </View>
      <View style={styles.doubleLanguageBlock}>
        <LanguageBlock
          keyword={"Telugu"}
          source={require("../../../assets/images/Telugu.png")}
          {...props}
        />
        <LanguageBlock
          keyword={"Marathi"}
          source={require("../../../assets/images/Marathi.png")}
          {...props}
        />
      </View>
      <View style={styles.doubleLanguageBlock}>
        <LanguageBlock
          keyword={"Tamil"}
          source={require("../../../assets/images/Tamil.png")}
          {...props}
        />
        <LanguageBlock
          keyword={"Malayalam"}
          source={require("../../../assets/images/Malayalam.png")}
          {...props}
        />
      </View>
    </View>
  );
};
