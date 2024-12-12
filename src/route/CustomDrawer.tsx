import { createDrawerNavigator } from "@react-navigation/drawer"
import { DrawerNavigation, RootNavigation } from "../utils/RootNavigation"
import FavoriteScreen from "../ui/screens/favorite/FavoriteScreen"
import ProfileScreen from "../ui/screens/profile/ProfileScreen"
import { NavigationProp, useNavigation } from "@react-navigation/native"


const { Screen, Navigator } = createDrawerNavigator<DrawerNavigation>()

type TypeNavigation = NavigationProp<RootNavigation, 'Bottom'>

export default function CustomDrawer() {
  const { navigate } = useNavigation<TypeNavigation>()

  return (
    <Navigator
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