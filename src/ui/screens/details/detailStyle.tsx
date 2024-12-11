import { StyleSheet } from "react-native";
import { colorsApp } from "../../theme/colors";
import { fontsPoppins } from "../../theme/fonts";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.black,
  },
  buttonBack: {
    position: "absolute",
    zIndex: 50,
    left: 20,
    top: "5%",
    width: 40,
    height: 40
  },
  image: {
    width: "100%",
    height: "30%",
  },
  contentText: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 23
  },
  title: {
    fontFamily: fontsPoppins.bold,
    fontSize: 20,
    color: colorsApp.white
  },
  description: {
    fontFamily: fontsPoppins.regular,
    fontSize: 15,
    lineHeight: 30,
    color: colorsApp.white
  }
})