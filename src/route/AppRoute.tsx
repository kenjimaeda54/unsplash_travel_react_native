import { NavigationContainer } from "@react-navigation/native";
import { CustomBottomTab } from "./CustomBottomTab";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AppRoute() {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <NavigationContainer>
        <CustomBottomTab />
      </NavigationContainer>
    </SafeAreaView>
  )
}