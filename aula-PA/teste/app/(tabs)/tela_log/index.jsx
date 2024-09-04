import React, {useState} from "react";
import {View, Pressable, StyleSheet, TextInput, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingLeft: 50,
        marginTop: '150px'
    },

    text:{
        textAlign: 'center',
        fontSize: '14px',
        color: 'white'
    },

    input: {
        width:'270px',
        flex: 1,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
    },

    button:{
        backgroundColor: 'black',
        width: '250px',
        marginTop: '15px',
        marginLeft: "10px",
        border: '2px solid', 
        borderColor:'black',
        borderRadius: 16,
    }
});

export default SingUp =  () => {
    const [formData, setFormdata] = useState({
        name:'',
        email:'',
        password:'',
    });
     
const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Todos os campos devem ser preenchidos");
    }
    try {
      const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(response == 200){
        alert("Usuario cadastrado com sucesso!")
      }
      else{
        alert("Usuario ja cadastrado!")
      }
    } catch (error) {
      console.error(error);
    }
  };

    return(
<View style={styles.container}>
        <Text>Nome</Text>
        <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={formData.name}
                    onChangeText={(text) => setFormdata({ ...formData, name: text})}
                />
               
               
        <Text>Email</Text>
        <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={(text) => setFormdata({ ...formData, email:text})}
                />
               
        <Text>Password</Text>
        <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={FormData.password}
                    onChangeText={(text) => setFormdata({ ...formData, password:text})}
                />

        <Pressable style={styles.button} onPress={ () => handleSubmit() }><Text style={styles.text}>Sing Up</Text></Pressable>

</View>
    )
}