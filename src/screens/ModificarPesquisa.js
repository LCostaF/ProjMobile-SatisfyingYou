import { View, Text, Modal, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Botao from '../components/Botao'
import Input from '../components/Input';
import Icon from "react-native-vector-icons/MaterialIcons"
import { deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { pesquisaCollection } from "./NovaPesquisa";
import { db } from '../config/firebase';

const ModificarPesquisa = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [nomePesquisa, setNome] = useState('')
  const [data, setData] = useState('')
  const [listaPesquisa, setListaPesquisa] = useState()

  //É executada assim que a tela é aberta
  useEffect( () => {
    const q = query(pesquisaCollection)

    const unsubscribe = onSnapshot(q, (snapshot) =>{
      const search = []
      snapshot.forEach( (doc) => {
        search.push({
          id: doc.id,
          ...doc.data()
        })
      })

      setListaPesquisa(search)

    }) //Executa uma determinada consulta dentro da coleção pesquisa
  }, []) //Executa a função usereffect, somente uma única vez dentro da tela

  const atualizarPesquisa = (id) => {
    const pesquisaRef = doc(db, "pesquisa", id)

    updateDoc(pesquisaRef, {
      nome: nomePesquisa,
      data: data,
      //imagem: image,
    })
  };

  const deletePesquisa = (id) => {
    deleteDoc(doc(db, "pesquisa", id))
  }

  const goToDrawer = () => {
    props.navigation.navigate('Drawer')
  };

  const goToCarnaval = () => {
    props.navigation.navigate('Carnaval')
  };

  return (
    <View style={estilos.root}>
      <View style={estilos.cModificar}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <TouchableOpacity style={estilos.outerView} onPress={() => setModalVisible(false)}>
            <View style={estilos.modalView}>
              <Text style={estilos.modalTitle}>Tem certeza de apagar essa pesquisa?</Text>

              <View style={estilos.modalButtonContainer}>
                <TouchableOpacity style={estilos.modalButtonSim} onPress={() => { setModalVisible(false); deletePesquisa('bUODF2tTtDJht6aAgz6U'); goToDrawer(); }}>
                  <Text style={estilos.buttonText}>SIM</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.modalButtonCancelar} onPress={() => { setModalVisible(false); goToCarnaval(); }}>
                  <Text style={estilos.buttonText}>CANCELAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>

        <Text style={estilos.titulo}>Nome</Text>
        <Input
          value={nomePesquisa}
          onChangeText={setNome}
        />

        <Text style={estilos.titulo}>Data</Text>
        <Input
          value={data}
          onChangeText={setData}
        />

        <Text style={estilos.titulo}>Imagem</Text>
        <View style={estilos.cImagem}>
          <Icon name="celebration" size={50} color="#C60EB3" />
        </View>

      </View>
      <View style={estilos.cBotoes}>
        <View style={estilos.salvar}>
          <Botao texto="SALVAR" funcao={atualizarPesquisa('RNxnIUUGWkMDbi8aJ54V')} />
        </View>
        <View style={estilos.deletar}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={estilos.cIcon}>
              <Icon name="delete-outline" size={35} color="#FFFFFF" />
            </View>
            <View style={estilos.cLabel}>
              <Text style={estilos.label}>Apagar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

//Estilos
const estilos = StyleSheet.create({
  cModificar: {

    flex: 0.8,
    flexDirection: "column",
    justifyContent: "center",
    width: "60%",
    marginTop: 30,
    marginLeft: 150
  },
  cImagem: {
    backgroundColor: "#FFFFFF",
    width: "45%",
    height: "30%",
    marginBottom: 25,
    alignItems: "center"
  },
  cBotoes: {
    flex: 0.15,
    flexDirection: "row",
    marginBottom: 10
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    backgroundColor: '#372775',
    padding: 10
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF',

  },
  textInput: {
    width: "100%",
    height: 35,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    color: "#3F92C5"
  },
  erro: {
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    marginBottom: 40
  },
  salvar: {
    width: "60%",
    height: 30,
    marginLeft: 150
  },
  deletar: {
    width: "18%",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  cIcon: {
    marginRight: 5
  },
  label: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF',
  },
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    backgroundColor: '#2B1F5C',
    padding: 20,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalButtonSim: {
    width: 125,
    height: 40,
    backgroundColor: '#FF8383',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  modalButtonCancelar: {
    width: 125,
    height: 40,
    backgroundColor: '#3F92C5',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  modalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

})

export default ModificarPesquisa