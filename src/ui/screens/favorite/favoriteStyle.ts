import { StyleSheet } from "react-native";
import { colorsApp } from "../../theme/colors";
import { fontsPoppins } from "../../theme/fonts";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.black,
    paddingHorizontal: 15,
    paddingVertical: 50
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingHorizontal: 35
  },
  textEmptyFavorite: {
    color: colorsApp.white,
    fontSize: 20,
    fontFamily: fontsPoppins.bold,
    textAlign: "center",
    lineHeight: 33
  }
})