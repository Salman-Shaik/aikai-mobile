import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { fetchShowAnd } from "../fetches";
import { ShowDetails } from "./ShowDetails";

export const RandomAndTopShow = ({ id, type }) => {
  const [show, setShow] = useState({});
  useEffect(() => {
    if (id !== 0) {
      fetchShowAnd(setShow, id, type);
    }
  }, []);

  return (
    <View style={styles.show}>
      {!_.isEmpty(show) && <ShowDetails show={show} type={type} />}
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  show: {
    flex: 1,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
