import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { StyleSheet, Text, Button, View, TextInput, Image } from "react-native";

export default function LoginApp() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loggedIn, setLoggedIn] = useState(false);
    let [errorMsg, setErrorMsg] = useState(false);
    let [chocolate, setChocolate] = useState(false);
    let [ice, setIce] = useState(false);
    let [rich, setRich] = useState(false);
    let [result, setResult] = useState('');
    let [milkTea, setMilkTea] = useState(false);
    let welcome = "Welcome, please enter a username below!  \n  The secret password is 'MilkTea.'"
    let error = "Incorrect password. Please try again."

    let doLogin = useCallback(() => {
        console.log("Welcome + " + username)
        if (password === "MilkTea") {
            setLoggedIn(true)
        } else {
            setErrorMsg(true);
        }
    }, [username, password])

    let submitForm=()=>{
        if((chocolate && ( ice || rich)) || (ice && (chocolate || rich)) || (rich && ( ice || chocolate)) ){
            setResult("You are a Milk Tea!")
            setMilkTea(true)
        }
        else{
            setResult("You are a Fruit Tea!")
            setMilkTea(false)
        }
    }

    return (
        loggedIn ? (
            <View style={styles.container}>
                <Text>Welcome {username}!</Text>

                <Text>Do you like chocolate or candy more?</Text>
                <Button title="chocolate" onPress={()=> setChocolate(true)} ></Button>
                <Button title="candy" onPress={()=> setChocolate(false)}></Button>

                <Text>Would you have fruits or icecream for dessert?</Text>
                <Button title="icecream" onPress={()=> setIce(true)}></Button>
                <Button title="fruits" onPress={()=> setIce(false)}></Button>

                <Text>Do you like something sweet that's rich or refreshing?</Text>
                <Button title="rich" onPress={()=> setRich(true)}></Button>
                <Button title="refreshing" onPress={()=> setRich(false)}></Button>

                <Button title="submit" onPress={()=> submitForm()}></Button>

                <Text>{result}</Text>
               {
                   result!='' &&
                    <Image source={require(milkTea?"../portfolio2-1/assets/milktea.jpg":"../portfolio2-1/assets/fruittea.jpg" )} style={{width:280, height:180}} />
                   
               }

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