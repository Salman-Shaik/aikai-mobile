import _ from "lodash";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { setResponderId } from "react-native-web/dist/hooks/useResponderEvents/utils";
import { fetchShowWith } from "../../lib/fetches";
import { Spinner } from "../Misc/Spinner/Spinner";
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
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetchShowWith(id, type, setShow, setLoaded);
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
