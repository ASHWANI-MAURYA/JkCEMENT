import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Dropdown from '../Component/dropdown';
import axios from "axios";
const Form1 = ({ }) => {
    const [NameApplicant, setNameApplicant] = useState("");
    const [CertificateNumber, setCertificateNumber] = useState("");
    const [dataAwardCategorySelectionId, setdataAwardCategorySelectionId] = useState(null);
    let [isValidAwardCategory, setIsValidAwardCategory] = useState(null);
    let [isNameisValidate, setIsNameisValidate] = useState(null);
    let [IsCertificatenumber, setIsCertificatenumber] = useState(null);
    // Declare a new state variable, which we'll call "count"
    const [dataAwardCategory] = useState(function () {
        //Call API
        let api_data = [
            { label: 'Item 1', value: '1' },
            { label: 'Item 2', value: '2' },
        ];
        return api_data;
    });



    function funcClearData() {
        setNameApplicant("");
        setCertificateNumber("");
        setdataAwardCategorySelectionId(null);
    };
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
                dataAwardCategorySelectionId : dataAwardCategorySelectionId.label,
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
        <View>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>Form(1) "Indian Architecture Award & Indian State Architecture Awards"</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10 }}>
                <View style={style.ViewBok}>
                    <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 30 }}>Award category</Text>
                    <Text style={{ fontWeight: '500', fontSize: 20, marginTop: 20 }}>Applicant's Details</Text>
                    <Text style={{ fontWeight: '300', fontSize: 20 }}>a.) Name of the Architect (applicant) to be considered for Award</Text>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{ fontWeight: '300', fontSize: 20 }}>b.) Council of architechture or equivalent body Certificate number </Text>
                    </View>
                </View>
                <View style={style.ViewBok}>
                    <View>
                        <Dropdown bindDataAwardCategory={dataAwardCategory} my_value={dataAwardCategorySelectionId} my_onChangeText={setdataAwardCategorySelectionId} />
                        <View>
                            <Text style={{ fontWeight: '300', fontSize: 15, color: "red" }}>
                                {
                                    isValidAwardCategory == "false"
                                        ? "Award Category selection is required!"
                                        : ""
                                }
                            </Text>
                        </View>
                        <TextInput placeholder='Name of the Architect (applicant) to be considered for Award' style={{ borderWidth: 1, borderColor: 'black', marginTop: 20, padding: 10 }} value={NameApplicant} onChangeText={setNameApplicant} />
                        <View>
                            <Text style={{ fontWeight: '300', fontSize: 15, color: "red" }}>
                                {
                                    isNameisValidate == "false"
                                        ? "Name is Required*"
                                        : ""
                                }
                            </Text>
                        </View>
                        <TextInput placeholder='Council of architechture or equivalent body Certificate number' style={{ borderWidth: 1, borderColor: 'black', marginTop: 30, padding: 10 }} onChangeText={setCertificateNumber} value={CertificateNumber} />
                        <Text style={{ fontWeight: '300', fontSize: 15, color: "red" }}>
                            {
                                IsCertificatenumber == "false"
                                    ? "Certificate number is Required*"
                                    : ""
                            }
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Button title='Clear' onPress={funcClearData} />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Button title='Submit' onPress={funcSubmitData} />
                </View>
            </View>

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
        width: '50%',
    }
});