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
  }
})