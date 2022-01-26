import { useState } from "react"
import { Button, TextInput, View, StyleSheet } from "react-native";

export default function Form({addTodoItem}){
    const [value, setValue] = useState('');

    const onChange = (value) => setValue(value)

    return (
        <View>
            <TextInput style={styles.input} placeholder="Add todo..." onChangeText={onChange}/>
            <Button style={styles.button} title={'Add Todo'} onPress={() => addTodoItem(value)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 20,
    },
    button: {
        marginTop: 10
    }
})

