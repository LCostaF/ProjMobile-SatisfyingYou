//Importação
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Botao from '../components/Botao';
import Input from '../components/Input';
import { validateEmail } from '../validation/validateEmail ';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth_mod } from "../config/firebase";

//Definição
const RecuperarSenha = (props) => {

  const [txtEmail, setEmail] = useState('')

  const [txtErro, setErro] = useState('')


  const isValidEmail = () => {
    let email = txtEmail
    const validEmail = validateEmail(email);
    
    if(!validEmail){
        setErro("E-mail parece ser invalido")
    } else{
        setErro("")
    }
  };

  const goToLogin = () => {
    props.navigation.navigate('Login')
  };

  const recoverPassword = () => {
    sendPasswordResetEmail(auth_mod, txtEmail)
      .then(() => {
        console.log("Email de redefinição enviado com sucesso, verifique sua caixa de entrada");
        goToLogin();
      })
      .catch((erro) => {
        console.log("Falha no envio do email: " + JSON.stringify(erro));
      })
  }

  return(
      <View style={estilos.root}>

        <View style={estilos.cRecuperar}>
          <Text style={estilos.titulo}>E-mail</Text>
          <Input value={txtEmail} onChangeText={(text) => {
              setEmail(text);
              isValidEmail(text);
          }} />
          <Text style={estilos.erro}>{txtErro}</Text>

          <Botao texto="RECUPERAR" funcao={recoverPassword}/>

        </View>

      </View>
  )
}

//Estilos
const estilos = StyleSheet.create({
  cRecuperar: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    backgroundColor: '#372775',
    padding: 100
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF',
  },
  textInput: {
    width: "100%",
    height: 40,
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

  
})

export default RecuperarSenha