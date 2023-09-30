import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { globalStyles } from "../style/globalStyles";

const AcoesPesquisa = () => {

    const handleModificarPress = () => {
        // Ação a ser executada quando "Modificar" for clicado
        console.log("Modificar clicado!");
        // Você pode adicionar mais lógica aqui, como navegar para outra tela.
      };

    return (
        <View style={styles.root}>
            <View style={styles.container}>

                <TouchableOpacity style={[globalStyles.card, styles.backgroundCard]} onPress={handleModificarPress}>
                    <Image
                        style={styles.image}
                        source={require("../../assets/images/VectorModificar.png")}
                    />
                    <Text style={styles.title}>Modificar</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity style={[globalStyles.card, styles.backgroundCard]} onPress={handleModificarPress}>
                    <Image 
                        style={styles.image}
                        source={require('../../assets/images/VectorColetarDados.png')}
                    />
                    <Text style={styles.title}>Coletar dados</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={[globalStyles.card, styles.backgroundCard]} onPress={handleModificarPress}>
                    <Image 
                        style={styles.image}
                        source={require('../../assets/images/VectorRelatorio.png')}
                    />
                    <Text style={styles.title}>Relatório</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#372775',
    },

    container: {
        width: '90%',
        height: 205,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap"
    },

    backgroundCard: {
        backgroundColor: '#312464',
    },

    image: {
        width: 80,
        height: 80
    },

    title: {
        color: '#FFFFFF',
        fontSize: 24,
        marginTop: 10,
        textAlign: 'center'
    }

});

export default AcoesPesquisa