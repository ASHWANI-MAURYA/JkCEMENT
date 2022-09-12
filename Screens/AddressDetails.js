import { View, Text, StyleSheet, TextInput, Pressable,ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../Component/colors'

const PersonalInformation = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10 }}>
                <View style={style.ViewBok}>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>City</Text>
                        <TextInput secureTextEntry={true} keyboardType={'default'} placeholder='City' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>State</Text>
                        <TextInput secureTextEntry={true} keyboardType={'default'} placeholder='State' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>Address</Text>
                        <TextInput secureTextEntry={true} keyboardType={'default'} placeholder='Address' multiline={true} numberOfLines={4}  style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4,textAlignVertical: 'top' }} />
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>Landmark</Text>
                        <TextInput secureTextEntry={true} keyboardType={'default'} placeholder='Landmark' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5 }}>Postal Code</Text>
                        <TextInput secureTextEntry={true} keyboardType={'phone-pad'} maxLength={6} placeholder='Postal Code' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 10, width: '30%' }}>
                    <Pressable onPress={() => navigation.navigate('PersonalInformation')} style={{ backgroundColor:colors.colors.headColor, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center'  }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Previous </Text></Pressable>
                </View>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 10, width: '30%' }}>
                    <Pressable onPress={() => navigation.navigate('OperationDetails')} style={{ backgroundColor:colors.colors.headColor, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Next </Text></Pressable>
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