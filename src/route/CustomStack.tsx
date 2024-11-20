import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNavigation } from "../utils/RootNavigation"
import DetailScreen from "../ui/screens/details/Detail"
import { CustomBottomTab } from "./CustomBottomTab"


const { Screen, Navigator } = createNativeStackNavigator<RootNavigation>()

export default function CustomStack() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Bottom"
    >
      <Screen name="Details" component={DetailScreen} />
      <Screen name="Bottom" component={CustomBottomTab} />
    </Navigator>
  )
}