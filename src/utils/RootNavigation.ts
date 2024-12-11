import { NavigatorScreenParams } from "@react-navigation/native"

export type BottomNavigation = {
  Home: undefined
  Favorite: undefined
  Profile: undefined
}

export type DrawerNavigation = {
  Favorite: undefined
  DrawerProfile: undefined
}

export type RootNavigation = {
  Bottom: NavigatorScreenParams<BottomNavigation>,
  Drawer: NavigatorScreenParams<DrawerNavigation>,
  Details: {
    id: number
  }
}

