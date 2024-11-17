import { StyleSheet } from "react-native";
import { colorsApp } from "../../../theme/colors";
import { fontsPoppins } from "../../../theme/fonts";

export const style = StyleSheet.create({
  container: {
    height: 250,
    borderRadius: 10,
    backgroundColor: colorsApp.variantBlack,
    gap: 5,
  },
  image: {
    width: "100%",
    height: "80%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  text: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    fontFamily: fontsPoppins.regular,
    fontSize: 17,
    color: colorsApp.brown
  }


})