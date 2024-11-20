import { FlatList, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { style } from "./homeStyle";
import { colorsApp } from "../../theme/colors";
import { useEffect, useState } from "react";
import { fontsPoppins } from "../../theme/fonts";
import data from "../../../../data.json";
import { FlatGrid } from "react-native-super-grid";
import HeartNotFill from "../../../../assets/icons/heart_not_fill.svg"
import Heart from "../../../../assets/icons/heart_fill.svg"
import { IPlace } from "../../../utils/typesCommon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { keyStorageIdFavorite } from "../../../utils/constants";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootNavigation } from "../../../utils/RootNavigation";
import CardFavorite from "../../view/rowItem/CardFavorite";

type TypeNavigation = NavigationProp<RootNavigation, 'Details'>

export default function HomeScreen() {
  const [searchTravel, setSearchTravel] = useState("");
  const { width } = useWindowDimensions()
  const { navigate } = useNavigation<TypeNavigation>()
  const [favoritePlaces, setFavoritePlaces] = useState<number[]>([])

  useEffect(() => {
    handleGetJsonFavorite()
  }, [])

  const handleFavorite = async (item: IPlace) => {
    const findItem = data.places.find(place => place.id === item.id)
    const getListIds = await AsyncStorage.getItem(keyStorageIdFavorite)
    if (findItem && getListIds) {
      const addNewItem = [...JSON.parse(getListIds), findItem.id]
      await AsyncStorage.setItem(keyStorageIdFavorite, JSON.stringify(addNewItem))
      handleGetJsonFavorite()
      return
    }
    if (findItem && !getListIds) {
      await AsyncStorage.setItem(keyStorageIdFavorite, JSON.stringify([findItem.id]))
      handleGetJsonFavorite()
      return
    }
  }

  function handleGetJsonFavorite() {
    AsyncStorage.getItem(keyStorageIdFavorite).then(json => {
      if (json) {
        const favoritePlaces = JSON.parse(json)
        setFavoritePlaces(previous => [...previous, ...favoritePlaces])
      }
    })
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
        renderItem={({ item }) => <CardFavorite

          onPressCard={() => navigate('Details', { id: item.id })}
          data={item} icon={
            favoritePlaces.find(it => it === item.id) ?
              <TouchableOpacity disabled style={style.containerIcon}>
                <Heart
                  width={13}
                  height={13}
                  fill={colorsApp.red} />
              </TouchableOpacity>

              :
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