import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { fetchShowWith } from "../fetches";
import { ShowDetails } from "./ShowDetails";

export const Show = ({
  id,
  type,
  setCurrentShowId,
  setCurrentShowType,
  setSelectedFooterItem,
}) => {
  const [show, setShow] = useState({});
  useEffect(() => {
    fetchShowWith(id, type, setShow);
  }, []);

  return (
    <View style={styles.show}>
      {!_.isEmpty(show) && (
        <ShowDetails
          show={show}
          type={type}
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          setSelectedFooterItem={setSelectedFooterItem}
        />
      )}
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
