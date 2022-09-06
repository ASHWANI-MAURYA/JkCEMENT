import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react';
import axios from "axios";
const admin = ({ navigation }) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    let [isEmail, setIsEmail] = useState(null);
    let [isPassword, setIsPassword] = useState(null);
    function reset() {
        setEmail("");
        setPassword("");
    }
    function submit() {
        // debugger;
        if (Email == "") {
            setIsEmail('false');
            return;
        }
        else {
            setIsEmail("")
        }
        // debugger;
        if (Password == "") {
            setIsPassword("false");
            return;
        }
        else {
            setIsPassword("")
        }

        try {
            //get data by api
            axios.post(`http://localhost:3000/api/get-UserData`, {
                Email: Email,
                Password: Password
            })
                .then(res => {
                    //debugger;
                    let userInfo = res.data;
                    console.log(userInfo);

                })
                .catch(e => {
                    console.log(`post error ${e}`);
                });
        }
        catch (error) {
            console.log(error.message);
        }
    };
    return (
        <View>
            <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 30, marginHorizontal: 20 }}>Admin Login..</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10 }}>
                <View style={style.ViewBok}>
                    <View style={{ marginHorizontal: 'auto' }}>
                        <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 20 }}>Email</Text>
                        <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 50 }}>Password.</Text>
                    </View>
                </View>
                <View style={style.ViewBok}>
                    <View style={{ width: 320 }}>
                        <TextInput placeholder='Email' style={{ borderWidth: 1, borderColor: 'black', marginTop: 20, padding: 10 }} value={Email} onChangeText={setEmail} />
                        <Text style={{ fontWeight: '400', fontSize: 15, color: 'red' }}>
                            {
                                isEmail == "false"
                                    ? "email is Required*"
                                    : ''
                            }
                        </Text>
                        <TextInput secureTextEntry={true} placeholder='Password' style={{ borderWidth: 1, borderColor: 'black', marginTop: 30, padding: 10 }} value={Password} onChangeText={setPassword} />
                        <Text style={{ fontWeight: '400', fontSize: 15, color: 'red' }}>
                            {
                                isPassword == "false"
                                    ? "Password is Required*"
                                    : ""
                            }
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Button title='Reset' onPress={reset} />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Button title='submit' onPress={submit} />
                </View>
            </View>

        </View>
    )
}

export default admin;
const style = StyleSheet.create({
    inputBok: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 10
    },
    ViewBok: {
        width: '50%',
    }
});