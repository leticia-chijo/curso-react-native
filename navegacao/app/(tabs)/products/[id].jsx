import { Text, View } from "react-native"
import { styles } from "../../../styles/styles"
import { useLocalSearchParams } from "expo-router"

export default function ProductDetail() {
  const { id } = useLocalSearchParams()

  return (
    <View style={[styles.container, { backgroundColor: "#F2C6DE" }]}>
      <Text>Product com o id: {id}</Text>
    </View>
  )
}
