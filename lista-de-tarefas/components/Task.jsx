import { Ionicons } from "@expo/vector-icons"
import { Animated, StyleSheet, Text } from "react-native"
import { colors } from "../constants/colors"
import { useState } from "react"
import { Directions, FlingGestureHandler, State } from "react-native-gesture-handler"

export default function Task({ text, initialCompleted, deleteTask }) {
  const [completed, setCompleted] = useState(initialCompleted)
  const swipe = new Animated.Value(0)

  const handleFling = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Animated.timing(swipe, {
        toValue: 500,
        duration: 300
      }).start(() => deleteTask())
    }
  }

  return (
    <FlingGestureHandler direction={Directions.RIGHT} onHandlerStateChange={handleFling}>
      <Animated.View style={[style.rowContainer, { transform: [{ translateX: swipe }] }]}>
        <Ionicons
          name="checkmark-circle"
          size={32}
          color={completed ? colors.primary : "gray"}
          onPress={() => setCompleted(!completed)}
        />
        <Text>{text}</Text>
      </Animated.View>
    </FlingGestureHandler>
  )
}

const style = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    elevation: 3, // Android
    shadowColor: "#000000", // iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "#FFFFFF",
    padding: 10
  }
})
