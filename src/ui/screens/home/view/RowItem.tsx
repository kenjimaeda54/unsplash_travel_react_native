import { View, Text, Image } from "react-native";
import { IPlace } from "../HomeScreen";
import { style } from "./rowItemStyle";

export default function RowItem({ data }: { data: IPlace }) {
  return (
    <View style={style.container}>
      <Image
        source={{ uri: data.image }}
        style={style.image}
        resizeMode="cover"
      />
      <Text
        style={style.text}
      >{data.name}</Text>
    </View>
  )
}