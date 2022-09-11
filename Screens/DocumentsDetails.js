import { View, Text } from 'react-native'
import React from 'react'
import Imagepick from '../Component/imagepick';
import { RNCamera } from 'react-native-camera'
const DocumentsDetails = () => {
    return (
        <View>
            <View style={{ backgroundColor: '#351401', marginHorizontal: 10, marginTop: 10, borderRadius: 5 }}>
                <Text style={{ fontWeight: '400', fontSize: 17, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Proof Details</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Imagepick />
                <Imagepick />
            </View>
            <View>
            <RNCamera
         
        />
                <Imagepick />
            </View>
            
        </View>
    )
}

export default DocumentsDetails