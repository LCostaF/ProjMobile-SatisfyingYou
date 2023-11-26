import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { PieChart } from 'react-native-svg-charts';

const Relatorio = (props) => {
    
    // Estado para armazenar os dados da pesquisa
    const [dadosPesquisa, setDadosPesquisa] = useState([]);

    // Cores utilizadas no gráfico e nas legendas
    const cores = {
        excelente: '#F1CE7E',
        bom: '#6994FE',
        neutro: '#5FCDA4',
        ruim: '#EA7288',
        pessimo: '#53D8D8',
    };

    // Efeito para buscar dados no Firebase ao carregar o componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const pesquisaRef = doc(db, "pesquisa", props.route.params.pesquisaId);

                const unsubscribe = onSnapshot(pesquisaRef, (snapshot) => {
                    const data = snapshot.data();

                    setDadosPesquisa([
                        { key: 1, value: data.pessimo || 0, svg: { fill: cores.pessimo } },
                        { key: 2, value: data.ruim || 0, svg: { fill: cores.ruim } },
                        { key: 3, value: data.neutro || 0, svg: { fill: cores.neutro } },
                        { key: 4, value: data.bom || 0, svg: { fill: cores.bom } },
                        { key: 5, value: data.excelente || 0, svg: { fill: cores.excelente } },
                    ]);
                });

                return () => {
                    unsubscribe();
                };
            } catch (error) {
                console.error("Erro ao buscar dados da pesquisa no Firebase:", error);
            }
        };

        fetchData();
    }, [props.route.params.pesquisaId]);

    return (
        <View style={estilos.root}>

            <View style={estilos.cGrafico}>
                <PieChart
                    style={{ height: 250, width: 250 }}
                    outerRadius={'70%'}
                    innerRadius={10}
                    data={dadosPesquisa}
                />
            </View>

            <View style={estilos.cLegendas}>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color={cores.excelente} />
                    <Text style={estilos.legenda}>Excelente</Text>
                </View>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color={cores.bom} />
                    <Text style={estilos.legenda}>Bom</Text>
                </View>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color={cores.neutro} />
                    <Text style={estilos.legenda}>Neutro</Text>
                </View>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color={cores.ruim} />
                    <Text style={estilos.legenda}>Ruim</Text>
                </View>
                <View style={estilos.cLegenda}>
                    <Icon name="stop" size={40} color={cores.pessimo} />
                    <Text style={estilos.legenda}>Péssimo</Text>
                </View>
            </View>

        </View>
    )
}



const estilos = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: '#372775',
    },
    titulo: {
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
    },
    cGrafico: {
        color: "#FFFFFF",
        width: "40%",
        height: "80%"
    },
    cLegendas: {
        flexDirection: "column",
        justifyContent: "space-around",
        height: "50%",
        marginTop: 70
    },
    cLegenda: {
        flexDirection: "row",
        alignItems: "center"
    },
    grafico: {
        marginTop: 20,
        width: 250,
        height: 250
    },
    legenda: {
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
    }
});

export default Relatorio;
