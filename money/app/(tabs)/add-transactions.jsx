import { View, ScrollView, Alert, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native"
import { globalStyles } from "../../styles/globalStyles"
import Button from "../../components/Button"
import { useRef, useState } from "react"
import CategoryPicker from "../../components/CategoryPicker"
import DatePicker from "../../components/DatePicker"
import CurrencyInput from "../../components/CurrencyInput"
import DescriptionInput from "../../components/DescriptionInput"

const initialForm = {
  description: "",
  value: 0,
  date: new Date(),
  category: "Renda"
}

export default function AddTransactions() {
  const [form, setForm] = useState(initialForm)
  const valueInputRef = useRef()

  const addTransaction = () => {
    Alert.alert(`${form.description} | ${form.value} | ${form.date} | ${form.category}`)
  }

  return (
    <KeyboardAvoidingView style={globalStyles.screenContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={globalStyles.content}>
          <View style={styles.form}>
            <DescriptionInput form={form} setForm={setForm} valueInputRef={valueInputRef} />
            <CurrencyInput form={form} setForm={setForm} valueInputRef={valueInputRef}/>
            <DatePicker form={form} setForm={setForm} />
            <CategoryPicker form={form} setForm={setForm} />
          </View>

          <Button onPress={addTransaction}>Adicionar</Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginBottom: 40,
    marginTop: 10
  }
})
