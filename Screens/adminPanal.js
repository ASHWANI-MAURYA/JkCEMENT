import { View, Text } from 'react-native'
import Table from '../Component/table'
import React from 'react'

const adminPanal = () => {
  return (
    <View style={{}}>
      <View style={{ justifyContent: 'space-between',flexDirection:'row' }}>
        <View>
        <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 30, marginHorizontal: 20 }}>AdminPanal</Text>
        </View>
        <View>
        <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 30, marginHorizontal: 20 }}>userName & Id</Text>
        </View>
      </View>
      <Table />
    </View>
  )
}

export default adminPanal