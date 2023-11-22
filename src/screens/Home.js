import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native';
import { globalStyles } from '../style/globalStyles';
import Botao from '../components/Botao';
import Card from '../components/Card';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { onSnapshot, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import { pesquisaCollection } from './NovaPesquisa';

const Home = (props) => {
    const [busca, setSearch] = useState('');
    const [pesquisas, setPesquisas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4;

    const goToAcoesPesquisa = (pesquisaId) => {
        props.navigation.navigate('Acoes Pesquisa', { pesquisaId });
    };

    const goToNovaPesquisa = () => {
        props.navigation.navigate('Nova pesquisa');
    };

    useEffect(() => {
        const q = query(pesquisaCollection);

        const unsubscribe = onSnapshot(q, (resultado) => {
            const listaPesquisa = [];
            resultado.forEach((doc) => {
                listaPesquisa.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            setPesquisas(listaPesquisa);
        });
    }, []);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = pesquisas.slice(indexOfFirstCard, indexOfLastCard);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: '',
            headerStyle: { backgroundColor: '#2B1D62' },
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.openDrawer();
                    }}
                >
                    <Icon name="menu" size={30} style={{ marginLeft: 15, color: '#ffffff' }} />
                </TouchableOpacity>
            ),
        });
    }, [props.navigation]);

    return (
        <View style={globalStyles.root}>
            <View style={styles.containerHome}>
                <View style={styles.busca}>
                    <Icon name="search" size={40} />
                    <View style={styles.containerInput}>
                        <Input
                            style={globalStyles.txtInput}
                            value={busca}
                            onChangeText={(text) => {
                                setSearch(text);
                            }}
                        />
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.cardsContainer}>
                        {currentCards.map((pesquisa) => (
                            <Card
                                key={pesquisa.id}
                                nome={pesquisa.nome}
                                data={pesquisa.data}
                                imagem={pesquisa.imageUrl}
                                onPress={() => goToAcoesPesquisa(pesquisa.id)}
                            />
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.paginas}>
                    <TouchableOpacity
                        onPress={() => setCurrentPage((prevPage) => prevPage > 1 ? prevPage - 1 : prevPage)}
                        style={[styles.paginationText, currentPage === 1 && { opacity: 0.5 }]}>
                        <Text style={styles.textoBranco}>Página Anterior</Text>
                    </TouchableOpacity>

                    <Text style={{ color: '#37BD6D' }}>{`Página ${currentPage}`}</Text>

                    <TouchableOpacity
                        onPress={() => setCurrentPage((prevPage) => prevPage < Math.ceil(pesquisas.length / cardsPerPage) ? prevPage + 1 : prevPage)}
                        style={[styles.paginationText, currentPage === Math.ceil(pesquisas.length / cardsPerPage) && { opacity: 0.5 }]}>
                        <Text style={styles.textoBranco}>Próxima Página</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Botao texto="NOVA PESQUISA" funcao={goToNovaPesquisa} style={styles.espacamento} />
                </View>
            </View>
        </View>
    );
}

//Estilos
const styles = StyleSheet.create({

    containerHome: {
        height: '95%',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    containerInput: {
        flex: 1,
        width: '100%',
    },
    busca: {
        height: '15%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    cardsPesquisas: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },

    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    espacamento: {
        marginTop: 20, // Ajuste a margem conforme necessário
    },

    paginas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textoBranco: {
        color: 'white'
    }
})

//Exportação
export default Home