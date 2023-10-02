//Importação
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

//Definição da função do componente
const Botao = (props) => {

    const texto = props.texto

    return (
        <TouchableOpacity style={estilos.button} onPress={props.funcao}>
            <Text style={estilos.buttonText}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#37BD6D',
        fontWeight: 'bold'
      },
    
      buttonText: {
        color: '#fff',
        fontFamily: 'AveriaLibre-Bold',
      },
})

//Exportação
export default Botao