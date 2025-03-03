import { FontAwesome } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#E94560" },
        headerTintColor: "#FFFFFF",
        tabBarActiveTintColor: "#E94560",
        tabBarInactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Produtos",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="shopping-bag" color={color} />
          )
        }}
      />
    </Tabs>
  )
}
