import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const homepageStyles = StyleSheet.create({
  homepage: {
    flex: 1,
    height: deviceHeight * 1.04,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export const initialPageStyles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 2,
    fontFamily: "Avenir-Medium",
  },
  logoText: {
    height: 70,
    width: 230,
  },
});

const menuHeight = (deviceHeight * 94) / 100;
export const menuStyles = StyleSheet.create({
  menu: {
    width: deviceWidth,
    height: menuHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
  profileBlock: {
    width: deviceWidth,
    height: menuHeight * 0.22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileAvatar: {
    width: (deviceWidth * 25) / 100,
    height: (deviceHeight * 11.85) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginLeft: 13,
  },
  avatarImage: {
    width: 100,
    height: 100,
  },
  username: {
    fontSize: 18,
    fontFamily: "Avenir-Medium",
    color: "#ffefd5",
    marginLeft: 25,
  },
  referenceBlock: {
    width: deviceWidth,
    height: menuHeight * 0.2,
    backgroundColor: "#1d1d1d",
  },
  button: {
    width: deviceWidth,
    height: menuHeight * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  usButton: {
    width: deviceWidth * 0.45,
    height: menuHeight * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1d1d",
    borderRadius: 32,
  },
  usBlock: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 4,
  },
  usButtonText: {
    fontSize: 18,
    color: "#ffefd5",
    fontFamily: "Avenir-Regular",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffefd5",
    marginLeft: 15,
    fontFamily: "Avenir-Regular",
  },
  login: {
    fontSize: 22,
    fontFamily: "Avenir-Medium",
    color: "#1e90ff",
    marginLeft: 25,
  },
});

export const legalJargonStyles = StyleSheet.create({
  legalJargon: {
    width: deviceWidth,
    height: menuHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
  button: {
    width: deviceWidth,
    height: menuHeight * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffefd5",
    marginLeft: 15,
    fontFamily: "Avenir-Regular",
  },
  header: {
    marginTop: 35,
    marginLeft: 20,
    width: deviceWidth,
    height: (deviceHeight * 6) / 100,
    backgroundColor: "rgba(29,29,29,0.3)",
    fontSize: 22,
    color: "#ffefd5",
    fontFamily: "Avenir-Medium",
  },
});

export const nowPlayingStyles = StyleSheet.create({
  nowPlaying: {
    width: deviceWidth,
    height: (deviceHeight * 89) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 45,
  },
  headingText: {
    height: (deviceHeight * 5) / 100,
    width: (deviceWidth * 95) / 100,
    fontSize: 22,
    color: "#ffefd5",
    fontFamily: "Avenir-Medium",
    textAlign: "left",
  },
  nowPlayingPoster: {
    width: 175,
    height: 260,
    borderRadius: 5,
    margin: 2,
  },
  nowPlayingShowBlock: {
    flex: 1,
    height: (deviceHeight * 36) / 100,
    width: (deviceWidth * 93) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export const posterStyles = StyleSheet.create({
  poster: {
    width: 175,
    height: 260,
    borderRadius: 5,
  },
});

export const searchPageStyles = StyleSheet.create({
  searchPage: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchBar: {
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ffefd5",
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#4a4949",
    marginTop: 40,
  },
  searchQuery: {
    width: (deviceWidth * 80) / 100,
    fontSize: 20,
    marginLeft: 10,
    color: "#ffffff",
    padding: 2,
    fontFamily: "Avenir-Regular",
  },
  searchResults: {
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  image: {
    borderRadius: 8,
    width: 108,
    height: 160,
  },
  sectionedImages: {
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 6,
    paddingBottom: 6,
  },
});

export const suggestionsStyles = StyleSheet.create({
  suggestions: {
    width: deviceWidth,
    height: (deviceHeight * 83) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: (deviceWidth * 92) / 100,
    fontSize: 28,
    color: "#ffefd5",
    marginTop: 14,
    fontFamily: "Avenir-Medium",
  },
  suggestedShows: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: deviceWidth,
    height: (deviceHeight * 80) / 100,
  },
  imageSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: (deviceWidth * 44) / 100,
    height: (deviceHeight * 75) / 100,
  },
});

export const watchHistoryStyles = StyleSheet.create({
  watchHistory: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
  },
  header: {
    marginTop: 35,
    marginLeft: 15,
    height: (deviceHeight * 6) / 100,
    backgroundColor: "rgba(29,29,29,0.3)",
    fontSize: 22,
    color: "#ffefd5",
    fontFamily: "Avenir-Medium",
  },
  watchlistSections: {
    width: deviceWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sectionedImages: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 6,
    paddingBottom: 6,
  },
  posterContainer: {
    display: "flex",
    flexDirection: "row",
    width: 120,
    height: 180,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    width: 120,
    height: 180,
  },
});

export const watchListStyles = StyleSheet.create({
  watchlist: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
  },
  header: {
    marginTop: 35,
    marginLeft: 15,
    height: (deviceHeight * 6) / 100,
    backgroundColor: "rgba(29,29,29,0.3)",
    fontSize: 22,
    color: "#ffefd5",
    fontFamily: "Avenir-Medium",
  },
  watchlistSections: {
    width: deviceWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sectionedImages: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 6,
    paddingBottom: 6,
  },
  iconContainer: {
    height: 70,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    backgroundColor: "rgba(34,34,34,0.1)",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 2,
    paddingRight: 2,
  },
  posterContainer: {
    display: "flex",
    flexDirection: "row",
    width: 120,
    height: 180,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    width: 120,
    height: 180,
  },
});

export const footerStyles = StyleSheet.create({
  footer: {
    width: deviceWidth,
    height: (deviceHeight * 7.7) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1d1d1d",
  },
  iconView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedIconText: {
    fontSize: 10,
    color: "grey",
    marginTop: 3,
    fontFamily: "Avenir-Medium",
    backgroundColor: "#222222",
  },
  iconText: {
    fontSize: 10,
    color: "#f8f8ff",
    marginTop: 3,
    fontFamily: "Avenir-Regular",
  },
});

export const favoritesStyles = StyleSheet.create({
  favorites: {
    width: deviceWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  sectionedImages: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 6,
    paddingBottom: 6,
  },
  iconContainer: {
    marginTop: 5,
    marginLeft: 6,
  },
  posterContainer: {
    display: "flex",
    flexDirection: "row",
    width: 120,
    height: 180,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    width: 120,
    height: 180,
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    width: deviceWidth,
    height: (deviceHeight * 10) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 24,
    backgroundColor: "rgba(29,29,29,0.3)",
    marginLeft: -15,
    fontFamily: "Avenir-Medium",
  },
  logo: {
    height: 110,
    width: 110,
    alignSelf: "center",
  },
});

export const navigationMenuStyles = StyleSheet.create({
  navigationMenuSection: {
    width: deviceWidth * (80 / 100),
    height: deviceHeight * (10 / 100),
    display: "flex",
    flexDirection: "row",
    marginEnd: 16,
  },
  navigationMenu: {
    width: deviceWidth * (80 / 100),
    height: deviceHeight * (10 / 100),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  menuItem: {
    fontSize: 17,
    color: "#ffefd5",
    fontFamily: "Avenir-Regular",
  },
  postSelectedMenu: {
    width: deviceWidth * (80 / 100),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 34,
  },
  selectedMenuItem: {
    fontSize: 17,
    color: "#ffefd5",
    fontFamily: "Avenir-Medium",
  },
  picker: {
    width: 150,
    height: 40,
    color: "#ffefd5",
    backgroundColor: "#262626",
    fontSize: 17,
    fontFamily: "Avenir-Regular",
  },
});

export const randomAndTopShowStyles = StyleSheet.create({
  show: {
    flex: 1,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export const showStyles = StyleSheet.create({
  show: {
    flex: 1,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
});

export const showDetailsStyles = StyleSheet.create({
  showDetails: {
    flexGrow: 1,
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  firstBlock: {
    width: (deviceWidth * 98) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  ratingAndMisc: {
    width: (deviceWidth * 100) / 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#151515",
    padding: 5,
    marginTop: 15,
    marginBottom: 8,
  },
  poster: {
    width: 230,
    height: 350,
    borderRadius: 5,
  },
  rating: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Quicksand-Book",
  },
  title: {
    fontSize: 27,
    fontFamily: "Quicksand-Bold",
    color: "#e3eeff",
    textAlign: "center",
    marginTop: 8,
  },
  genre: {
    marginTop: 8,
    fontSize: 13,
    color: "#ffefd5",
    fontFamily: "Quicksand-Book",
  },
  language: {
    fontSize: 18,
    color: "#ffefd5",
    fontFamily: "Quicksand-Book",
  },
  note: {
    fontSize: 14,
    color: "#ffefd5",
    fontFamily: "Quicksand-Bold",
    fontWeight: "bold",
    fontStyle: "italic",
    marginLeft: 4,
  },
  description: {
    width: (deviceWidth * 96) / 100,
    marginTop: 10,
    fontSize: 15,
    color: "#ffefd5",
    textAlign: "left",
    fontFamily: "Quicksand-Book",
  },
  secondBlock: {
    width: (deviceWidth * 96) / 100,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  languageAndGenre: {
    width: (deviceWidth * 70) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  overviewHeader: {
    fontSize: 20,
    color: "#ffefd5",
    fontFamily: "Quicksand-Bold",
  },
  extras: {
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  recommendations: {
    marginTop: 10,
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  similar: {
    marginTop: 10,
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  image: {
    borderRadius: 5,
    width: 120,
    height: 180,
  },
  userActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: (deviceWidth * 74) / 100,
    padding: 5,
  },
});

export const streamingOnStyles = StyleSheet.create({
  header: {
    fontFamily: "Avenir-Medium",
    fontSize: 20,
    color: "#ffefd5",
  },
  streaming: {
    marginTop: 10,
    width: (deviceWidth * 96) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  netflix: {
    marginTop: 10,
    marginLeft: 10,
    width: 42,
    height: 40,
  },
  disney: {
    marginTop: 10,
    marginLeft: 10,
    width: 42,
    height: 40,
    borderRadius: 50,
  },
  prime: {
    marginTop: 10,
    marginLeft: 10,
    width: 42,
    height: 40,
    borderRadius: 50,
  },
});

export const userShowActionStyles = StyleSheet.create({
  userActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: (deviceWidth * 72) / 100,
    padding: 5,
    marginTop: 15,
    marginBottom: 8,
  },
});

export const registrationPageStyles = StyleSheet.create({
  registrationPage: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  registrationPageDetails: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 60,
    marginLeft: 20,
    marginTop: 20,
    color: "#e3eeff",
    fontFamily: "Avenir-Medium",
  },
  credentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  age: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  errorAge: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#ff0000",
    backgroundColor: "#fadbdb",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  ageErrorLabel: {
    width: (deviceWidth * 20) / 100,
    fontSize: 20,
    color: "#fd7f7f",
    fontFamily: "Avenir-Medium",
  },
  successAge: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  ageLabel: {
    width: (deviceWidth * 30) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
  },
  registrationButton: {
    width: (deviceWidth * 90) / 100,
    padding: 10,
    marginTop: 40,
    borderRadius: 8,
  },
  registerText: {
    fontSize: 25,
    color: "#222222",
    fontFamily: "Avenir-Medium",
    textAlign: "center",
  },
  errorCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#ff0000",
    backgroundColor: "#fadbdb",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  errorLabel: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#fd7f7f",
  },
  successCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  label: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
  },
  explicitLabel: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
  },
  userInput: {
    width: (deviceWidth * 90) / 100,
    marginTop: 40,
  },
  ageInput: {
    width: (deviceWidth * 20) / 100,
  },
  ageAndFlag: {
    width: (deviceWidth * 90) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  explicitFlag: {
    marginTop: 29,
    width: (deviceWidth * 70) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  orText: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    color: "#89999d",
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Avenir-Medium",
  },
  switch: {
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
  },
});

export const accountDetailsStyles = StyleSheet.create({
  accountDetails: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  accountDetailsPage: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 60,
    marginLeft: 20,
    marginTop: 20,
    color: "#e3eeff",
    fontFamily: "Avenir-Medium",
  },
  credentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  age: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  errorAge: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#ff0000",
    backgroundColor: "#fadbdb",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  ageErrorLabel: {
    width: (deviceWidth * 20) / 100,
    fontSize: 20,
    color: "#fd7f7f",
    fontFamily: "Avenir-Medium",
  },
  successAge: {
    width: (deviceWidth * 20) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  ageLabel: {
    width: (deviceWidth * 30) / 100,
    fontSize: 20,
    color: "#e3eeff",
    fontFamily: "Avenir-Medium",
  },
  updateButton: {
    width: (deviceWidth * 90) / 100,
    padding: 10,
    marginTop: 40,
    borderRadius: 8,
  },
  updateText: {
    fontSize: 25,
    color: "#222222",
    fontFamily: "Avenir-Medium",
    textAlign: "center",
  },
  errorCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#ff0000",
    backgroundColor: "#fadbdb",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  errorLabel: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#fd7f7f",
  },
  successCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  label: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
  },
  explicitLabel: {
    width: (deviceWidth * 52) / 100,
    fontSize: 24,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
  },
  userInput: {
    width: (deviceWidth * 90) / 100,
    marginTop: 40,
  },
  ageInput: {
    width: (deviceWidth * 20) / 100,
  },
  ageAndFlag: {
    width: (deviceWidth * 90) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  explicitFlag: {
    marginTop: 29,
    width: (deviceWidth * 70) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  editFlag: {
    marginTop: 29,
    width: (deviceWidth * 1) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  orText: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    color: "#89999d",
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Avenir-Medium",
  },
  switch: {
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
  },
});

export const languageSectionStyles = StyleSheet.create({
  languages: {
    width: (deviceWidth * 90) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  doubleLanguageBlock: {
    width: (deviceWidth * 85) / 100,
    height: (deviceHeight * 26) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageBlock: {
    width: (deviceWidth * 37) / 100,
    height: (deviceHeight * 24) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 10,
    backgroundColor: "#4a4949",
  },
  selectedLanguageBlock: {
    width: (deviceWidth * 37) / 100,
    height: (deviceHeight * 24) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 10,
    backgroundColor: "#28674b",
  },
  language: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  languageText: {
    width: (deviceWidth * 40) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
    textAlign: "center",
  },
  title: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
    marginBottom: 10,
  },
  selectedLanguageText: {
    width: (deviceWidth * 40) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#4CE990",
    textAlign: "center",
  },
});

export const userAvatarStyles = StyleSheet.create({
  userAvatars: {
    width: (deviceWidth * 90) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  rowOfAvatars: {
    width: (deviceWidth * 86) / 100,
    height: (deviceHeight * 14) / 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: (deviceWidth * 25) / 100,
    height: (deviceHeight * 11.85) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#4a4949",
  },
  selectedAvatar: {
    width: (deviceWidth * 25) / 100,
    height: (deviceHeight * 11.85) / 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#ACF39D",
  },
  title: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
    marginBottom: 10,
  },
  avatarImage: {
    width: 100,
    height: 100,
  },
});

export const loginPageStyles = StyleSheet.create({
  loginPage: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 60,
    marginLeft: 20,
    color: "#e3eeff",
    fontFamily: "Avenir-Medium",
  },
  credentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  loginButton: {
    width: (deviceWidth * 90) / 100,
    padding: 10,
    marginTop: 40,
    borderRadius: 8,
  },
  loginText: {
    fontSize: 25,
    color: "#222222",
    fontFamily: "Avenir-Medium",
    textAlign: "center",
  },
  errorCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#ff0000",
    backgroundColor: "#fadbdb",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  errorLabel: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#fd7f7f",
  },
  successCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  label: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
  },
  userInput: {
    width: (deviceWidth * 90) / 100,
    marginTop: 40,
  },
  orText: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    color: "#89999d",
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Avenir-Regular",
  },
});

export const updatePasswordStyles = StyleSheet.create({
  updatePassword: {
    width: deviceWidth,
    height: (deviceHeight * 95.5) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 60,
    marginLeft: 20,
    color: "#e3eeff",
    fontFamily: "Avenir-Medium",
  },
  credentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    color: "#ffffff",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4a4949",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  updateButton: {
    width: (deviceWidth * 90) / 100,
    padding: 10,
    marginTop: 40,
    borderRadius: 8,
  },
  updateText: {
    fontSize: 25,
    color: "#222222",
    fontFamily: "Avenir-Medium",
    textAlign: "center",
  },
  errorCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#ff0000",
    backgroundColor: "#fadbdb",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  errorLabel: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#fd7f7f",
  },
  successCredentials: {
    width: (deviceWidth * 90) / 100,
    fontSize: 25,
    padding: 12,
    borderRadius: 8,
    color: "#32cd32",
    backgroundColor: "#defade",
    marginTop: 5,
    fontFamily: "Avenir-Regular",
  },
  label: {
    width: (deviceWidth * 90) / 100,
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    color: "#e3eeff",
  },
  userInput: {
    width: (deviceWidth * 90) / 100,
    marginTop: 40,
  },
});

export const subscriptionStyles = StyleSheet.create({
  subscriptions: {
    width: deviceWidth,
    height: (deviceHeight * 90.5) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 45,
  },
  header: {
    width: deviceWidth,
    fontSize: 22,
    color: "#e3eeff",
    fontFamily: "Avenir-Medium",
    textAlign: "left",
    marginLeft: 15,
  },
  faq: {
    marginTop: 50,
    width: deviceWidth,
    height: (deviceHeight * 29) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#1d1d1d",
    paddingTop: 10,
    paddingBottom: 10,
  },
  questions: {
    width: deviceWidth,
    fontSize: 25,
    color: "#ffefd5",
    fontFamily: "Avenir-Medium",
    textAlign: "center",
  },
  points: {
    marginTop: 10,
    fontSize: 15,
    color: "#e3eeff",
    textAlign: "left",
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "Avenir-Regular",
  },
  subscriptionContainer: {
    width: deviceWidth,
    height: (deviceHeight * 50) / 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  subscription: {
    width: (deviceWidth * 92) / 100,
    height: (deviceHeight * 18) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    paddingTop: 10,
    backgroundColor: "#4a4949",
  },
  selectedSubscription: {
    width: (deviceWidth * 92) / 100,
    height: (deviceHeight * 18) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    paddingTop: 10,
    backgroundColor: "#28674b",
  },
  subscriptionInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  subscriptionType: {
    fontSize: 30,
    marginLeft: -35,
    color: "#e3eeff",
    fontFamily: "Avenir-Medium",
  },
  selectedSubscriptionType: {
    fontSize: 30,
    marginLeft: -35,
    color: "#90fabc",
    fontFamily: "Avenir-Medium",
  },
  subscriptionFeatures: {
    width: (deviceWidth * 79) / 100,
    marginTop: 10,
    fontSize: 15,
    color: "#ffefd5",
    textAlign: "left",
    fontWeight: "normal",
    fontFamily: "Avenir-Regular",
  },
  selectedSubscriptionFeatures: {
    width: (deviceWidth * 79) / 100,
    marginTop: 10,
    fontSize: 15,
    color: "#4CE990",
    textAlign: "left",
    fontFamily: "Avenir-Regular",
  },
  subscriptionPrice: {
    marginLeft: -35,
    marginTop: 10,
    fontSize: 15,
    color: "#ffefd5",
    textAlign: "left",
    backgroundColor: "#000",
    padding: 5,
    marginBottom: 5,
    borderRadius: 10,
    fontFamily: "Avenir-Medium",
  },
  selectedSubscriptionPrice: {
    marginLeft: -35,
    marginTop: 10,
    fontSize: 15,
    color: "#ffefd5",
    textAlign: "left",
    backgroundColor: "#00c65d",
    padding: 5,
    marginBottom: 5,
    borderRadius: 10,
    fontFamily: "Avenir-Medium",
  },
});

export const loaderStyles = StyleSheet.create({
  loader: {
    width: 200,
    height: 200,
  },
});

export const noResultStyles = StyleSheet.create({
  noResults: {
    fontSize: 18,
    marginTop: 2,
    color: "#ffefd5",
    fontFamily: "Quicksand-Bold",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
