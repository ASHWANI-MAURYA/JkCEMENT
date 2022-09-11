import { View, Text, StyleSheet, TextInput, Pressable,ScrollView } from 'react-native'
import React from 'react'

const PersonalInformation = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 20 }}>
                <View style={style.ViewBok}>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ fontWeight: '400', fontSize: 20 }}>Email</Text>
                        <TextInput placeholder='Email' keyboardType={'email-address'} style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                        {/* <Text style={{ fontWeight: '400', fontSize: 15, color: 'red' }}>
                            {
                                isEmail == "false"
                                    ? "email is Required*"
                                    : ''
                            }
                        </Text> */}
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>Mobile No</Text>
                        <TextInput secureTextEntry={true} keyboardType={'phone-pad'} placeholder='Mobile No' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>Alter Mobile No</Text>
                        <TextInput secureTextEntry={true} keyboardType={'phone-pad'} placeholder='Alter Mobile No' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
                    <Pressable onPress={() => navigation.navigate('EducationRegistration')} style={{ backgroundColor: '#351431', padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Previous </Text></Pressable>
                </View>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
                    <Pressable onPress={() => navigation.navigate('AddressDetails')} style={{ backgroundColor: '#351431', padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Next </Text></Pressable>
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