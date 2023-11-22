import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../style/globalStyles';
import Botao from '../components/Botao';
import Input from '../components/Input';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../config/firebase';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';

const pesquisaCollection = collection(db, "pesquisa");

const NovaPesquisa = (props) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [urlFoto, setUrlFoto] = useState('');
  const [foto, setFoto] = useState();

  const [errorMessageNome, setErrorMessageNome] = useState('');
  const [errorMessageData, setErrorMessageData] = useState('');

  const addPesquisa = async () => {
    const nomeDaImagem = nome + ".jpg";
    const imageRef = ref(storage, `mobileImages/${nomeDaImagem}`)
    const file = await fetch(urlFoto)
    const blob = await file.blob() //Extrai os bytes do arq
    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
      .then(
        () => {
          console.log('Arquivo enviado com sucesso.')
          getDownloadURL(imageRef)
            .then(
              (url) => {
                const documento = {
                  nome: nome,
                  data: data,
                  imageUrl: url
                }

                addDoc(pesquisaCollection, documento).
                  then((docRef) => {
                    console.log('Documento inserido com sucesso: ', docRef.id);
                    goToDrawer()
                  }).catch((error) => {
                    console.error('Erro ao adicionar documento: ', error);
                  });
              }
            )
            .catch(
              (error) => {
                console.log('Erro ao pegar a URL: ' + JSON.stringify(error))
              }
            )
        }
      )
      .catch(
        (error) => {
          console.log('Erro ao enviar o arquivo: ' + JSON.stringify(error))
        }
      )
    console.log('Console da pesquisaCollection:', pesquisaCollection);
  };

  const capturarImagem = () => {
    {/* Abre a câmera */}
    { /*launchCamera({ mediaType: 'photo', cameraType: 'front', quality: 1 }) */}
    launchImageLibrary()
      .then(
        (result) => {
          setUrlFoto(result.assets[0].uri)
          setFoto(result.assets[0])
        }
      )
      .catch( (errr) => {
        console.log('Erro ao capturar a imagem: ' + JSON.stringify(error))
      })
  }
  

  const handleNomeChange = (text) => {
    if (text.length === 0) {
      setErrorMessageNome('Preencha o nome da pesquisa');
    } else {
      setErrorMessageNome('');
    }
  };

  const handleDataChange = (text) => {
    if (text.length === 0) {
      setErrorMessageData('Preencha a data');
    } else {
      setErrorMessageData('');
    }
  };

  const goToDrawer = () => {
    props.navigation.navigate('Drawer');
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

          {/* <Image style={estilos.image} source={require('../../assets/images/rectangle.png')} /> */}
          { urlFoto ? <Image source={ {uri: urlFoto} } style={ {width: 100, height: 100} } /> : null }
          <Botao texto="Capturar imagem" funcao={capturarImagem} />
        </View>

        <View style={estilos.buttonContainer}>
          <Botao texto="CADASTRAR" funcao={addPesquisa} />
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

export { pesquisaCollection };
export default NovaPesquisa;