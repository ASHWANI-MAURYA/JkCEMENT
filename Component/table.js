import React, { useState, useImperativeHandle, forwardRef  } from 'react';
import { StyleSheet, View, Pressable, Modal, Text, Button,TouchableOpacity } from 'react-native';
import { Table, Row, Rows,TableWrapper,Cell } from 'react-native-table-component';
function table(props,ref) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const element = (data, index) => (
	<>
	<View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:10}}>
	<TouchableOpacity onPress={() => clickeditFormData(data)} >
	  <View style={styles.btn}>
		<Text style={styles.btnText}>Edit</Text>
	  </View>
	</TouchableOpacity>
	<TouchableOpacity onPress={() => clickDeleteData(data)}>
	  <View style={styles.deletebtn}>
		<Text style={styles.btnText}>Delete</Text>
	  </View>
	</TouchableOpacity>
	</View>
	</>
	
  );
  function clickDeleteData(val) {
    // window.alert(`ID : ${val}`);
    props.deleteFormData(val);
  }

  function clickeditFormData(val) {
    // window.alert(`ID : ${val}`);
    props.editFormData(val);
  }

  

  return (
    <View style={styles.container}>
	
      {/* <Pressable onPress={() => setModalVisible(false)}> */}
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>

		<Row data={props.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            props.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex+1 === rowData.length ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
			
                }
				
              </TableWrapper>
            ))
          }


          {/* <Row data={props.tableHead} style={styles.head} textStyle={styles.text} /> */}
          {/* <Pressable onPress={() => setModalVisible(true)}> */}
            {/* <Rows data={props.tableData} textStyle={styles.datatext} /> */}
          {/* </Pressable> */}
        </Table>


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>View Details</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}

              >
                <View>
                  <Text style={{ fontWeight: '500', marginTop: 3, fontSize: 16 }}>Award category</Text>
                  <Text style={{ marginTop: 10 }}>{props.tableHead} </Text>
                  <Text style={{ fontWeight: '500', marginTop: 10, fontSize: 16 }}>Applicant Name</Text>
                  <Text style={{ marginTop: 10 }}>{props.tableHead} </Text>
                  <Text style={{ fontWeight: '500', marginTop: 10, fontSize: 16 }}>Certificate No.</Text>
                  <Text style={{ marginTop: 10 }}>{props.tableHead} </Text>
                </View>
              </Pressable>
              <View style={{ justifyContent: 'center', marginTop: 10 }}>
                <View style={{ marginVertical: 5 }}>
                  <Button title='Update' />
                </View>
                <View style={{ marginVertical: 5 }}>
                  <Button title='Delete' />
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      {/* </Pressable> */}
    </View>
  )

}
export default table;
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'green' },
  text: { margin: 6, color: 'black' },
  datatext: { margin: 6, color: 'black' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    // borderRadius: 20,
    padding: 10,
    // elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 0,
    justifyContent: 'flex-start',
    fontWeight: '500',
    fontSize: 18,
  },
  btn: { width: 58, height: 'auto', backgroundColor: '#78B7BB', padding:5,  borderRadius: 2 },
  deletebtn: { width: 58, height: 'auto', backgroundColor: '#FF4500', padding:5,  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});