import { StyleSheet } from "react-native";
import { fontsPoppins } from "../../theme/fonts";
import { colorsApp } from "../../theme/colors";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.black,
    paddingHorizontal: 15,
    paddingVertical: 50
  },
  textInput: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: colorsApp.brown,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 17,
  },
  text: {
    fontFamily: fontsPoppins.light,
    fontSize: 20,
    color: colorsApp.black
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
})