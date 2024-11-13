import { FlatList, Text, TextInput, useWindowDimensions, View } from "react-native";
import { style } from "./homeStyle";
import { colorsApp } from "../../theme/colors";
import { useEffect, useState } from "react";
import { fontsPoppins } from "../../theme/fonts";
import data from "../../../../data.json";
import RowItem from "./view/RowItem";
import { FlatGrid } from "react-native-super-grid";

export type IPlace = typeof data.places[0]

export default function HomeScreen() {
  const [searchTravel, setSearchTravel] = useState("");
  const { width } = useWindowDimensions()


  return (
    <View style={style.container}>
      <TextInput
        value={searchTravel}
        style={[style.textInput, {
          fontFamily: searchTravel.length > 0 ? fontsPoppins.regular : fontsPoppins.light,
          color: searchTravel.length > 0 ? colorsApp.black : colorsApp.brown
        }]}
        placeholder="Procurar"
        onChangeText={setSearchTravel}
      />
      <FlatGrid
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          padding: 0,
        }}
        spacing={5}
        itemDimension={width / 3}
        data={data.places}
        renderItem={({ item }) => <RowItem data={item} />}
      />
    </View>
  )
}