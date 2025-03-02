import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { Link } from "expo-router"

export default function Home() {
  return (
    <View style={[styles.container, { backgroundColor: "#FAEDCB" }]}>
      <Text>Home</Text>
      <Link push href="/user">Ir para Usuários ➡️</Link>
      <Link push href="/products">Ir para Produtos ➡️</Link>
      <Link push href="/fnaouhdnoaid">Ir para ERRO ➡️</Link>
    </View>
  )
}
