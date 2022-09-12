import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '../Component/checkbok';
import { colors } from '../Component/colors';
import TimeingDropdown from '../Component/TimeingDropdown';
const OperationDetails = ({ navigation }) => {
  function boxunchecked() {
    console.log('fdfdfdfdffdfx')
  }
  function boxchecked() {
    console.log('check done')
  }
  const OpenTime =
    [
      { label: '9:30 AM', value: '9:30 AM' },
      { label: '10:00 AM', value: '10:00 AM' },
      { label: '10:30 AM', value: '10:30 AM' },
      { label: '11:00 AM', value: '11:00 AM' },
      { label: '11:30 AM', value: '11:30 AM' },
      { label: '12:00 PM', value: '12:00 PM' },
      { label: '12:30 PM', value: '12:30 PM' },
      { label: '01:00 PM', value: '01:00 PM' },
      { label: '01:30 PM', value: '01:30 PM' },
      { label: '02:00 PM', value: '02:00 PM' },
      { label: '02:30 PM', value: '02:30 PM' },
      { label: '03:00 PM', value: '03:00 PM' },
      { label: '03:30 PM', value: '03:30 PM' },
      { label: '04:00 PM', value: '04:00 PM' },
      { label: '04:30 PM', value: '04:30 PM' },
      { label: '05:00 PM', value: '05:00 PM' },
      { label: '05:30 PM', value: '05:30 PM' },
      { label: '06:00 PM', value: '06:00 PM' },
      { label: '06:30 PM', value: '06:30 PM' },
      { label: '07:00 PM', value: '07:00 PM' },
    ];
  const CloseTime =
    [
      { label: '9:30 AM', value: '9:30 AM' },
      { label: '10:00 AM', value: '10:00 AM' },
      { label: '10:30 AM', value: '10:30 AM' },
      { label: '11:00 AM', value: '11:00 AM' },
      { label: '11:30 AM', value: '11:30 AM' },
      { label: '12:00 PM', value: '12:00 PM' },
      { label: '12:30 PM', value: '12:30 PM' },
      { label: '01:00 PM', value: '01:00 PM' },
      { label: '01:30 PM', value: '01:30 PM' },
      { label: '02:00 PM', value: '02:00 PM' },
      { label: '02:30 PM', value: '02:30 PM' },
      { label: '03:00 PM', value: '03:00 PM' },
      { label: '03:30 PM', value: '03:30 PM' },
      { label: '04:00 PM', value: '04:00 PM' },
      { label: '04:30 PM', value: '04:30 PM' },
      { label: '05:00 PM', value: '05:00 PM' },
      { label: '05:30 PM', value: '05:30 PM' },
      { label: '06:00 PM', value: '06:00 PM' },
      { label: '06:30 PM', value: '06:30 PM' },
      { label: '07:00 PM', value: '07:00 PM' },
    ];
  const [opening, setopening] = useState("")
  const [closing, setclosing] = useState("")

  return (
    <View>
      <View style={{ backgroundColor: '#351401', marginHorizontal: 10, marginTop: 10, borderRadius: 5 }}>
        <Text style={{ fontWeight: '400', fontSize: 17, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Timeing</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{width:'50%'}}>
          <Text style={{textAlign:'center',marginTop:20,fontWeight:'600',fontSize:19}} >Open</Text>
          <TimeingDropdown bindDataAwardCategory={OpenTime} my_onChangeText={setopening} my_value={opening} />
        </View>
        <View style={{width:'50%'}}>
          <Text style={{textAlign:'center',marginTop:20,fontWeight:'600',fontSize:19}} >Close</Text>
          <TimeingDropdown bindDataAwardCategory={CloseTime} my_onChangeText={setclosing} my_value={closing} />
        </View>
      </View>
      <View style={{ backgroundColor: '#351401', marginHorizontal: 10, marginTop: 10, borderRadius: 5 }}>
        <Text style={{ fontWeight: '400', fontSize: 17, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Holiday</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 1, marginHorizontal: 10 }}>
        <View style={{ backgroundColor: '#351401', marginHorizontal: 0, marginTop: 10, borderRadius: 5, width: '45%' }}>
          <Text style={{ fontWeight: '300', fontSize: 14, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Full day (close)</Text>
        </View>
        {/* <View style={{ borderRightWidth: 1, }}></View> */}
        <View style={{ backgroundColor: '#351401', marginHorizontal: 0, marginTop: 10, borderRadius: 5, width: '45%' }}>
          <Text style={{ fontWeight: '300', fontSize: 14, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Half day (close)</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 0, marginVertical: 20 }}>
        <View style={styles.fulldayclose}>
          <CheckBox boxunchecked={boxunchecked} title='Monday' />
          <CheckBox boxunchecked={boxunchecked} title='Tuesday' />
          <CheckBox boxunchecked={boxunchecked} title='Wednesday' />
          <CheckBox boxunchecked={boxunchecked} title='Thursday' />
          <CheckBox boxunchecked={boxunchecked} title='Friday' />
          <CheckBox boxunchecked={boxunchecked} title='Saturday' />
          <CheckBox boxunchecked={boxunchecked} title='Sunday' />
        </View>
        <View style={{ borderRightWidth: 1, }}></View>
        <View style={styles.halfdayclose}>
          <CheckBox boxunchecked={boxunchecked} title='Monday' />
          <CheckBox boxunchecked={boxunchecked} title='Tuesday' />
          <CheckBox boxunchecked={boxunchecked} title='Wednesday' />
          <CheckBox boxunchecked={boxunchecked} title='Thursday' />
          <CheckBox boxunchecked={boxunchecked} title='Friday' />
          <CheckBox boxunchecked={boxunchecked} title='Saturday' />
          <CheckBox boxunchecked={boxunchecked} title='Sunday' />
        </View>
      </View>
      <View style={{ backgroundColor: '#351401', marginHorizontal: 10, marginTop: 10, borderRadius: 5 }}>
        <Text style={{ fontWeight: '400', fontSize: 17, marginTop: 0, padding: 10, textAlign: 'center', color: 'white' }}>Operationg Modes</Text>
      </View>
      <View style={{ marginHorizontal: 30, marginVertical: 5 }}>
        <CheckBox boxunchecked={boxunchecked} title='Online' />
      </View>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 15 }}>
        <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
          <Pressable onPress={() => navigation.navigate('AddressDetails')} style={{ backgroundColor: colors.colors.headColor, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Previous </Text></Pressable>
        </View>
        <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 0, width: '30%' }}>
          <Pressable onPress={() => navigation.navigate('DocumentsDetails')} style={{ backgroundColor: colors.colors.headColor, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}  ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Next </Text></Pressable>
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
