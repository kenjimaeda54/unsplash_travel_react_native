import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../ui/screens/home/HomeScreen";
import FavoriteScreen from "../ui/screens/favorite/FavoriteScreen";
import ProfileScreen from "../ui/screens/profile/ProfileScreen";
import HomeIconNotFill from "../../assets/icons/home_not_fill.svg"
import HomeIconFill from "../../assets/icons/home_fill.svg"
import HeartIconNotFill from "../../assets/icons/heart_not_fill.svg"
import HeartIconFill from "../../assets/icons/heart_fill.svg"
import ProfileIconFill from "../../assets/icons/profile_fill.svg"
import ProfileIconNoFill from "../../assets/icons/profile_not_fill.svg"



const { Navigator, Screen } = createBottomTabNavigator();

export function CustomBottomTab() {
  return (
    <Navigator screenOptions={{
      headerShown: false, tabBarShowLabel: false,
      tabBarActiveTintColor: "#000000",
      tabBarInactiveTintColor: "#808080"
    }}>
      <Screen options={{
        tabBarIcon: ({ color, focused }) => focused ? <HomeIconFill fill={color} width={20} height={20} /> : <HomeIconNotFill fill={color} width={20} height={20} />
      }}
        name="home"
        component={HomeScreen} />
      <Screen
        options={{
          tabBarIcon: ({ color, focused }) => focused ? <HeartIconFill fill={color} width={20} height={20} /> : <HeartIconNotFill fill={color} width={20} height={20} />
        }}
        name="favorite"
        component={FavoriteScreen} />
      <Screen
        options={{
          tabBarIcon: ({ color, focused }) => focused ? <ProfileIconFill fill={color} width={25} height={25} /> : <ProfileIconNoFill width={25} height={25} />
        }}
        name="profile" component={ProfileScreen} />
    </Navigator>

  )
}