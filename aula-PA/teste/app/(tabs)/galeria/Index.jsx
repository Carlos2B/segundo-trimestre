import { useState } from "react";
import {Button, Image, View, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Link} from 'react-native'

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
            <Button title="Escolher a imagem" onPress={pickImage} style={style.button}/>
            <Text>Tirar uma Foto ?</Text>
            <Link href={'http://localhost:8081/camera'}>Tirar Foto</Link>
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