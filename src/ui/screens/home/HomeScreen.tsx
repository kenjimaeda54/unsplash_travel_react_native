import { FlatList, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { style } from "./homeStyle";
import { colorsApp } from "../../theme/colors";
import { useEffect, useState } from "react";
import { fontsPoppins } from "../../theme/fonts";
import data from "../../../../data.json";
import RowItem from "./view/RowItem";
import { FlatGrid } from "react-native-super-grid";
import HeartNotFill from "../../../../assets/icons/heart_not_fill.svg"
import Heart from "../../../../assets/icons/heart_fill.svg"
import { IPlace } from "../../../utils/typesCommon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { keyStorageIdFavorite } from "../../../utils/constants";



export default function HomeScreen() {
  const [searchTravel, setSearchTravel] = useState("");
  const { width } = useWindowDimensions()

  const handleFavorite = async (item: IPlace) => {
    const findItem = data.places.find(place => place.id === item.id)
    const getListIds = await AsyncStorage.getItem(keyStorageIdFavorite)
    if (findItem && getListIds) {
      const addNewItem = [...JSON.parse(getListIds), findItem.id]
      await AsyncStorage.setItem(keyStorageIdFavorite, JSON.stringify(addNewItem))
      return
    }
    if (findItem && !getListIds) {
      await AsyncStorage.setItem(keyStorageIdFavorite, JSON.stringify([findItem.id]))
      return
    }
  }

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
          paddingTop: 30,
        }}
        spacing={5}
        itemDimension={width / 3}
        data={data.places}
        renderItem={({ item }) => <RowItem data={item} icon={
          <TouchableOpacity onPress={() => handleFavorite(item)} style={style.containerIcon}>
            <HeartNotFill
              width={13}
              height={13}
              fill={colorsApp.white} />
          </TouchableOpacity>

        } />}
      />
    </View>
  )
}