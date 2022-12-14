import { View, Text, Modal,Button,Pressable,StyleSheet } from 'react-native'
import React from 'react'

const modal = () => {
  return (
    <View>
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
                {/* <Text style={{ fontWeight: '500', marginTop: 3, fontSize: 16 }}>Award category</Text> */}
                <Text style={{ marginTop: 10 }}>{props.tableHead} </Text>
                {/* <Text style={{ fontWeight: '500', marginTop: 10, fontSize: 16 }}>Applicant Name</Text> */}
                <Text style={{ marginTop: 10 }}>{props.tableHead} </Text>
                {/* <Text style={{ fontWeight: '500', marginTop: 10, fontSize: 16 }}>Certificate No.</Text> */}
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
    </View>
  )
}

export default modal
const style=StyleSheet.create({
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
})