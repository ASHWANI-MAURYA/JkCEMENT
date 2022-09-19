import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Alert } from 'react-native'
import { colors } from '../Component/colors';
import axios from "axios";

const PersonalInformation = ({ navigation }) => {
    const [Email, setEmail] = useState();
    const [AltEmail, SetAltEmail] = useState();
    const [Mobile, setMobile] = useState();
    const [] = useState();
    function funcSubmitData() {
        //Validation.....
        //#region This Code is used for validation perpose only

        try {
            //Save Data by api
            axios.post(`
            http://192.168.47.78:3000/api/post-form1-data`, {
                Email: Email,
                AltEmail: AltEmail,
                Mobile: Mobile
            })
                .then(res => {
                    debugger;
                    let userInfo = res.data;
                    Alert.alert(
                        "Form (1)",
                        userInfo.Message,
                        [

                            { text: "OK", }
                        ]
                    );
                    navigation.navigate('AddressDetails')

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
        <ScrollView>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 20 }}>
                <View style={style.ViewBok}>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ fontWeight: '400', fontSize: 20 }}>Email</Text>
                        <TextInput placeholder='Email' keyboardType={'email-address'} value={Email} onChangeText={setEmail} style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                        {/* <Text style={{ fontWeight: '400', fontSize: 15, color: 'red' }}>
                            {
                                isEmail == "false"
                                    ? "email is Required*"
                                    : ''
                            }
                        </Text> */}
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>Alter Email No</Text>
                        <TextInput placeholder='Alter Email No' value={AltEmail} onChangeText={SetAltEmail} style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>Mobile No</Text>
                        <TextInput placeholder='Mobile No' value={Mobile} onChangeText={setMobile} style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
                    <Pressable onPress={() => navigation.navigate('EducationRegistration',
                        {
                            edit_id: val
                        }
                    )} style={{ backgroundColor: colors.colors.headColor, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Previous </Text></Pressable>
                </View>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
                    <Pressable onPress={funcSubmitData} style={{ backgroundColor: colors.colors.headColor, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Next </Text></Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default PersonalInformation
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