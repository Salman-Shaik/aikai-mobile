import _ from "lodash";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { fetchShowWith } from "../../lib/fetches";
import { ShowDetails } from "./ShowDetails";
import { showStyles as styles } from "../../Stylesheets/Styles";

export const Show = ({
  id,
  type,
  setCurrentShowId,
  setCurrentShowType,
  updateLocation,
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
          updateLocation={updateLocation}
        />
      )}
    </View>
  );
};
