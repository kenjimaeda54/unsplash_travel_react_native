import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../ui/screens/home/HomeScreen";
import FavoriteScreen from "../ui/screens/favorite/FavoriteScreen";
import ProfileScreen from "../ui/screens/profile/ProfileScreen";
import HomeIcon from "../../assets/icons/home.svg"
import HeartIcon from "../../assets/icons/heart.svg"
import ProfileIcon from "../../assets/icons/profile.svg"


const { Navigator, Screen } = createBottomTabNavigator();

export function CustomBottomTab() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen options={{
        tabBarIcon: ({ color }) => <HomeIcon color={color} width={20} height={20} />
      }}
        name="home"
        component={HomeScreen} />
      <Screen
        options={{
          tabBarIcon: ({ color }) => <HeartIcon color={color} width={20} height={20} />
        }}
        name="favorite"
        component={FavoriteScreen} />
      <Screen
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon color={color} width={20} height={20} />
        }}
        name="profile" component={ProfileScreen} />
    </Navigator>

  )
}