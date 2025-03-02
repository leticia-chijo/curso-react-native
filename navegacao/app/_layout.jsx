import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#E94560" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#E94560" },
          headerTintColor: "#FFFFFF"
          // headerShown: false
        }}
      >
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="settings" options={{ headerTitle: "Configurações" }} />
        <Stack.Screen name="user" options={{ headerTitle: "Usuário" }} />
        <Stack.Screen name="products" options={{ headerTitle: "Produtos" }} />
        <Stack.Screen name="products/[id]" options={{ headerTitle: "Detalhes" }} />
        <Stack.Screen name="+not-found" options={{ headerTitle: "Erro" }} />
      </Stack>
    </>
  )
}
