//I chose option 1.1 where I work on two previous projects
//I've added additional componenets such as:
//creating a survey asking whether you're a milk tea or fruit tea
//creating the survey to choose based on what side was chosen most. 
//once submitted, images would should what kind of tea they are.
import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { StyleSheet, Text, Button, View, TextInput, Image } from "react-native";

export default function LoginApp() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loggedIn, setLoggedIn] = useState(false);
    let [errorMsg, setErrorMsg] = useState(false);
    let [chocolate, setChocolate] = useState(false);
    let [icecream, setIcecream] = useState(false);
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

    let submitForm = (() => {
        if((chocolate && ( icecream || rich)) || (icecream && (chocolate || rich)) || (rich && ( icecream || chocolate)) ){
            setResult("You are a Milk Tea!")
            setMilkTea(true)
        }
        else{
            setResult("You are a Fruit Tea!")
            setMilkTea(false)
        }
    })

    return (
        loggedIn ? (
            <View style={styles.container}>
                <Text>Welcome {username}!</Text>

                <Text>Do you like chocolate or candy more?</Text>
                <Button title="chocolate" onPress={()=> setChocolate(true)}></Button><br/>
                <Button title="candy" onPress={()=> setChocolate(false)}></Button>

                <Text>Would you have fruits or icecream for dessert?</Text>
                <Button title="icecream" onPress={()=> setIcecream(true)}></Button><br/>
                <Button title="fruits" onPress={()=> setIcecream(false)}></Button>

                <Text>Do you like something sweet that's rich or refreshing?</Text>
                <Button title="rich" onPress={()=> setRich(true)}></Button><br/>
                <Button title="refreshing" onPress={()=> setRich(false)}></Button><br/>

                <Button title="submit" onPress={()=> submitForm()}></Button>

                <Text>{result}</Text>
               {
                   result!='' &&
                    <Image source={require(milkTea?"../portfolio/assets/milktea.jpg":"../portfolio/assets/fruittea.jpg" )} style={{width:280, height:180}} />
                   
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