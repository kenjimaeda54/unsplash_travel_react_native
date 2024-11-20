import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { style } from "./rowItemStyle";
import { IPlace } from "../../../utils/typesCommon";
import { ReactNode } from "react";


interface CardFavoriteProps {
  data: IPlace;
  icon?: ReactNode
  onPressCard: () => void
}

export default function CardFavorite({ data, icon, onPressCard }: CardFavoriteProps) {
  return (
    <TouchableWithoutFeedback onPress={onPressCard}>
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

    </TouchableWithoutFeedback>
  )
}