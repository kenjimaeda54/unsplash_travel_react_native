import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { RootNavigation } from "../../../utils/RootNavigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { IPlace } from "../../../utils/typesCommon";
import data from "../../../../data.json"
import { style } from "./detailStyle";
import IconBack from "../../../../assets/icons/arrow_back.svg"
type TypeNavigation = RouteProp<RootNavigation, 'Details'>

export default function DetailScreen() {
  const [dataPlace, setDataPlace] = useState<IPlace>({} as IPlace)
  const { params } = useRoute<TypeNavigation>()
  const { goBack } = useNavigation()

  useEffect(() => {
    if (params.id) {
      const findPlace = data.places.find(place => place.id === params.id)
      if (!findPlace) return
      setDataPlace(findPlace)
    }
  }, [])

  return (
    <View style={style.container}>
      <View style={style.buttonBack}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <IconBack />
        </TouchableWithoutFeedback>
      </View>
      <Image style={style.image} source={{ uri: dataPlace.image }} />
      <View style={style.contentText}>
        <Text style={style.title}>{dataPlace.name}</Text>
        <Text style={style.description}>{dataPlace.description}</Text>
      </View>
    </View>
  )
}