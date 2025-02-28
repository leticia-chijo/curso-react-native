import { Alert, Button, Image, ScrollView, Text, TextInput } from "react-native"
import logo from "../assets/images/check.png"

export default function RootLayout() {
  return (
    <ScrollView>
      <Image source={logo}/>
      <Text>Minhas Tarefas</Text>
      <TextInput />
      <Button 
        title="+"
        onPress={() => Alert.alert("Oie")}
      />
    </ScrollView>
  )
}
