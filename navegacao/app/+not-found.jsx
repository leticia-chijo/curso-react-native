import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { Link } from "expo-router"

export default function NotFound() {
  return (
    <View style={[styles.container, { backgroundColor: "#F7D9C4" }]}>
      <Text>Essa página não existe</Text>
      <Link replace href="/">Ir para Home ➡️</Link>
    </View>
  )
}
