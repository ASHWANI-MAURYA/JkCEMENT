import { View, Text, TextInput, StyleSheet, Alert, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState, useFocusEffect } from 'react'
import Dropdown from '../Component/dropdown';
import axios from "axios";
const Form1 = ({ route, props, navigation }) => {
    const [NameApplicant, setNameApplicant] = useState("");
    const [CertificateNumber, setCertificateNumber] = useState("");
    const [dataAwardCategorySelectionId, setdataAwardCategorySelectionId] = useState(null);
    let [isValidAwardCategory, setIsValidAwardCategory] = useState(null);
    let [isNameisValidate, setIsNameisValidate] = useState(null);
    let [IsCertificatenumber, setIsCertificatenumber] = useState(null);
    let edit_id = route.params ? route.params.edit_id : null;

    useEffect(() => {
        if (edit_id) {

            try {
                //get  Data by api
                axios.get(`http://localhost:3000/api/getById-form1Data/` + edit_id, {
                })
                    .then(res => {
                        // debugger;
                        // console.log(res.data);
                        if (res.data) {
                            setNameApplicant(res.data.NameApplicant);
                            setCertificateNumber(res.data.CertificateNumber);
                            setdataAwardCategorySelectionId(res.data.dataAwardCategorySelectionId);
                        }

                    })
                    .catch(e => {
                        console.log(`post error ${e}`);
                    });
            }
            catch (error) {
                console.log(error.message);
            }
        }
    }, [edit_id]);
    // window.alert(edit_id);
    // Declare a new state variable, which we'll call "count"
    const [dataAwardCategory] = useState(function () {
        //Call API
        let api_data = [
            { label: 'Item 1', value: 'Item 1' },
            { label: 'Item 2', value: 'Item 2' },
        ];
        return api_data;
    });



    function funcClearData() {
        setNameApplicant("");
        setCertificateNumber("");
        setdataAwardCategorySelectionId("2");
    };
    function funcUpdateData() {
        if (!dataAwardCategorySelectionId || dataAwardCategorySelectionId.value == "") {
            setIsValidAwardCategory("false");
            return;
        }
        else {
            setIsValidAwardCategory("");
        }

        if (NameApplicant == "") {
            setIsNameisValidate("false");
            return;
        }
        else {
            setIsNameisValidate("");
        }
        if (CertificateNumber == "") {
            setIsCertificatenumber("false");
            return;
        }
        else {
            setIsCertificatenumber("");
        }

        // window.alert("This is Update Data alert");
        //  console.log(edit_id._id);
        //  window.alert(edit_id);
        // navigation.navigate('AdminPanal');
        //Save Data by api
        // debugger;
        axios.patch(`http://localhost:3000/api/post-form1UpdateData/`, {
            _id: edit_id,
            dataAwardCategorySelectionId: dataAwardCategorySelectionId.label,
            NameApplicant: NameApplicant,
            CertificateNumber: CertificateNumber
        })
            .then(res => {
                console.log(res.data);
                window.alert(res.data.Message);
                navigation.navigate('AdminPanal', { editReload: true });
                // debugger;
                // let userInfo = res.data.Mesage;
                // Alert.alert(userInfo);
                // window.alert(userInfo);
            })
            .catch(e => {
                console.log(`post error ${e}`);
            });

    }
    function funcSubmitData() {
        //Validation.....
        //#region This Code is used for validation perpose only
        if (!dataAwardCategorySelectionId || dataAwardCategorySelectionId.value == "") {
            setIsValidAwardCategory("false");
            return;
        }
        else {
            setIsValidAwardCategory("");
        }

        if (NameApplicant == "") {
            setIsNameisValidate("false");
            return;
        }
        else {
            setIsNameisValidate("");
        }
        if (CertificateNumber == "") {
            setIsCertificatenumber("false");
            return;
        }
        else {
            setIsCertificatenumber("");
        }
        //#endregion
        //End Validation
        //debugger;
        try {
            //Save Data by api
            axios.post(`http://localhost:3000/api/post-form1-data`, {
                dataAwardCategorySelectionId: dataAwardCategorySelectionId.label,
                NameApplicant: NameApplicant,
                CertificateNumber: CertificateNumber
            })
                .then(res => {
                    //debugger;
                    let userInfo = res.data;
                    Alert.alert(userInfo.Message);
                    window.alert(userInfo.Message);
                })
                .catch(e => {
                    console.log(`post error ${e}`);
                });
        }
        catch (error) {
            console.log(error.message);
        }

    };
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ marginBottom: 10 }}>
                <Text style={{ textAlign: 'center', marginTop: 10, marginHorizontal: 10,fontSize:16 }}>Form(1) "Indian Architecture Award & Indian State Architecture Awards"</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 5 }}>
                    <View style={style.ViewBok}>
                        <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 10 }}>Award category</Text>
                        <Dropdown bindDataAwardCategory={dataAwardCategory} my_value={dataAwardCategorySelectionId} my_onChangeText={setdataAwardCategorySelectionId} />
                        <Text style={{ fontWeight: '300', fontSize: 15, color: "red" }}>
                            {
                                isValidAwardCategory == "false"
                                    ? "Award Category selection is required!"
                                    : ""
                            }
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 20, marginTop: 5 }}>Applicant's Details</Text>
                        <Text style={{ fontWeight: '300', margin: 16 }}>a.) Name of the Architect (applicant) to be considered for Award</Text>
                        <TextInput placeholder='Name of the Architect (applicant) to be considered for Award' style={{ borderRadius: 4, borderWidth: 1, borderColor: 'black', padding: 10 }} value={NameApplicant} onChangeText={setNameApplicant} maxLength={20} />
                        <View>
                            <Text style={{ fontWeight: '300', fontSize: 15, color: "red" }}>
                                {
                                    isNameisValidate == "false"
                                        ? "Name is Required*"
                                        : ""
                                }
                            </Text>
                        </View>
                        <Text style={{ fontWeight: '300', margin: 16 }}>b.) Council of architechture or equivalent body Certificate number </Text>
                        <TextInput placeholder='Council of architechture or equivalent body Certificate number' style={{ borderRadius: 4, borderWidth: 1, borderColor: 'black', padding: 10 }} onChangeText={setCertificateNumber} value={CertificateNumber} maxLength={20} />
                        <Text style={{ fontWeight: '300', fontSize: 15, color: "red" }}>
                            {
                                IsCertificatenumber == "false"
                                    ? "Certificate number is Required*"
                                    : ""
                            }
                        </Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 20 }}>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Pressable style={{ backgroundColor: '#351431', padding: 6, borderRadius: 4, width: "auto", textAlign: 'center' }} onPress={funcClearData}><Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Clear</Text></Pressable>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Pressable style={{ backgroundColor: '#351431', padding: 6, borderRadius: 4, width: "auto", textAlign: 'center' }} onPress={edit_id ? funcUpdateData : funcSubmitData}><Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>{edit_id ? 'Update' : 'Submit'}</Text></Pressable>
                    </View>
                </View>
                <View style={{ marginHorizontal: 30, justifyContent: 'center', marginTop: 20 }}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Pressable style={{ backgroundColor: '#351431', padding: 6, borderRadius: 4, width: "auto" }} onPress={() => navigation.navigate('LoginPage')} ><Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>login</Text></Pressable>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default Form1;
const style = StyleSheet.create({
    inputBok: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 10
    },
    ViewBok: {
        // flexDirection: 'row',
        width: '100%',
    }
});