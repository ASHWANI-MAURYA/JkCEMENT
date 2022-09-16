import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Dropdown from '../Component/dropdown';
import Imagepick from '../Component/imagepick';
import { colors } from '../Component/colors'
// import { RNCamera } from 'react-native-camera'
const DocumentsDetails = ({ navigation }) => {
    const idProof =
        [
            { label: 'Adhar Card', value: 'Adhar Card' },
            { label: 'Pan Card', value: 'Pan Card' },
            { label: 'Driving Licence', value: 'Driving Licence' },
        ];
    const [dataAwardCategorySelectionId, setdataAwardCategorySelectionId] = useState("")
    function submitform() {
        console.log(dataAwardCategorySelectionId.value);
    }
    return (
        <ScrollView>

            <View style={{ backgroundColor: '#351401', marginHorizontal: 10, marginTop: 10, borderRadius: 5 }}>
                <Text style={{ fontWeight: '400', fontSize: 17, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Proof Details</Text>
            </View>
            <Text style={{ marginHorizontal: 20, marginTop: 15, borderRadius: 5, fontSize: 18 }}>Select Id Type</Text>
            <Dropdown bindDataAwardCategory={idProof} my_onChangeText={setdataAwardCategorySelectionId} my_value={dataAwardCategorySelectionId} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Imagepick />
            </View>
            <Text style={{ textAlign: 'center', marginVertical: 10, fontWeight: '400', fontSize: 18 }}>{dataAwardCategorySelectionId.value}</Text>
            {/* <Dropdown bindDataAwardCategory={dataAwardCategory} /> */}
            <Text style={{ marginHorizontal: 20, marginTop: 15, borderRadius: 5, fontSize: 18 }}>Select Profile</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
                <Imagepick />
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 20, marginVertical: 20 }}>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
                    <Pressable onPress={() => navigation.navigate('OperationDetails')} style={{ backgroundColor: colors.colors.headColor, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Previous </Text></Pressable>
                </View>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
                    <Pressable onPress={
                        // () => navigation.navigate('PackageSelection')
                        submitform
                    } style={{ backgroundColor: colors.colors.headColor, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Next </Text></Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default DocumentsDetails