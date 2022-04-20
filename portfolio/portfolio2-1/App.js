//My first project of option 1.1 is Lab 6.
//I've added additional componenets such as:
//creating a mini quiz asking if you're a milk tea or fruit tea.
import { StyleSheet, View } from "react-native";
import LoginApp from "./LoginApp";

export default function App() {
    return (
      <View style={styles.container}>
        <LoginApp/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: 100,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});