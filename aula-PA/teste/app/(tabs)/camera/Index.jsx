import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    textperm: {
        textAlign: 'center'
    },

    camera: {
        flex: 1
    },

    foto: {
        width: 650,
        height: 650
    }
})

export default function camera() {

    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [lado, setLado] = useState('back')


    if (!permissao) {
        return <View></View>
    }


    if (!permissao.granted) {
        return <View style={style.container}>
            <Text style={style.textperm}>Você aceita que a camera seja usada??</Text>
            <Button title="Aceitar permissão" onPress={pedirPermissao} />
        </View>
    }

    const tirarFoto = async () => {
        const fotoBase64 = await cameraRef.current?.takePictureAsync({
            quality: 1,
            base64: true
        })
        setFoto(fotoBase64)
    }

    const trocaCamera = () => {
        setLado(lado == 'back' ? 'front' : 'back')
    }

    const salvarFoto = () => {
        MediaLibrary.saveToLibraryAsync(foto.uri);
        setFoto(null);
    };

    const qCode = async (data) => {
        setCode(data)
    };

    return (
        <View style={style.container}>
            {foto ?
                <View>
                    <Image source={{ uri: foto.uri }} style={style.foto} />
                    <Button onPress={() => setFoto(null)} title="Limpar foto" />
                    <Button onPress={salvarFoto} title="Salvar foto" />
                </View> :
                <CameraView facing={lado} style={style.camera} ref={cameraRef}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                    }}
                    onBarcodeScanned={(data) => qCode(data)}>

                    <Button title="Tirar foto" onPress={tirarFoto} />
                    <Button title="Troca de camera" onPress={trocaCamera} />

                </CameraView>
            }
        </View>
    )
}