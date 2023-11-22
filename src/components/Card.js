import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from "../style/globalStyles";

const Card = (props) => {

    const nome = props.nome
    const data = props.data
    const urlImagem = props.imagem

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[globalStyles.card, styles.backgroundCard]}>
                {urlImagem ? <Image source={{ uri: urlImagem }} style={styles.imagemPesquisa} /> : null}
                <Text style={styles.nomePesquisa}>{nome}</Text>
                <Text style={styles.dataPesquisa}>{data}</Text>
            </View>
        </TouchableOpacity>
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
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 140,
        borderRadius: 10,
        marginVertical: 15,
        backgroundColor: '#ffffff',
    },

    

});

export default Card;