import { NavigationContainer } from "@react-navigation/native";
import { CustomBottomTab } from "./CustomBottomTab";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AppRoute() {
  return (
    <NavigationContainer>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <CustomBottomTab />
      </SafeAreaView>
    </NavigationContainer>

  )
}