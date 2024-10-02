import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image, } from 'react-native';

const style = StyleSheet.create({
    background: {

    },

    header: {
        backgroundColor: 'red'
    },

    titulo:{
        color: 'white'
    },

    carrinho: {
        
    },

    img: {

    },

    textcar: {

    },

    container: {

    },

    efeito: {
        backgroundColor: 'gray',
        height: 80
    },

    item: {
        backgroundColor: 'white',
        borderRadius: 12
    },

    imgP: {

    },

    description: {

    },

    nomeProduto: {

    },

    descricao: {

    },

    botao: {

    },

    value: {

    }

})

export default function Ifome() {

    return (
        <View style={style.background}>

            <View style={style.header}>
                <Text style={style.titulo}>Ifome</Text>
            </View>

            <View style={style.carrinho}>
                <Image source={{ uri: '' }}
                    style={style.img} />
                <Text style={style.textcar}>Itens</Text>

            </View>

            <View style={style.container}>

                <View style={style.efeito}>
                    <View style={style.item}>
                        <Image source={{ uri: '' }}
                            style={style.imgP} />
                        <View style={style.description}>
                            <Text style={style.nomeProduto}>Produto 1</Text>
                            <Text style={style.descricao}>Descrição do produto</Text>
                            <Text style={style.value}>Valor do Produto</Text>
                        </View>
                        <Pressable style={style.botao}>Comprar</Pressable>
                    </View>
                </View>

                <View style={style.efeito}>
                    <View style={style.item}>
                        <Image source={{ uri: '' }}
                            style={style.imgP} />
                        <View style={style.description}>
                            <Text style={style.nomeProduto}>Produto 2</Text>
                            <Text style={style.descricao}>Descrição do produto</Text>
                            <Text style={style.value}>Valor do Produto</Text>
                        </View>
                        <Pressable style={style.botao}>Comprar</Pressable>
                    </View>
                </View>

                <View style={style.efeito}>
                    <View style={style.item}>
                        <Image source={{ uri: '' }}
                            style={style.imgP} />
                        <View style={style.description}>
                            <Text style={style.nomeProduto}>Produto 3</Text>
                            <Text style={style.descricao}>Descrição do produto</Text>
                            <Text style={style.value}>Valor do Produto</Text>
                        </View>
                        <Pressable style={style.botao}>Comprar</Pressable>
                    </View>
                </View>

            </View>
        </View>

    )

}