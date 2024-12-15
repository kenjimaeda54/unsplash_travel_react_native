import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { DrawerNavigation, RootNavigation } from "../utils/RootNavigation"
import FavoriteScreen from "../ui/screens/favorite/FavoriteScreen"
import ProfileScreen from "../ui/screens/profile/ProfileScreen"
import { NavigationProp, useFocusEffect, useNavigation } from "@react-navigation/native"
import Github from "../../assets/icons/github.svg"
import Favorite from "../../assets/icons/heart_fill.svg"
import { colorsApp } from "../ui/theme/colors"
import React, { useState } from "react"
import { IPlace } from "../utils/typesCommon"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { keyStorageIdFavorite } from "../utils/constants"
import data from "../../data.json"
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types"
import { Linking } from "react-native"


const { Screen, Navigator } = createDrawerNavigator<DrawerNavigation>()

type TypeNavigation = NavigationProp<RootNavigation, 'Bottom'>

export default function CustomDrawer() {
  const { navigate } = useNavigation<TypeNavigation>()
  const [favoritesPlaces, setFavoritesPlaces] = useState<IPlace[]>([])


  useFocusEffect(() => {
    handleGetJsonFavorite()
  })

  async function handleGetJsonFavorite() {
    const json = await AsyncStorage.getItem(keyStorageIdFavorite)
    if (json) {
      const favoritePlaces = JSON.parse(json) as number[]
      const filterFavorite = data.places.filter(place => favoritePlaces.includes(place.id))
      setFavoritesPlaces(filterFavorite)
    }
  }

  return (
    <Navigator
      drawerContent={({ navigation }) => <ContentDrawer navigation={navigation} favoritePlaces={favoritesPlaces} />}
      screenListeners={{
        state: (stateNavigation) => {
          const drawer = stateNavigation.data.state.history.filter(history => history.type === "drawer")
          if (drawer[0]?.status === "closed") {
            navigate("Bottom", { screen: "Profile" })
          }
        }
      }}
      initialRouteName="DrawerProfile"
      defaultStatus="open"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Favorite" component={FavoriteScreen} />
      <Screen name="DrawerProfile" component={ProfileScreen} />
    </Navigator>
  )
}

interface IContentDrawerProps {
  navigation: DrawerNavigationHelpers
  favoritePlaces: IPlace[]
}

function ContentDrawer({ navigation, favoritePlaces }: Readonly<IContentDrawerProps>) {
  const { navigate } = navigation
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={`${favoritePlaces.length} Favoritos`}
        icon={() => <Favorite fill={colorsApp.black} />}
        onPress={() => navigate("Bottom", { screen: "Favorite" })
        }
      />
      <DrawerItem
        label="Github"
        icon={() => <Github />}
        onPress={() => Linking.openURL("https://github.com/kenjimaeda54")}
      />
    </DrawerContentScrollView>

  )
}