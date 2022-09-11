import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
				<View>
				{!image && <>
				<Icon name='camera' size={60} color={'#cccccc'} /></>}
				{image && <Image source={{ uri: image }} style={{ width: 130, height:130, }} />}
				</View>
			</TouchableOpacity>
			
		</View>
	);
}