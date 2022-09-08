import { View, Text, Modal, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
import Table from '../Component/table'
import React, { useState, useEffect } from 'react';
import axios from "axios";
const AdminPanal = ({ route, navigation }) => {
  const { UserId } = route.params;
  // const { password } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

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
  if (editReload) {
    loadPageData();
  }


  useEffect(() => {
    loadPageData();
  }, []);
  function loadPageData() {
    try {
      axios.get(`http://192.168.185.78:3000/api/getAll-form1Data`, {
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
    // window.alert(val);
    Alert.alert(
      "Edit !",
      "do you want to edit " + val,
      [
        {
          text: "Cancel",
          onPress: () => console.log(""),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => navigation.navigate('form1',
            {
              edit_id: val
            }
          )
        }
      ]
    );

  }

  function cellcheck() {
    // window.alert("alert item write in admin panal");
    setModalVisible(true);
  }



  function deleteFormData(val) {
    // console.log(val);
    Alert.alert(
      "Delete !",
      "Do you want to delete!",
      [
        {
          text: "Cancel",
          onPress: () => console.log(""),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => axios.delete(`http://192.168.185.78:3000/api/delete-Form1Data/` + val, {
          })
            .then(res => {
              // debugger;
              Alert.alert(
                val,
                "Delete Done",
                [
                  { text: "OK", onPress: () => console.log("Data Delete") }
                ]
              );


            })
            .catch(e => {
              console.log(`delete error ${e}`);
            })
        }
      ]
    );
    // try {

    // }
    // catch (e) {
    //   console.log(`getAll-form1Data error ${e}`);
    // }
  }
  // function clickPopupOpen(){
  //   window.alert("Click Popup Open")
  // };
  // function clickPopupClose(){
  //   window.alert("click Popup Close")
  // };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <View>
          <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 30, marginHorizontal: 20 }} >Admin Panal</Text>
        </View>
        <View>
          <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 30, marginHorizontal: 20 }}>{UserId}</Text>
        </View>
      </View>
      <Table
        deleteFormData={deleteFormData}
        editFormData={editFormData}
        click={cellcheck}

        tableHead={tableData.tableHead} tableData={tableData.tableData} />

      <View style={{ flex: 1 }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.centeredView}>
              <View style={styles.popup}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 5, marginHorizontal: 20 }}>Award Category :</Text>
                  <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 5, marginHorizontal: 20 }}>{UserId}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 5, marginHorizontal: 20 }}>Applicant Name :</Text>
                  <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 5, marginHorizontal: 20 }}>{UserId}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 5, marginHorizontal: 20 }}>Certificate No :</Text>
                  <Text style={{ fontWeight: '400', fontSize: 18, marginTop: 5, marginHorizontal: 20 }}>{UserId}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        </Modal>
      </View>


    </ScrollView >
  )
}

export default AdminPanal;
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: 'center',
    height: '100%',
  },
  popup: {
    height: '80%', width: '80%', backgroundColor: 'green', justifyContent: "center",
    alignItems: 'center', borderRadius: 20
  }

});