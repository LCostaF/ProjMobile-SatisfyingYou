import React, { useState } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { globalStyles } from '../style/globalStyles';
import Botao from '../components/Botao';
import Input from '../components/Input';
import { validateEmail } from '../validation/validateEmail ';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../config/firebase';

const NovaConta = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (inputEmail) => {
    const isValidEmail = validateEmail(inputEmail);

    if (!isValidEmail) {
      setErrorMessage('E-mail inválido');
    } else {
      setErrorMessage('');
    }
  };

  const handleRegister = (confirmInput) => {
    if (password !== confirmInput) {
      setErrorMessage('O campo repetir senha difere da senha');
    } else {
      setErrorMessage('');
    }
  };

  const goToLogin = () => {
    props.navigation.navigate('Login')
  }

  const cadastrarUsuario = () => {
    if(validateEmail(email) && (password === confirmPassword) ) {
      createUserWithEmailAndPassword(auth_mod, email, password) //Chamada Assíncrona: Não tem prazo especifíco para acabar, continua a executar o código. Para tratar o retorno da função usa o then
        .then((contaCriada) => { //Função de call back
          console.log("User criado com sucesso: " + JSON.stringify(contaCriada));
          goToLogin();
        })
        .catch((erro) => {
          console.log("Erro ao criar usuario: " + JSON.stringify(erro));
        })
    } else {
      setErrorMessage('AAAAAAAAAAAAAAA');
    }
  }

  return (
    <View style={globalStyles.root}>
      <View style={styles.containerNovaConta}>

      <View>
        <Text style={globalStyles.label}>E-mail</Text>
          <Input
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              handleEmailChange(text); // Chama a função de validação ao digitar
            }}
          />
        </View>

        <View>
          <Text style={globalStyles.label}>Senha</Text>
          <Input
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View>
          <Text style={globalStyles.label}>Repetir Senha</Text>
          <Input
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              handleRegister(text); // Chama a função de validação ao digitar
            }}
          />
          {errorMessage ? <Text style={globalStyles.error}>{errorMessage}</Text> : null}
        </View>

        <View style={styles.buttonContainer}>
          <Botao texto="CADASTRAR" funcao={cadastrarUsuario} />
        </View>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  containerNovaConta: {
    width: '70%',
    flexDirection: 'column',
  },

  buttonContainer: {
    width: '100%',
    marginTop: 20,
    backgroundColor: 'red'
  }

});

export default NovaConta;