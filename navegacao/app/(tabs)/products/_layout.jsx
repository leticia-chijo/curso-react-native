import { DrawerToggleButton } from "@react-navigation/drawer"
import { Stack } from "expo-router"

export default function ProductsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#E94560" },
        headerTintColor: "#FFFFFF",
        headerRight: () => <DrawerToggleButton tintColor="#FFFFFF" />
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="products/[id]" />
    </Stack>
  )
}
