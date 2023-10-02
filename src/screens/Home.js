//Importação
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { globalStyles } from '../style/globalStyles';

import Botao from '../components/Botao';
import Card from '../components/Card';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Definição
const Home = (props) => {

    const [busca, setSearch] = useState('')

    const goToCarnaval = () => {
        props.navigation.navigate('Carnaval')
    };

    const goToNovaPesquisa = () => {
        props.navigation.navigate('Nova pesquisa')
    }

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerTitle: '',
          headerStyle: {backgroundColor: '#2B1D62'},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.openDrawer();
              }}
            >
              <Icon name="menu" size={30} style={{ marginLeft: 15, color: '#ffffff' }} />
            </TouchableOpacity>
          ),
        });
      }, [props.navigation]);

    return (
        <View style={globalStyles.root}>
            <View style={styles.containerHome}>
                <View style={styles.busca}>
                    <Icon name="search" size={40} />
                    <View style={styles.containerInput}>
                        <Input
                            style={globalStyles.txtInput}
                            value={busca}
                            onChangeText={(text) => {
                                setSearch(text);
                            }}
                        />
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.cardsPesquisas} onPress={goToCarnaval}>
                        <Card nome="SECOMP 2023" data="10/10/2023" imagem={require("../../assets/images/CardSecomp.png")} />
                        <Card nome="UBUNTU 2022" data="05/06/2022" imagem={require("../../assets/images/CardUbuntu.png")} />
                        <Card nome="MENINAS CPU" data="01/04/2022" imagem={require("../../assets/images/CardMeninas.png")} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Botao texto="NOVA PESQUISA" funcao={goToNovaPesquisa} />
                </View>
            </View>
        </View>
    )
}
  
//Estilos
const styles = StyleSheet.create({

    containerHome: {
        height: '85%',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    containerInput: {
        flex: 1,
        width: '100%',
    },
    busca: {
        height: '15%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    cardsPesquisas: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }

})
  
//Exportação
export default Home