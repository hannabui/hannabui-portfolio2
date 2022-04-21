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