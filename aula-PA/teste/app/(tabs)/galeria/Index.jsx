import { useState } from "react";
import {Button, Image, View, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExmple() {

    const [image, setImage] = useState('');

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if(!result.canceled){
            setImage(result.assets[0].uri);
        }
    }

    return(
        <View style={style.container}>
            <Button title="Pick an imagefrom camera roll" onPress={pickImage} style={style.button}/>
            {image && <Image source={{uri: image}} style={style.image}/>}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        paddingTop: 300,
        alignItems: 'center'
    },

    button:{

    },

    image:{

    }

})