import { View, Text, StyleSheet } from "react-native";

function Todo({todo, deleteTodo}) {
  return (
      <View style={styles.container}>
          <Text style={styles.todo} key={todo.id} onPress={() => deleteTodo(todo.id)}>{todo.value}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    todo: {
        width: "100%",
        height: 20,
        color: 'white',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        margin: 10
    }
})

export default Todo;
