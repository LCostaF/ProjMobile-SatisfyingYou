import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../style/globalStyles';
import Botao from '../components/Botao';
import Input from '../components/Input';

const NovaPesquisa = (props) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [errorMessageNome, setErrorMessageNome] = useState('');
  const [errorMessageData, setErrorMessageData] = useState('');

  const handleNomeChange = (text) => {
    if (text.length == '') {
      setErrorMessageNome('Preencha no nome da pesquisa');
    } else {
      setErrorMessageNome('');
    }
  };

  const handleDataChange = (text) => {
    if (text.length == '') {
      setErrorMessageData('Preencha a data');
    } else {
      setErrorMessageData('');
    }
  };

  const goToDrawer = () => {
    props.navigation.navigate('Drawer')
  };

  return (
    <View style={globalStyles.root}>
      <View style={estilos.containerNovaPesquisa}>
        <View>
          <Text style={globalStyles.label}>Nome</Text>
          <Input value={nome} onChangeText={(text) => { setNome(text); handleNomeChange(text); }} />
          {errorMessageNome ? <Text style={globalStyles.error}>{errorMessageNome}</Text> : null}
        </View>

        <View>
          <Text style={globalStyles.label}>Data</Text>
          <Input value={data} onChangeText={(text) => { setData(text); handleDataChange(text); }} />
          {errorMessageData ? <Text style={globalStyles.error}>{errorMessageData}</Text> : null}
        </View>

        <View>
          <Text style={globalStyles.label}>Imagem</Text>
          <Image style={estilos.image} source={require('../../assets/images/rectangle.png')} />
        </View>

        <View style={estilos.buttonContainer}>
          <Botao texto="CADASTRAR" funcao={goToDrawer} />
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  containerNovaPesquisa: {
    width: '70%',
    flexDirection: 'column',
  },

  buttonContainer: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'red',
  },  
});

export default NovaPesquisa;