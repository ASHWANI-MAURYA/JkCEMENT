import { View, Text, Button } from 'react-native'
import Table from '../Component/table'
import React, { useState,useEffect } from 'react';
import axios from "axios";

const AdminPanal = ({ route, navigation }) => {
  // const { UserId } = route.params;
  // const { password } = route.params;

  const [tableData, setTableData] = useState({
    tableHead: [],
    tableData: []

  });

  // tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
  // tableData: [
  //   ['1', '2', '3', '4'],
  //   ['a', 'b', 'c', 'd'],
  //   ['1', '2', '3', '4'],
  //   ['a', 'b', 'c', 'd']
  // ]

  // delete by id
  let editReload = route.params ? route.params.editReload : null;
  if(editReload)
  {
    loadPageData();
  }
  useEffect(() => {
    loadPageData();
  }, []);
  function loadPageData(){
    try {
      axios.get(`http://localhost:3000/api/getAll-form1Data`, {
      })
        .then(res => {
          // debugger;
          setTableData(res.data);
          // console.log(res.data);
          // console.log(route.params);

        })
        .catch(e => {
          console.log(`getAll-form1Data error ${e}`);
        });
    }
    catch (e) {
      console.log(`getAll-form1Data error ${e}`);
    }
  }
  function editFormData(val) {
    window.alert(val); 
    navigation.navigate('form1',
      {
        edit_id: val
      }
    );
  }
  function deleteFormData(val) {
    console.log(val);
    try {
      axios.delete(`http://localhost:3000/api/delete-Form1Data/` + val, {
      })
        .then(res => {
          debugger;
          window.alert(res.data.Message);

        })
        .catch(e => {
          console.log(`delete error ${e}`);
        });
    }
    catch (e) {
      console.log(`getAll-form1Data error ${e}`);
    }
  }

  return (
    <View style={{}}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <View>
          <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 30, marginHorizontal: 20 }} >Admin Panal</Text>
        </View>
        <View>
          {/* <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 30, marginHorizontal: 20 }}>{UserId}</Text> */}
        </View>
      </View>
      <Table
        deleteFormData={deleteFormData}
        editFormData={editFormData}
        tableHead={tableData.tableHead} tableData={tableData.tableData} />

    </View>
  )
}

export default AdminPanal
