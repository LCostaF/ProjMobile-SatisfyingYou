import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from '../style/globalStyles';

const AgradecimentoParticipacao = (props) => {

    useEffect(() => {
        // Configura um timer de 3 segundos
        const timer = setTimeout(() => {
          // Navega para a tela 'Coleta' após 3 segundos
          props.navigation.navigate('Coleta');
        }, 3000); // 3000 milissegundos (3 segundos)
    
        // Limpa o timer quando o componente for desmontado
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={globalStyles.root}>
            <View style={styles.containerAgradecimento}>
                <Text style={globalStyles.text}>Obrigado por participar da pesquisa!</Text>
                <Text style={[globalStyles.text, styles.spacing]}>Aguardamos você no próximo ano!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    containerAgradecimento: {
        width: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    spacing: {
        marginTop: 30, // Espaçamento entre os Text
    }

});

export default AgradecimentoParticipacao