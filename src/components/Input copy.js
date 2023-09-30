import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  const { tipo, label, valor, onChange, errorMessage, password } = props;

  const validarEmail = (email) => {
    // Expressão regular para validar o formato do email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validarSenha = (confirmPassword) => {
    if (password !== confirmPassword) 
        return false
    
    return true
  };

  const handleChange = (text) => {
    if (tipo === "email" && !validarEmail(text)) {
        errorMessage('E-mail inválido');
    } else if (tipo === "confirmarSenha" && password !== null && !validarSenha(text)) {
        errorMessage('O campo repetir senha difere da senha');
    } else

    onChange(text);
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={handleChange}
        secureTextEntry={tipo === "senha" || tipo === "confirmarSenha"}
        keyboardType={tipo === "email" ? "email-address" : "default"}
      />
      {tipo === "confirmarSenha" ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color: '#3F92C5',
        fontSize: 14,
        backgroundColor: '#FFFFFF',
        paddingLeft: 10
    },

    error: {
        color: '#FD7979',
    },
});

export default Input;
