import { StyleSheet } from "react-native";
import { colorsApp } from "../../theme/colors";
import { fontsPoppins } from "../../theme/fonts";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.black,
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  content: {
    paddingVertical: 10,
    gap: 5,
  },
  email: {
    fontFamily: fontsPoppins.light,
    fontSize: 17,
    color: colorsApp.white

  },
  title: {
    fontFamily: fontsPoppins.bold,
    fontSize: 20,
    color: colorsApp.white
  }
})