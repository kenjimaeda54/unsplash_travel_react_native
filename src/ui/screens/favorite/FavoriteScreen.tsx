import { Text, useWindowDimensions, View } from "react-native";
import { style } from "./favoriteStyle";
import { FlatGrid } from "react-native-super-grid";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { keyStorageIdFavorite } from "../../../utils/constants";
import { IPlace } from "../../../utils/typesCommon";

export default function FavoriteScreen() {
  const { width } = useWindowDimensions()
  const [favoritesPlaces, setFavoritePlaces] = useState<IPlace[]>([])

  useEffect(() => {
    handleGetJsonFavorite()
  }, [])

  async function handleGetJsonFavorite() {
    const json = await AsyncStorage.getItem(keyStorageIdFavorite)
    if (json) {
      const favoritePlaces = JSON.parse(json)
      setFavoritePlaces(favoritePlaces)
    }
  }

  return (
    <View style={style.container}>
      {
        favoritesPlaces.length > 0 ? (
          <FlatGrid
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 100,
              paddingTop: 30,
            }}
            spacing={5}
            itemDimension={width / 3}
            data={favoritesPlaces}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        ) : (
          <View style={style.containerText}>
            <Text
              style={style.textEmptyFavorite}>Sem favoritos por favor adicione na tela inicial</Text>
          </View>
        )
      }

    </View>
  )
}