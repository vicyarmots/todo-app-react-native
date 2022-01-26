import { View, StyleSheet, Text} from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'firebrick',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
})