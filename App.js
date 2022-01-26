import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/Components/Header/Header'
import TodoList from './src/Components/TodoList/TodoList';

function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <TodoList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App