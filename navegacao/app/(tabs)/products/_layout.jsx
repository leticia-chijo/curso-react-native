import { Stack } from "expo-router"

export default function ProductsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#E94560" },
        headerTintColor: "#FFFFFF"
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="products/[id]" />
    </Stack>
  )
}
