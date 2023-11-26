import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from '../style/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

const Coleta = (props) => {

    // Obtém o ID da pesquisa da navegação
    const { pesquisaId } = props.route.params;

    // Estados para armazenar as contagens de avaliações
    const [pessimo, setPessimo] = useState(0);
    const [ruim, setRuim] = useState(0);
    const [neutro, setNeutro] = useState(0);
    const [bom, setBom] = useState(0);
    const [excelente, setExcelente] = useState(0);

    // Efeito para buscar dados no Firebase ao carregar o componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const pesquisaRef = doc(db, "pesquisa", pesquisaId);

                const unsubscribe = onSnapshot(pesquisaRef, (snapshot) => {
                    const data = snapshot.data();
                    setPessimo(data.pessimo || 0);
                    setRuim(data.ruim || 0);
                    setNeutro(data.neutro || 0);
                    setBom(data.bom || 0);
                    setExcelente(data.excelente || 0);
                });

                return () => {
                    unsubscribe();
                };
            } catch (error) {
                console.error("Erro ao buscar dados do Firebase:", error);
            }
        };

        fetchData();
    }, [pesquisaId]);

    // Função para lidar com o clique nos botões de avaliação
    const handlePress = (avaliacao) => {
        switch (avaliacao) {
            case 'pessimo':
                setPessimo((prev) => prev + 1);
                break;
            case 'ruim':
                setRuim((prev) => prev + 1);
                break;
            case 'neutro':
                setNeutro((prev) => prev + 1);
                break;
            case 'bom':
                setBom((prev) => prev + 1);
                break;
            case 'excelente':
                setExcelente((prev) => prev + 1);
                break;
            default:
                break;
        }

        const pesquisaRef = doc(db, "pesquisa", pesquisaId);
        const updateFields = {
            pessimo: pessimo + (avaliacao === 'pessimo' ? 1 : 0),
            ruim: ruim + (avaliacao === 'ruim' ? 1 : 0),
            neutro: neutro + (avaliacao === 'neutro' ? 1 : 0),
            bom: bom + (avaliacao === 'bom' ? 1 : 0),
            excelente: excelente + (avaliacao === 'excelente' ? 1 : 0),
        };

        try {
            updateDoc(pesquisaRef, updateFields);
            props.navigation.navigate('Agradecimento', { pesquisaId });
        } catch (error) {
            console.error("Erro ao atualizar dados no Firebase:", error);
        }
    };

    return (
        <View style={globalStyles.root}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={globalStyles.text}>O que você achou do Carnaval 2024?</Text>
                </TouchableOpacity>

                <View style={styles.containerColeta}>
                    <TouchableOpacity onPress={() => handlePress('pessimo')}>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-very-dissatisfied" size={80} color="#d71616" />
                            <Text style={styles.label}>Péssimo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('ruim')}>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-dissatisfied" size={80} color="#ff360a" />
                            <Text style={styles.label}>Ruim</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('neutro')}>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-neutral" size={80} color="#ffc632" />
                            <Text style={styles.label}>Neutro</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('bom')}>
                        <View style={styles.imageItemContainer}>
                            <Icon name="sentiment-satisfied-alt" size={80} color="#37bd6d" />
                            <Text style={styles.label}>Bom</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('excelente')}>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        marginBottom: 50
    },
    containerColeta: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 50,
        paddingHorizontal: 20
    },
    imageItemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    label: {
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
        marginTop: 10
    },
});

export default Coleta;