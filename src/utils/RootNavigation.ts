import { NavigatorScreenParams } from "@react-navigation/native"

export type BottomNavigation = {
  Home: undefined
  Favorite: undefined
  Profile: undefined
}

export type RootNavigation = {
  Bottom: NavigatorScreenParams<BottomNavigation>
  Details: {
    id: number
  }
}

