import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../ui/screens/home/HomeScreen";
import FavoriteScreen from "../ui/screens/favorite/FavoriteScreen";
import ProfileScreen from "../ui/screens/profile/ProfileScreen";
import HomeIconNotFill from "../../assets/icons/home_not_fill.svg"
import HomeIconFill from "../../assets/icons/home_fill.svg"
import HeartIconNotFill from "../../assets/icons/heart_not_fill.svg"
import HeartIconFill from "../../assets/icons/heart_fill.svg"
import ProfileIconFill from "../../assets/icons/profile_fill.svg"
import ProfileIconNotFill from "../../assets/icons/profile_not_fill.svg"
import { useWindowDimensions, View } from "react-native";
import { colorsApp } from "../ui/theme/colors";
import { BottomNavigation, RootNavigation } from "../utils/RootNavigation";



const { Navigator, Screen } = createBottomTabNavigator<BottomNavigation>();

export function CustomBottomTab() {
  const { height } = useWindowDimensions()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colorsApp.lightGreen,
        tabBarInactiveTintColor: colorsApp.brown,
        tabBarStyle: {
          position: "absolute",
          bottom: height * 0.08,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colorsApp.variantBlack,
          borderRadius: 25,
          height: 55,
          borderTopWidth: 0, //remover a linha no custtom tab,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 25,

        }
      }

      }>
      <Screen options={{
        tabBarIcon: ({ color, focused }) => focused ? <HomeIconFill fill={color} width={20} height={20} /> : <HomeIconNotFill fill={color} width={20} height={20} />
      }}
        name="Home"
        component={HomeScreen} />
      <Screen
        options={{
          tabBarIcon: ({ color, focused }) => focused ? <HeartIconFill fill={color} width={20} height={20} /> : <HeartIconNotFill fill={color} width={20} height={20} />
        }}
        name="Favorite"
        component={FavoriteScreen} />
      <Screen
        options={{
          tabBarIcon: ({ color, focused }) => focused ? <ProfileIconFill fill={color} width={25} height={25} /> : <ProfileIconNotFill fill={color} width={25} height={25} />,
        }}
        name="Profile" component={ProfileScreen} />
    </Navigator>

  )
}