import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { fetchShowAnd } from "../fetches";
import { ShowDetails } from "./ShowDetails";

export const Show = ({ id, type }) => {
  const [show, setShow] = useState({});
  useEffect(() => {
    if (id !== 0) {
      fetchShowAnd(setShow, id, type);
    }
  }, []);

  return (
    <View style={styles.show}>
      {!_.isEmpty(show) && <ShowDetails show={show} type={type} />}
      <View
        style={{
          borderBottomColor: "#222222",
          borderBottomWidth: 1,
          marginLeft: 5,
          marginRight: 5,
        }}
      />
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  show: {
    width: deviceWidth,
    height: (deviceHeight * 82) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
