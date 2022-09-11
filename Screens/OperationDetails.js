import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'
import CheckBox from '../Component/checkbok'

const OperationDetails = ({navigation}) => {
  function boxunchecked() {
    console.log('fdfdfdfdffdfx')
  }
  function boxchecked() {
    console.log('check done')
  }

  return (
    <View>
      <View style={{ backgroundColor: '#351401', marginHorizontal: 10, marginTop: 10, borderRadius: 5 }}>
        <Text style={{ fontWeight: '400', fontSize: 17, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Holiday</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 1, marginHorizontal: 10 }}>
        <View style={{ backgroundColor: '#351401', marginHorizontal: 0, marginTop: 10, borderRadius: 5, width: '45%' }}>
          <Text style={{ fontWeight: '300', fontSize: 14, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>full day (close)</Text>
        </View>
        {/* <View style={{ borderRightWidth: 1, }}></View> */}
        <View style={{ backgroundColor: '#351401', marginHorizontal: 0, marginTop: 10, borderRadius: 5, width: '45%' }}>
          <Text style={{ fontWeight: '300', fontSize: 14, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>half day (close)</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 0, marginVertical: 20 }}>
        <View style={styles.fulldayclose}>
          <CheckBox boxunchecked={boxunchecked} title='monday' />
          <CheckBox boxunchecked={boxunchecked} title='tuesday' />
          <CheckBox boxunchecked={boxunchecked} title='wednesday' />
          <CheckBox boxunchecked={boxunchecked} title='thursday' />
          <CheckBox boxunchecked={boxunchecked} title='friday' />
          <CheckBox boxunchecked={boxunchecked} title='saturday' />
          <CheckBox boxunchecked={boxunchecked} title='sunday' />
        </View>
        <View style={{ borderRightWidth: 1, }}></View>
        <View style={styles.halfdayclose}>
          <CheckBox boxunchecked={boxunchecked} title='monday' />
          <CheckBox boxunchecked={boxunchecked} title='tuesday' />
          <CheckBox boxunchecked={boxunchecked} title='wednesday' />
          <CheckBox boxunchecked={boxunchecked} title='thursday' />
          <CheckBox boxunchecked={boxunchecked} title='friday' />
          <CheckBox boxunchecked={boxunchecked} title='saturday' />
          <CheckBox boxunchecked={boxunchecked} title='sunday' />
        </View>
      </View>
      <View style={{ backgroundColor: '#351401', marginHorizontal: 10, marginTop: 10, borderRadius: 5 }}>
        <Text style={{ fontWeight: '400', fontSize: 17, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Operationg Modes</Text>
      </View>
      <View style={{marginHorizontal: 30, marginVertical: 5 }}>
          <CheckBox boxunchecked={boxunchecked} title='Online' />
      </View>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
                    <Pressable onPress={() => navigation.navigate('AddressDetails')} style={{ backgroundColor: '#351431', padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Previous </Text></Pressable>
                </View>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
                    <Pressable onPress={() => navigation.navigate('DocumentsDetails')} style={{ backgroundColor: '#351431', padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Next </Text></Pressable>
                </View>
            </View>
    </View>
        
    
  )
}

export default OperationDetails;
const styles = StyleSheet.create({
  fulldayclose: {
    // borderRightWidth:1,
    // borderWidth:1

  },
  halfdayclose: {
    // borderWidth:1
  }
})
