import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./rowItemStyle";
import HeartNotFill from "../../../../../assets/icons/heart_not_fill.svg"
import Heart from "../../../../../assets/icons/heart_fill.svg"
import { colorsApp } from "../../../theme/colors";
import { IPlace } from "../../../../utils/typesCommon";

export default function RowItem({ data }: { data: IPlace }) {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.containerIcon}>
        <HeartNotFill
          width={13}
          height={13}
          fill={colorsApp.white} />
      </TouchableOpacity>
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