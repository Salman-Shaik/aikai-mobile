import _ from "lodash";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { fetchShowAnd } from "../../lib/fetches";
import { ShowDetails } from "./ShowDetails";
import { randomAndTopShowStyles as styles } from "../../Stylesheets/Styles";

export const RandomAndTopShow = ({
  id,
  type,
  setCurrentShowId,
  setCurrentShowType,
  updateLocation,
}) => {
  const [show, setShow] = useState({});
  useEffect(() => {
    if (id !== 0) {
      fetchShowAnd(setShow, id, type);
    }
  }, []);

  return (
    <View style={styles.show}>
      {!_.isEmpty(show) && (
        <ShowDetails
          show={show}
          type={type}
          setCurrentShowId={setCurrentShowId}
          setCurrentShowType={setCurrentShowType}
          updateLocation={updateLocation}
        />
      )}
    </View>
  );
};
