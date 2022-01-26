import { useState } from "react";
import { FlatList, View } from "react-native";
import Todo from "../Todo/Todo";
import Form from "../Form/index";


function TodoList() {
  const [todoList, setTodoList] = useState([
      {value: 'Todo1', id: 1}
  ])

  const addTodoItem = (text) => setTodoList((item) => 
   [{value: text, id: Math.random().toString()}, ...item])

  const deleteTodo = (id) => setTodoList((todos) => todos.filter((item) => item.id !== id)) 

  return(
      <View>
          <Form addTodoItem={addTodoItem}/>
          <FlatList data={todoList} renderItem={({item}) => (
              <Todo todo={item} deleteTodo={deleteTodo}/>
            )}/>
           
      </View>
  )
}

export default TodoList;
