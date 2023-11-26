import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { globalStyles } from "../style/globalStyles";
import Icon from 'react-native-vector-icons/MaterialIcons';

const AcoesPesquisa = (props) => {

    const { pesquisaId } = props.route.params

    console.log('Ações da Pesquisa: ' + pesquisaId)

    const goToModificar = () => {
        props.navigation.navigate('Modificar pesquisa', { pesquisaId })
    };

    const goToColeta = () => {
        props.navigation.navigate('Coleta', { pesquisaId })
    };

    const goToRelatorio = () => {
        props.navigation.navigate('Relatório', { pesquisaId })
    };

    return (
        <View style={styles.root}>
            <View style={styles.container}>

                <TouchableOpacity style={[globalStyles.card, styles.backgroundCard]} onPress={goToModificar}>
                    <Icon name="edit-document" size={80} color="#ffffff" />
                    <Text style={styles.title}>Modificar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[globalStyles.card, styles.backgroundCard]} onPress={goToColeta}>
                    <Icon name="library-add-check" size={80} color="#ffffff" />
                    <Text style={styles.title}>Coletar dados</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={[globalStyles.card, styles.backgroundCard]} onPress={goToRelatorio}>
                    <Icon name="donut-large" size={80} color="#ffffff" />
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