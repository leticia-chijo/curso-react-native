import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { Link } from "expo-router"

export default function User() {
  return (
    <View style={[styles.container, { backgroundColor: "#C9E4DE" }]}>
      <Text>User</Text>
      <Link push href="/settings">Ir para Configurações ➡️</Link>
    </View>
  )
}
