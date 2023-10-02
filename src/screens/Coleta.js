import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from '../style/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Coleta = (props) => {

    const goToCarnaval = () => {
        props.navigation.navigate('Carnaval')
    };

    const goToAgradecimentos = () => {
        props.navigation.navigate('Agradecimento')
    }

    return (
        <View style={globalStyles.root}>
            <View style={styles.containerColeta}>
                <TouchableOpacity style={styles.sairHidden} onPress={goToCarnaval}>
                </TouchableOpacity>
                <Text style={globalStyles.text}>O que você achou do Carnaval 2024?</Text>
                <View>
                    <TouchableOpacity style={styles.imageContainer} onPress={goToAgradecimentos}>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-very-dissatisfied" size={80} color="#d71616" />
                            <Text style={styles.label}>Péssimo</Text>
                        </View>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-dissatisfied" size={80} color="#ff360a" />
                            <Text style={styles.label}>Ruim</Text>
                        </View>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-neutral" size={80} color="#ffc632" />
                            <Text style={styles.label}>Neutro</Text>
                        </View>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-satisfied-alt" size={80} color="#37bd6d" />
                            <Text style={styles.label}>Bom</Text>
                        </View>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-very-satisfied" size={80} color="#25bc22" />
                            <Text style={styles.label}>Excelente</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sairHidden: {
        height: 50,
        width: 50,
        alignSelf: 'flex-end',
    },
    containerColeta: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 30,
    },
    imageItemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
    },
    image: {
        width: 75,
        height: 75,
    },
    imageText: {
        marginTop: 10,
        textAlign: 'center',
    },
    spacing: {
        marginTop: 30,
    },
    label: {
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
        marginTop: 10,
    }
});

export default Coleta;
