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
  containerIcon: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    right: 20,
    top: 20,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colorsApp.variantBlack,
    shadowColor: colorsApp.variantBlack,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 27,
    elevation: 12
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