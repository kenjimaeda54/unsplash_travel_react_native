import { Text, View, Image, Pressable } from "react-native";
import { style } from "./profileStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootNavigation } from "../../../utils/RootNavigation";

type TypeNavigation = NavigationProp<RootNavigation, 'Drawer'>

export default function ProfileScreen() {
  const { navigate } = useNavigation<TypeNavigation>()

  return (
    <SafeAreaView style={style.container}>
      <Pressable onPress={() => navigate("Drawer", { screen: "DrawerProfile" })} >
        <Image
          style={style.image}
          source={{ uri: "https://github.com/kenjimaeda54.png" }}
        />
      </Pressable>
      <View style={style.content}>
        <Text style={style.title}>Ricardo Kenji Vivas Maeda</Text>
        <Text style={style.email}>example@gmail.com</Text>
      </View>
    </SafeAreaView>
  )
}

function addListener(arg0: string, arg1: () => void) {
  throw new Error("Function not implemented.");
}
