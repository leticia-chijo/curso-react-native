import { StatusBar } from "expo-status-bar"
import Drawer from "expo-router/drawer"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { FontAwesome } from "@expo/vector-icons"
import { router } from "expo-router"

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={({ color }) => <FontAwesome size={28} name="user" color={color} />}
        label="Usuário"
        onPress={() => router.push("/user")}
      />
    </DrawerContentScrollView>
  )
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#E94560" />
      <Drawer
        drawerContent={() => <CustomDrawerContent />}
        screenOptions={{
          headerStyle: { backgroundColor: "#E94560" },
          headerTintColor: "#FFFFFF"
        }}
      >
        <Drawer.Screen name="(tabs)" options={{headerShown: false}}/>
        <Drawer.Screen name="+not-found" options={{ headerTitle: "Erro" }} />
      </Drawer>
    </>
  )
}
