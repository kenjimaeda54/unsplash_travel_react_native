import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./rowItemStyle";
import { colorsApp } from "../../../theme/colors";
import { IPlace } from "../../../../utils/typesCommon";
import { ReactNode } from "react";


interface RowItemProps {
  data: IPlace;
  icon: ReactNode
}

export default function RowItem({ data, icon }: RowItemProps) {
  return (
    <View style={style.container}>
      {icon}
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