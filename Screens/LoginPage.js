import { View, Text, TextInput, StyleSheet, Button,Pressable } from 'react-native'
import React, { useState } from 'react';
import axios from "axios";
const LoginPage = ({ navigation }) => {
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
            // debugger;
            //get data by api
            axios.post(`
http://192.168.225.78:3000/api/get-UserData`, {
                Email: Email,
                Password: Password
            })
                .then(res => {
                    // debugger;
                    let userInfo = res.data;
                    //console.log(userInfo);
                    if(userInfo.getUserData.length)
                    {
                        // console.log(userInfo.getUserData[0].Password);
                        navigation.navigate('AdminPanal',
                        {
                            UserId:userInfo.getUserData[0].Email,
                            UserId:userInfo.getUserData[0].Password
                        }
                        );   
                    }
                    else{
                        window.alert('Invalid Credentials!');
                    }
                    
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
            <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 10,padding:10}}>Admin Login</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10 }}>
                <View style={style.ViewBok}>
                    <View style={{paddingVertical:10}}>
                        <Text style={{ fontWeight: '400', fontSize: 20}}>Email</Text>
                        <TextInput placeholder='Email' keyboardType={'phone-pad'} style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10,borderRadius:4}} value={Email} onChangeText={setEmail} />
                        <Text style={{ fontWeight: '400', fontSize: 15, color: 'red' }}>
                            {
                                isEmail == "false"
                                    ? "email is Required*"
                                    : ''
                            }
                        </Text>
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop:5 }}>Password</Text>
                        <TextInput secureTextEntry={true} keyboardType={'phone-pad'} placeholder='Password' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10,borderRadius:4 }} value={Password} onChangeText={setPassword} />
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
            <View style={{ marginHorizontal: 30,justifyContent: 'center', marginTop: 50 }}>
                {/* <View style={{ paddingHorizontal: 10 }}> */}
                <Pressable style={{backgroundColor: '#351431', padding: 6,marginVertical:5, borderRadius: 4,textAlign: 'center'}}onPress={submit} ><Text style={{ color: 'white',textAlign: 'center',fontSize:18 }}>Submit</Text></Pressable>
                {/* </View> */}
                {/* <View style={{ paddingHorizontal: 10 }}> */}
                <Pressable style={{backgroundColor: '#351431', padding: 6,marginVertical:5, borderRadius: 4,textAlign: 'center'}} onPress={reset} ><Text style={{ color: 'white',textAlign: 'center',fontSize:18 }}>Reset</Text></Pressable>
                {/* </View> */}
            </View>

        </View>
    )
}

export default LoginPage;
const style = StyleSheet.create({
    inputBok: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 10
    },
    ViewBok: {
        width: '100%',
    }
});