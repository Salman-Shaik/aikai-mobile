import _ from "lodash";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { fetchShowAnd } from "../../lib/fetches";
import { Spinner } from "../Misc/Spinner/Spinner";
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
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (id !== 0) {
      fetchShowAnd(setShow, id, type, setLoaded);
    }
  }, []);

  return (
    <View style={styles.show}>
      {!loaded ? (
        <Spinner />
      ) : (
        !_.isEmpty(show) && (
          <ShowDetails
            show={show}
            type={type}
            setCurrentShowId={setCurrentShowId}
            setCurrentShowType={setCurrentShowType}
            updateLocation={updateLocation}
          />
        )
      )}
    </View>
  );
};
