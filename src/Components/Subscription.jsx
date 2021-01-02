import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { fetchSubscription, updateSubscription } from "../lib/fetches";
import { subscriptionStyles as styles } from "../Stylesheets/Styles";

export const Subscription = ({ isUserLoggedIn, updateLocation }) => {
  const [subscription, setSubscription] = useState("FREE");

  const isFree = () => _.isEqual(subscription, "FREE");
  const isPremium = () => _.isEqual(subscription, "PREMIUM");

  useEffect(() => {
    if (isUserLoggedIn) {
      fetchSubscription(updateLocation, setSubscription);
    } else {
      updateLocation("Login");
    }
  }, []);

  return (
    <View style={styles.subscriptions}>
      <Text style={styles.header}>Subscription</Text>
      <View style={styles.faq}>
        <Text style={styles.questions}>Why Subscription?</Text>
        <Text style={styles.points}>
          ⚪️ For my effort in building this app, which is kind of a donation
          🙏🏻.
        </Text>
        <Text style={styles.points}>
          ⚪️ You can trust us with your data, all your data is kept private and
          not sold to anyone for financial purposes like others 😜.
        </Text>
        <Text style={styles.points}>
          ⚪️ For not ruining your user experience with ads, we don't show any
          ads on this App.
        </Text>
      </View>
      <View style={styles.subscriptionContainer}>
        <View
          style={isFree() ? styles.selectedSubscription : styles.subscription}
        >
          {!isFree() ? (
            <FontAwesomeIcon icon={faCircle} color={"#dedbdb"} size={22} />
          ) : (
            <FontAwesomeIcon icon={faCheckCircle} color={"#4CE990"} size={22} />
          )}
          <Pressable
            style={styles.subscriptionInfo}
            onPress={() => {
              setSubscription("FREE");
              updateSubscription(subscription, updateLocation);
            }}
          >
            <Text
              style={
                isFree()
                  ? styles.selectedSubscriptionType
                  : styles.subscriptionType
              }
            >
              Free
            </Text>
            <Text
              style={
                isFree()
                  ? styles.selectedSubscriptionFeatures
                  : styles.subscriptionFeatures
              }
            >
              Limited Favorites, Limited Watchlist, Limited Suggestions
            </Text>
            <Text
              style={
                isFree()
                  ? styles.selectedSubscriptionPrice
                  : styles.subscriptionPrice
              }
            >
              ₹0 / Unlimited
            </Text>
          </Pressable>
        </View>
        <View
          style={
            isPremium() ? styles.selectedSubscription : styles.subscription
          }
        >
          {!isPremium() ? (
            <FontAwesomeIcon icon={faCircle} color={"#dedbdb"} size={22} />
          ) : (
            <FontAwesomeIcon icon={faCheckCircle} color={"#4CE990"} size={22} />
          )}
          <Pressable
            style={styles.subscriptionInfo}
            onPress={() => {
              setSubscription("PREMIUM");
              updateSubscription(subscription, updateLocation);
            }}
          >
            <Text
              style={
                isPremium()
                  ? styles.selectedSubscriptionType
                  : styles.subscriptionType
              }
            >
              Premium
            </Text>
            <Text
              style={
                isPremium()
                  ? styles.selectedSubscriptionFeatures
                  : styles.subscriptionFeatures
              }
            >
              Unlimited Favorites, Unlimited Watchlist, Unlimited Everything.
            </Text>
            <Text
              style={
                isPremium()
                  ? styles.selectedSubscriptionPrice
                  : styles.subscriptionPrice
              }
            >
              ₹49 / Year
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
