import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, View, Platform, Text,TouchableOpacity } from 'react-native';
export default function GalleryComponenet() {
	const [image, setImage] = useState(null);
	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== 'granted') {
					alert('Sorry, Camera roll permissions are required to make this work!');
				}
			}
		})();
	}, []);
	const chooseImg = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			aspect: [4, 3],
			quality: 1,
			allowsEditing: true,
		});
		console.log(result);
		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	return (
		<View >
			<TouchableOpacity onPress={chooseImg} style={{marginTop:10}}	>
				<View  style={{borderWidth:1,borderColor:'black',borderStyle:'dashed',width:80, alignItems:"center",padding:2}}>
				{!image && <><Text>H.N</Text>
				<Text>+Add logo</Text></>}
				{image && <Image source={{ uri: image }} style={{ width: 80, height:80, }} />}
				</View>
			</TouchableOpacity>
			
		</View>
	);
}