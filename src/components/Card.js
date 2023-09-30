import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles } from "../style/globalStyles";

const Card = (props) => {

    const nome = props.nome
    const data = props.data
    const imagem = props.imagem

    return (
        <View style={[globalStyles.card, styles.backgroundCard]}>
            <Image source={imagem} style={styles.imagemPesquisa} />
            <Text style={styles.nomePesquisa}>{nome}</Text>
            <Text style={styles.dataPesquisa}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
    imagemPesquisa: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },

    nomePesquisa: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
    },

    dataPesquisa: {
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
        color: '#8B8B8B',
    },

    backgroundCard: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 140,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },

});

export default Card;