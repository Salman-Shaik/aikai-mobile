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
