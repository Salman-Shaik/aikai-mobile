import React from "react";
import { loaderStyles as styles } from "../../../Stylesheets/Styles";
import AnimatedLoader from "./AnimatedLoader";

export const Spinner = () => {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(34,34,34,0.75)"
      animationStyle={styles.loader}
      speed={1}
    />
  );
};
