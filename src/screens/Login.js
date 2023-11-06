//Importação
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { globalStyles } from '../style/globalStyles';

import Botao from '../components/Botao';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { validateEmail } from '../validation/validateEmail ';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../config/firebase';

import { useDispatch } from 'react-redux';
import { reducerSetLogin } from '../redux/loginSlice';

//Definição
const Login = (props) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const handleEmailChange = (inputEmail) => {
        const isValidEmail = validateEmail(inputEmail);
    
        if (!isValidEmail) {
          setErrorMessage('E-mail e/ou senha inválidos.');
        } else {
          setErrorMessage('');
        }
    };

    const handlePasswordChange = (inputPassword) => {
        if (inputPassword == '') {
            setErrorMessage('E-mail e/ou senha inválidos.');
        } else {
            setErrorMessage('');
          }
    };

    const goToDrawer = () => {
        props.navigation.navigate('Drawer')
    };

    const goToNovaConta = () => {
        props.navigation.navigate('Nova Conta')
    };

    const goToRecuperar = () => {
        props.navigation.navigate('Recuperação de senha')
    };

    const autenticarUsuario = () => {
        signInWithEmailAndPassword(auth_mod, email, password)
            .then((userLogged) => {
                console.log("Usuário autenticado com sucesso: " + JSON.stringify(userLogged));
                dispatch(reducerSetLogin({email: email}));
                goToDrawer();
            })
            .catch((erro) => {
                console.log("Falha ao autenticar usuario: " + JSON.stringify(erro));
            })
    }

    return (
        <View style={globalStyles.root}>
            <View style={styles.containerLogin}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Satisfying.you</Text>
                    <Icon name="sentiment-satisfied-alt" size={50} color="#ffffff" />
                </View>

                <View>
                    <Text style={globalStyles.label}>E-mail</Text>
                    <Input
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            handleEmailChange(text);
                        }}
                    />
                </View>

                <View>
                    <Text style={globalStyles.label}>Senha</Text>
                    <Input
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                            handlePasswordChange(text);
                        }}
                    />
                    {errorMessage ? <Text style={globalStyles.error}>{errorMessage}</Text> : null}
                </View>

                <View style={styles.containerEntrar}>
                    <Botao texto="Entrar" funcao={autenticarUsuario}/>
                </View>

                <View style={styles.containerCriarEsqueceu}>
                    <View style={styles.containerBotao}>
                        <TouchableOpacity style={styles.botaoCriar} onPress={goToNovaConta}>
                            <Text style={styles.textoBotoes}>{"Criar minha conta"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBotao}>
                        <TouchableOpacity style={styles.botaoEsqueceu} onPress={goToRecuperar}>
                            <Text style={styles.textoBotoes}>{"Esqueci minha senha"}</Text>
                        </TouchableOpacity>
                    </View>                
                </View>
            </View>
        </View>
    )

}
  
//Estilos
const styles = StyleSheet.create({

    titulo: {
        fontSize: 36,
        fontFamily: 'AveriaLibre-Bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    containerCriarEsqueceu: {
        height: '20%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    containerLogin: {
        height: '95%',
        width: '80%',
        flexDirection: 'column',
    },
    containerEntrar: {
        width: '100%',
        marginTop: 20,
    },
    containerBotao: {
        height: '45%',
        width: '100%',
        alignSelf: 'center',
    },
    botaoCriar: {
        width: '100%',
        height: '90%',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#419ED7',
    },
    botaoEsqueceu: {
        width: '100%',
        height: '90%',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0CCDE',
    },
    textoBotoes: {
        color: '#fff',
        fontFamily: 'AveriaLibre-Bold',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }

})
  
//Exportação
export default Login