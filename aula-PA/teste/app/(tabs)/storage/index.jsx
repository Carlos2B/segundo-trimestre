import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { Link } from 'expo-router'

export default function App(){

return(
    <View style={style.background}>
        <View style={style.header}>Memórias</View>
        <Link href={'http://localhost:8081/add'}><Text>Adicionar Memória</Text></Link>
    </View>
)

}

const style = StyleSheet.create({

background:{

},

header:{

}

})