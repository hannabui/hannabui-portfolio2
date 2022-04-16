import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

export default function LoginApp() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loggedIn, setLoggedIn] = useState(false);
    let [errorMsg, setErrorMsg] = useState(false);
    let welcome = "Welcome, please log in below!"
    let error = "Incorrect password. Please try again."

    let doLogin = useCallback(() => {
        console.log("Welcome + " + username)
        if (password === "Ch@rge!") {
            setLoggedIn(true)
        } else {
            setErrorMsg(true);
        }
    }, [username, password])
    return (
        loggedIn ? (
            <View style={styles.container}>
                <Text>Welcome {username}!</Text>
            </View>
            ):(
            <View style={styles.container}>
                <View>
                    <Text>{welcome}</Text>
                </View>

                <TextInput onChangeText={setUsername}
                    style={styles.input} value={username} placeholder={"Username"}></TextInput>
                <TextInput onChangeText={setPassword}
                    style={styles.input} value={password} placeholder={"Password"}></TextInput>

                <Button title="Login" onPress={doLogin}></Button>

                {errorMsg ? (
                    <Text style={styles.incorrect}>{error}</Text>
                ):undefined}
                
                <StatusBar style="auto" />
            </View>
            )
    );    
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        height: 100,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    incorrect: {
        color: "red",
    },
});